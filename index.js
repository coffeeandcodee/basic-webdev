const apikey = "3345e73d17300187cf5b707ec0eaeb71";

//Refers to the div with the Id of "weather-data", i.e the large div with all the data in it//
const weatherDataElement = document.getElementById("weather-data");
const inputEl = document.getElementById("city-input");
const cityInputEl = document.getElementById("city-input");

//Using a querySelector as the form doesn't have an Id value
const formEl = document.querySelector("form");

formEl.addEventListener("submit", (event) => {
  //Default behaviour of submit button is to refresh the page. Line below prevents this default
  //behaviour
  event.preventDefault();
  const cityValue = cityInputEl.value;
  console.log(cityValue);
});
