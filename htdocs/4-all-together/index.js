// http://127.0.0.1:8080/2-fetch/index.html

async function picIds() {
  let response = await fetch("../api/images.php");
  let ids = await response.json();

  buildList(ids);
}

function buildList(ids) {
  let liElems = ids.map((id) => {
    let li = document.createElement("li");
    li.textContent = id;
    return li;
  });
  let ul = document.createElement("ul");
  ul.append(...liElems);
  document.querySelector("body").append(ul);
}

document.querySelector("button").addEventListener("click", picIds);
