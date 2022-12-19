let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
losAngelesDateElement.innerHTML = moment()
  .tz("America/Los Angeles")
  .format("MMMM D, YYYY");

let newYorkElement = document.querySelector("#new-york");
let newYorkDateElement = newYorkElement.querySelector(".date");
newYorkDateElement.innerHTML = moment()
  .tz("America/New York")
  .format("MMMM D, YYYY");

let londonElement = document.querySelector("#london");
let londonDateElement = londonElement.querySelector(".date");
londonDateElement.innerHTML = moment()
  .tz("Europe/London")
  .format("MMMM D, YYYY");

let tokyoElement = document.querySelector("#tokyo");
let tokyoDateElement = tokyoElement.querySelector(".date");
tokyoDateElement.innerHTML = moment().tz("Asia/Tokyo").format("MMMM D, YYYY");

let sydneyElement = document.querySelector("#sydney");
let sydneyDateElement = sydneyElement.querySelector(".date");
sydneyDateElement.innerHTML = moment()
  .tz("Australia/Sydney")
  .format("MMMM D, YYYY");
