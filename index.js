const apikey = "3345e73d17300187cf5b707ec0eaeb71";

//Refers to the div with the Id of "weather-data", i.e the large div with all the data in it//
const weatherDataEl = document.getElementById("weather-data");
const cityInputEl = document.getElementById("city-input");

//Using a querySelector as the form doesn't have an Id value
const form = document.querySelector("form");

//Default behaviour of submit button is to refresh the page. Line below prevents this default
//behaviour

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityValue = cityInputEl.value;
  console.log(cityValue);
  getWeatherData(cityValue);
});

function getWeatherData(value) {
  try {
  } catch (error) {}
}
