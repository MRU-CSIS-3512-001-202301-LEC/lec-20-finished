// http://127.0.0.1:8080/3-async-await/index.html

async function picIds() {
  let response = await fetch("../api/images.php");
  let ids = await response.json();
  return ids;
}

let ids = picIds();
console.log("The ids are:", ids);
