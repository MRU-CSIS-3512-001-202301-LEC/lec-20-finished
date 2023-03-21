const OUTER = document.querySelector("#outer-div");
const ADJ = document.querySelector("#adjacent-div");
const H1 = document.querySelector("h1");
const SPAN = document.querySelector("span");
const P = document.querySelector("p");
const INPUT = document.querySelector("input");

let printCounter = 1;

function logNodeName(event) {
  console.log(`${printCounter}:`, event.target.nodeName.toLowerCase());
  printCounter += 1;
}

function logNumClasses(event) {
  console.log(`${printCounter}:`, event.target.classList.length);
  printCounter += 1;
}

function capitalize() {
  INPUT.value = INPUT.value.toUpperCase();
}

function swapOutH1Text() {
  H1.textContent = INPUT.value;
}

ADJ.addEventListener("click", capitalize);

P.addEventListener("input", swapOutH1Text);

SPAN.addEventListener("click", logNodeName);

OUTER.addEventListener("click", logNumClasses);

INPUT.addEventListener("input", logNodeName);

OUTER.addEventListener("click", (event) => {
  if (event.target === OUTER) return;

  if (event.target.classList.contains("paddy")) {
    console.log("paddy");
  }
});
