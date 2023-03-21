const LAPS = [8, 12, 6.5, 111, 16, 9, 8];

const BTN = document.querySelector("button");

function ol(liItems) {
  const ol = document.createElement("ol");
  ol.append(...liItems);
  return ol;
}

function asLi(num) {
  const li = document.createElement("li");
  li.textContent = num;
  return li;
}

let lapList = LAPS.map((lap) => asLi(lap));

document.body.append(ol(lapList));

function sortList() {
  const OL = document.querySelector("ol");
  LAPS.sort((a, b) => a - b);
  let lapList = LAPS.map((lap) => asLi(lap));
  OL.replaceChildren(); // gotcha!
  OL.append(...lapList);
}

BTN.addEventListener("click", sortList);
