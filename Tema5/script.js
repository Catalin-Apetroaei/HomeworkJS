"use strict";
/*
verificati daca toate elementele unui array sunt numere pare folosind metoda every
folosind forEach, afisati toate elementele unui array
folosind reduce, adunati toate numerele dintr-un array
*/
// 1)
const arr = [2, 4, 6];
console.log(arr);
const arr1 = Array.from({ length: 20 }, (_, i) => i + 1);
console.log(arr1);
const numarPar = function (num) {
  return num % 2 == 0;
};
console.log(arr.every(numarPar));
console.log(arr1.every(numarPar));
// 2)
const arr2 = [2, 3, "Catalin", true, "Simona", false, 8, 88];
arr2.forEach((elem) => console.log(elem));
// 3)
const sumArr = arr.reduce((elem, i) => elem + i, 0);
const sumArr1 = arr1.reduce((elem, i) => elem + i, 0);
console.log(sumArr, sumArr1);
