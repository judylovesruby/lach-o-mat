fetch('javascript/jokes.json')
    .then(response => response.json())
    .then(allJokes => {
        saveJokes(allJokes);
        if ( document.readyState === "complete" ) {
            preparePage()
        } else {
            document.addEventListener('DOMContentLoaded', preparePage);
        }
    })

function saveJokes(jokes) {
function preparePage() {
    showRandomJoke();
    initializeButton();
}

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

function initializeButton() {
    document.querySelector('.reload').addEventListener('click', showRandomJoke);
}
