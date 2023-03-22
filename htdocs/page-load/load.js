let importantIds = localStorage.getItem("ids") ?? [];

if (importantIds.length === 0) {
  console.log("grabbing ids from API");
  let response = await fetch("../api/images.php");
  importantIds = await response.json();
  localStorage.setItem("ids", JSON.stringify(importantIds));
  console.log("done storing ids from API");
}

let weather = localStorage.getItem("weather") ?? [];

if (weather.length === 0) {
  console.log("grabbing weather from API");
  let response = await fetch("../api/places.php");
  weather = await response.json();
  localStorage.setItem("weather", JSON.stringify(weather));
  console.log("done storing weather from API");
}

let idDivs = JSON.parse(localStorage.getItem("ids")).map((id) => {
  let div = document.createElement("div");
  div.textContent = id;
  return div;
});

document.querySelector("body").append(...idDivs);
