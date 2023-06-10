"use strict";
const main = document.querySelector(".box");

const element = function () {
  for (let i = 1; i < 9; i++) {
    const elementNou = document.createElement("div");
    elementNou.classList.add("item");
    main.appendChild(elementNou);
    if (i % 2 == 0) {
      elementNou.classList.add("white");
    } else {
      elementNou.classList.add("black");
    }
  }
  for (let i = 1; i < 9; i++) {
    const elementNou = document.createElement("div");
    elementNou.classList.add("item");
    main.appendChild(elementNou);
    if (i % 2 !== 0) {
      elementNou.classList.add("white");
    } else {
      elementNou.classList.add("black");
    }
  }
};
for (let i = 1; i < 5; i++) {
  element();
}
