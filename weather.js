const weather = document.querySelector("#weather");
const timezone = document.querySelector("#timezone");
const API_KEY = "7b36fb0a8bfde7280e40ee89d33244e0";

function geoGood(userLocation) {
  console.log(userLocation.coords.latitude);
  const lat = userLocation.coords.latitude;
  const lon = userLocation.coords.longitude;
  const apiCall = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&`;
  console.log(apiCall);
  fetch(apiCall)
    .then((resData) => resData.json())
    .then((jsonedData) => {
      timezone.innerText = jsonedData.name;
      weather.innerText = `${jsonedData.weather[0].main} ${jsonedData.main.temp}'C`;
    });
}
function geoBad() {
  alert("Allow me to find your location ;( ");
}

navigator.geolocation.getCurrentPosition(geoGood, geoBad);
