function displayTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    losAngelesTimeElement.innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("hh:mm:ss [<small>]A[</small>]");
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    losAngelesDateElement.innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("MMMM D, YYYY");
  }

  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    newYorkTimeElement.innerHTML = moment()
      .tz("America/New_York")
      .format("hh:mm:ss [<small>]A[</small>]");
    let newYorkDateElement = newYorkElement.querySelector(".date");
    newYorkDateElement.innerHTML = moment()
      .tz("America/New_York")
      .format("MMMM D, YYYY");
  }

  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonTimeElement = londonElement.querySelector(".time");
    londonTimeElement.innerHTML = moment()
      .tz("Europe/London")
      .format("hh:mm:ss [<small>]A[</small>]");
    let londonDateElement = londonElement.querySelector(".date");
    londonDateElement.innerHTML = moment()
      .tz("Europe/London")
      .format("MMMM D, YYYY");
  }

  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    tokyoTimeElement.innerHTML = moment()
      .tz("Asia/Tokyo")
      .format("hh:mm:ss [<small>]A[</small>]");
    let tokyoDateElement = tokyoElement.querySelector(".date");
    tokyoDateElement.innerHTML = moment()
      .tz("Asia/Tokyo")
      .format("MMMM D, YYYY");
  }

  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    sydneyTimeElement.innerHTML = moment()
      .tz("Australia/Sydney")
      .format("hh:mm:ss [<small>]A[</small>]");
    let sydneyDateElement = sydneyElement.querySelector(".date");
    sydneyDateElement.innerHTML = moment()
      .tz("Australia/Sydney")
      .format("MMMM D, YYYY");
  }
}

function displayCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = event.target.options[event.target.selectedIndex].text;
  clearInterval(interval);

  updateCityInterval(cityTimeZone, cityName);
  interval = setInterval(() => {
    updateCityInterval(cityTimeZone, cityName);
  }, 1000);
}

function updateCityInterval(cityTimeZone, cityName) {
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
    cityName = cityTimeZone.replace("_", " ").split("/")[1];
  }
  let cityTime = moment().tz(cityTimeZone).format("hh:mm:ss");
  let cityAmPm = moment().tz(cityTimeZone).format("A");
  let cityDate = moment().tz(cityTimeZone).format("MMMM D, YYYY");

  let citiesElement = document.querySelector("#cities");

  if (cityTimeZone.length > 0) {
    citiesElement.innerHTML = `
          <div class="row d-flex justify-content-between" id="los-angeles">
          <div class="col 6 city-date">
            <h2>${cityName}</h2>
            <p class="date">${cityDate}</p>
          </div>
          <div class="col 6">
            <h2 class="time">${cityTime} <small>${cityAmPm}</small></h2>
          </div>
  `;
  } else {
    location.reload();
  }
}

let interval;
displayTime();
interval = setInterval(displayTime, 1000);

let citySelector = document.querySelector("#city");

citySelector.addEventListener("change", displayCity);
