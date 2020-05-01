// Init ui
const ui = new UI();

// Init storage
const storage = new Storage();

// Get store location data
const weatherLocation = storage.getLocationData();

//  Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// weather.changeLocation("Chennai", "IN");

//Get weather on DOM Load
document.addEventListener("DOMContentLoaded", getWeather);

//change location event
document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;

  //change location
  weather.changeLocation(city, state);

  //set locatin in Local Storage
  storage.setLocationData(city, state);

  // get and display weather
  getWeather();
  // close the modal
  $("#locModal").modal("hide");
});

// getWeather() is of global class. not to be confused with the one of weather class
function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      console.log(results);
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}
