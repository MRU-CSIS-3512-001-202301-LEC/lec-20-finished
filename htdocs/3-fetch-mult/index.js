// http://127.0.0.1:8080/1-fetch/index.html

let ids;
let places;

async function picIds() {
  console.log("picIds starts");
  let response = await fetch("/api/images.php");
  let ids = await response.json();
  return ids;
}

async function picPlaces() {
  console.log("places starts");
  let response = await fetch("/api/places.php");
  let places = await response.json();
  return places;
}

async function getAllTheStuff() {
  console.log("getting the stuffs");
  [ids, places] = await Promise.all([picIds(), picPlaces()]);
  console.log(ids);
  console.log(places);
}

await getAllTheStuff();

console.log("Line 15:", ids);
console.log("Line 15:", places);
