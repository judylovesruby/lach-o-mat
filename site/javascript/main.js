fetch('javascript/jokes.json')
  .then(response => response.json())
  .then(allJokes => showRandomJoke(allJokes['de']))

function showRandomJoke(jokes) {
  let newJoke = getRandomJoke(jokes)
  let formattedJoke = formatJoke(newJoke)
  showJoke(formattedJoke)
}

function getRandomJoke(jokes) {
  let index = Math.floor(Math.random() * jokes.length)
  return jokes[index]
}

function formatJoke(joke) {
  let formattedJoke = joke.replace(/\n/g, "<br />")
  return formattedJoke
}

function showJoke(joke) {
  document.querySelector('.joke--text p').innerHTML = joke
}


