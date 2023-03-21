import { picData } from "../data/pic-data.js";
import { picsumImg } from "./helpers/picsum-helpers.js";

const picImgs = picData.map(function (pic) {
  return picsumImg(pic);
});
// document.querySelector("div").append(...picImgs);

for (const picImg of picImgs) {
  document.querySelector("div").append(picImg);
}

// function round(event) {
//   event.target.classList.toggle("rounded");
// }

document
  .querySelector("body")
  .addEventListener("click", (event) =>
    event.target.classList.toggle("rounded"),
  );
