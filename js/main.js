//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getWeather)
function getWeather(){
    let city = document.querySelector('input').value
    document.querySelector('.city').innerText = city
    fetch(`https://goweather.herokuapp.com/weather/${city}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('.current').innerText = data.description
      document.querySelector('.temp').innerText = data.temperature
      document.querySelector('.wind').innerText = data.wind
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}