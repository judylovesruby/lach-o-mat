fetch('javascript/jokes.json')
  .then(response => response.json())
  .then(allJokes => showRandomJoke(allJokes['de']))

function showRandomJoke(jokes) {
  newJoke = getRandomJoke(jokes)
  document.querySelector('.joke--text').innerHTML = newJoke
}

function getRandomJoke(jokes) {
  index = Math.floor(Math.random() * jokes.length)
  return jokes[index]
}



