// http://127.0.0.1:8080/3-async-await-trace/index.html

async function picIds() {
  console.log("line 4:", "picIds starts");

  let response = await fetch("../api/images.php");
  console.log("line 7:", response.constructor.name);

  let ids = await response.json();
  console.log("line 10:", ids.constructor.name);

  return ids;
}

let ids = picIds();
console.log("line 16:", ids.constructor.name);

console.log("Line 18:", ids);
