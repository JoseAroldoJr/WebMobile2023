const apiKey = "YOUR_API_KEY";
const weatherEndpoint = "https://api.openweathermap.org/data/2.5/weather?q=";

function getWeather() {
  const locationInput = document.getElementById("location");
  const location = locationInput.value;
  if (location === "") {
    alert("Please enter a location.");
    return;
  }
  const url = `${weatherEndpoint}${location}&units=metric&appid=${apiKey}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weather = data.weather[0].description;
      const temperature = data.main.temp;
      const weatherDiv = document.getElementById("weather");
      weatherDiv.innerText = `It's currently ${temperature}°C and ${weather} in ${location}.`;
    })
    .catch(error => {
      console.error(error);
      alert("Unable to fetch weather data.");
    });
}