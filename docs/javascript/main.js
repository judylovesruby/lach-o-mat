fetch('javascript/jokes.json')
    .then(response => response.json())
    .then(allJokes => {
        storeJokes(allJokes);
        if (document.readyState === "loading") {
            document.addEventListener('DOMContentLoaded', preparePage);
        } else {
            preparePage()
        }
    })

function preparePage() {
    reloadActions();  
    initializeButton();
}

function storeJokes(jokes) {
    window.jokes = jokes;
}

function showRandomJoke() {
    let newJoke = getRandomJoke();
    let formattedJoke = formatJoke(newJoke);
    showJoke(formattedJoke);
}

function getRandomJoke() {
    let jokes = getJokes();
    let index = Math.floor(Math.random() * jokes.length);
    return jokes[index];
}

function getJokes() {
    let allJokes = window.jokes
    if (typeof allJokes === 'undefined') {
        console.log('Could not read jokes!');
        return [];
    }
    // So far the site only shows german jokes.
    // Maybe there will be options for other languages later.
    if (typeof allJokes["de"] === 'undefined') {
        console.log('Could not read german jokes!', allJokes);
        return [];
    }
    return allJokes["de"];
}

function formatJoke(joke) {
    if (typeof joke === 'undefined') {
        console.log('Could not format joke!');
        return '';
    }
    let formattedJoke = joke.replace(/\n/g, "<br />");
    return formattedJoke;
}

function showJoke(joke) {
    document.querySelector('.joke--text p').innerHTML = joke;
}

function reloadActions() {
    showRandomJoke(); 
    runAnimation();
}

function runAnimation() {
    let animatedElement = document.querySelector('.animation--anchor');
    animatedElement.classList.add('animation--action');
    setTimeout(removeAnimation, 1300);
}

function removeAnimation() {
    let animatedElement = document.querySelector('.animation--action');
    animatedElement.classList.remove('animation--action');
}

function initializeButton() {
    let links = document.querySelectorAll('.reload')
    for (let link of links) {
        link.addEventListener('click', reloadActions);
    }
}
