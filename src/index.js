function displayTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  losAngelesTimeElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("hh:mm:ss [<small>]A[</small>]");

  let newYorkElement = document.querySelector("#new-york");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  newYorkTimeElement.innerHTML = moment()
    .tz("America/New_York")
    .format("hh:mm:ss [<small>]A[</small>]");

  let londonElement = document.querySelector("#london");
  let londonTimeElement = londonElement.querySelector(".time");
  londonTimeElement.innerHTML = moment()
    .tz("Europe/London")
    .format("hh:mm:ss [<small>]A[</small>]");

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  tokyoTimeElement.innerHTML = moment()
    .tz("Asia/Tokyo")
    .format("hh:mm:ss [<small>]A[</small>]");

  let sydneyElement = document.querySelector("#sydney");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  sydneyTimeElement.innerHTML = moment()
    .tz("Australia/Sydney")
    .format("hh:mm:ss [<small>]A[</small>]");
}

let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
losAngelesDateElement.innerHTML = moment()
  .tz("America/Los_Angeles")
  .format("MMMM D, YYYY");

let newYorkElement = document.querySelector("#new-york");
let newYorkDateElement = newYorkElement.querySelector(".date");
newYorkDateElement.innerHTML = moment()
  .tz("America/New_York")
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

displayTime();
setInterval(displayTime, 1000);
