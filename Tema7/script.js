"use strict";
const listLi = document.body.getElementsByTagName("li");
const ul = document.body.querySelector(".inputField");
const items = document.getElementById("addItem");
const addItem = document.getElementById("add");

const newItems = function () {
  const li = document.createElement("li");
  const button = document.createElement("button");
  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  button.setAttribute("id", "erase");
  let message = items.value.split("");
  if (message.length > 2) {
    ul.appendChild(li);
    li.textContent = message.join("");
    li.appendChild(button);
    li.appendChild(input);
  } else alert("Textul introdus trebuie sa aiba cel putin 3 caractere!");
  items.value = "";
  const eraseButton = document.getElementById("erase");
  const eraseItem = eraseButton.addEventListener("click", function (e) {
    console.log(e);
  });
};
const addItems = addItem.addEventListener("click", newItems);
