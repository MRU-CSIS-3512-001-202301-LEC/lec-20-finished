// http://127.0.0.1:8080/2-fetch-json/index.html

let response = await fetch("../api/images.php");
console.log("line 4:", response);

let ids = await response.json();
console.log("line 7:", ids);
