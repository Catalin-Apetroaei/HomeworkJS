"use strict";
//motocicleta 200 cmc -> 8 lei
//autobuz 200 cmc -> 26 lei
//camion 200 cmc -> 32 lei
// hibrid -> 50% reducere
const localitate = prompt("Localitate");
const cilindree = Number(prompt("Capacitatea cilindrica"));
const hibrid = prompt("Este hibrid? : da/nu");
const vehicul = prompt("Ce tip de vehicul este?");
console.log(localitate, cilindree);
const calcImpozit = function (loc, cil, imp) {
  console.log(
    `Impozitul calculat pentru ${loc}, la capacitatea cilindrica ${cil}cmc este de ${imp} lei.`
  );
};

if (hibrid === "nu") {
  if (cilindree >= 1000 && cilindree < 1601) {
    const impozit = Math.ceil(cilindree / 200) * 8;
    calcImpozit(localitate, cilindree, impozit);
  } else if (cilindree >= 1601 && cilindree < 2001) {
    const impozit = Math.ceil(cilindree / 200) * 22;
    calcImpozit(localitate, cilindree, impozit);
  } else if (cilindree >= 2001 && cilindree < 2601) {
    const impozit = Math.ceil(cilindree / 200) * 85;
    calcImpozit(localitate, cilindree, impozit);
  } else if (cilindree >= 2601 && cilindree < 3001) {
    const impozit = Math.ceil(cilindree / 200) * 171;
    calcImpozit(localitate, cilindree, impozit);
  } else if (cilindree >= 3001 && cilindree < 4001) {
    const impozit = Math.ceil(cilindree / 200) * 345;
    calcImpozit(localitate, cilindree, impozit);
  } else {
    console.log("Datele introduse nu sunt suficiente!");
  }
} else {
  if (cilindree >= 1000 && cilindree < 1601) {
    const impozit = Math.ceil(cilindree / 200) * 8;
    calcImpozit(localitate, cilindree, impozit / 2);
  } else if (cilindree >= 1601 && cilindree < 2001) {
    const impozit = Math.ceil(cilindree / 200) * 22;
    calcImpozit(localitate, cilindree, impozit / 2);
  } else if (cilindree >= 2001 && cilindree < 2601) {
    const impozit = Math.ceil(cilindree / 200) * 85;
    calcImpozit(localitate, cilindree, impozit / 2);
  } else if (cilindree >= 2601 && cilindree < 3001) {
    const impozit = Math.ceil(cilindree / 200) * 171;
    calcImpozit(localitate, cilindree, impozit / 2);
  } else if (cilindree >= 3001 && cilindree < 4001) {
    const impozit = Math.ceil(cilindree / 200) * 345;
    calcImpozit(localitate, cilindree, impozit / 2);
  } else {
    console.log("Datele introduse nu sunt suficiente!");
  }
}
