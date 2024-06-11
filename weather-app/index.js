const apikey = "3345e73d17300187cf5b707ec0eaeb71";

//Refers to the div with the Id of "weather-data", i.e the large div with all the data in it//
const weatherDataEl = document.getElementById("weather-data");
//getElementByUd() is faster than querySelector() because it only needs to search for one element.
//querySelector() may need to search for multiple elements
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

//Async functions use `await keyword`
async function getWeatherData(cityValue) {
  try {
    //await for response to be received before code proceeds to next line
    const response = await fetch(
      //Notice how we are passing in the cityValue data and apikey into the response fetch request
      `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    //Notice how when you omit the await below, you get a Promise returned in the console
    const data = await response.json();
    const temperatue = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;

    const details = [
      `Feels like: ${Math.round(data.main.feels_like)}`,
      `Humidity: ${data.main.humiditiy}`,
      `Wind Speed: ${data.wind.speed}`,
    ];
    //Backticks used because DYNAMISM
    //Also I presume querySelector is used when needing dynamism?
    weatherDataEl.querySelector(
      ".icon"
    ).innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" 
    alt="Weather Icon"/>`;
    weatherDataEl.querySelector(".temperature").textContent = `${temperatue}°C`;
    weatherDataEl.querySelector(".description").textContent = description;

    weatherDataEl.querySelector(".details");
  } catch (error) {}
}
