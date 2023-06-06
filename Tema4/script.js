"use strict";
/*
Creati o functie care sa calculeze venitul total anual in lei al unei persoane prin extragerea numerelor din textele de mai jos. Functia trebuie sa intoarca (return) o propozitie de forma: “Venitul total anual al lui NUME este de VALOARE lei”.
1 EUR = 4.96 RON
1 USD = 4.64 RON
*/

const firstSentence = `Ion castiga 5000 lei/luna din salariu, 10000 lei/an bonus si 1500 lei/luna din freelancing.`;
const secondSentence = `Andrei are un salariu de 1000 euro/luna, un bonus de 9000 lei/an si mai castiga suplimentar aproximativ 500 usd/luna din freelancing.`;

// const venitAnual = function (sentence) {
//   const venit = sentence.split(" ");
//   let total = 0;
//   for (let valoare of venit) {
//     const num = function (val) {
//       return /[0-9]/.test(val);
//     };
//     // console.log(num(valoare));
//     if (num(valoare)) {
//       //   console.log(valoare);
//       total = total + Number(valoare);
//     }
//   }
//   console.log(total);
//   return `Venitul total anual al lui ${venit[0]} este de ${total} lei`;
// };

// console.log(venitAnual(firstSentence));
// console.log(venitAnual(secondSentence));
const venit = function (sentence) {
  const arr = sentence.split(" ");
  let venitAnual = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "lei/luna") {
      venitAnual += Number(arr[i - 1]) * 12;
    }
    if (arr[i] === "lei/an") {
      venitAnual += Number(arr[i - 1]);
    }
    if (arr[i] === "euro/luna") {
      venitAnual += Number(arr[i - 1]) * 4.96;
    }
    if (arr[i] === "usd/luna") {
      venitAnual += Number(arr[i - 1]) * 4.64;
    }
  }
  console.log(venitAnual);
};
venit(firstSentence);
venit(secondSentence);
