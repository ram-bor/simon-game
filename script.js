const colorLens = document.querySelectorAll(".quadrant");

// const topLeft = document.querySelector(".top-left-quadrant");
// const topRight = document.querySelector(".top-right-quadrant");
// const bottomLeft = document.querySelector(".bottom-left-quadrant");
// const bottomRight = document.querySelector(".bottom-right-quadrant");
console.log(colorLens);
const start = document.querySelector(".start");

// let sequencePattern = [];

// for (let i = 0; i < colorLens.length; i++) {
//   sequencePattern.push(colorLens[i]);
// }

// console.log(sequencePattern);

start.addEventListener("click", (e) => {
  console.log("Game Started");
  console.log(e);
});
