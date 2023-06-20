"use strict";
/*
calculati media aritmetica a unui array de numere;
avand un array cu numere, valori boolene si stringuri calculati suma tuturor numerelor. Ignorati toate valorile care nu sunt de tip numar;
BONUS: creati un program care afiseaza primele 20 numere din sirul lui Fibonacci;
*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 8, 8, 17, 15];
const mediaArit = arr.reduce((num, cur) => num + cur, 0) / arr.length;
console.log(mediaArit);

const arr2 = [1, 2, 3, 4, true, "Catalin", 6, "Ingrid", 6, 6, 9];
const sumArray = function (arr) {
  let sumArr = 0;
  for (const num of arr) {
    if (typeof num === "number") {
      sumArr += num;
    }
  }
  console.log(sumArr);
};
sumArray(arr);
sumArray(arr2);

const fibonacci20 = function () {
  let num = 1;
  let arr = [0];
  for (let i = 0; i < 19; i++) {
    arr.push(num);
    num = arr[i] + arr[i + 1];
  }
  console.log(arr);
};
fibonacci20();
