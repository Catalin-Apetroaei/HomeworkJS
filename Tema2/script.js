"use strict";
//motocicleta 200 cmc -> 8 lei
//autobuz 200 cmc -> 26 lei
//camion 200 cmc -> 32 lei
// autoturism hibrid -> 50% reducere

const localitate = prompt("Localitate");
const cilindree = Number(prompt("Capacitatea cilindrica"));
const hibrid = prompt("Este hibrid? : da/nu");
const vehicul = prompt(
  "Ce tip de vehicul este?\n 1: Autoturism\n 2: Motocicleta \n 3: Autobuz\n 4: Camion \n"
);
console.log(localitate, cilindree);
const calcImpozit = function (loc, cil, imp, veh) {
  // console.log(
  //   `Impozitul calculat pentru ${loc}, la capacitatea cilindrica ${cil}cmc este de ${imp} lei.`
  // );
  alert(
    `Impozitul calculat pentru vehiculul de tip ${veh} din ${loc}, la capacitatea cilindrica ${cil}cmc este de ${imp} lei.`
  );
};
if (vehicul === "1" || vehicul === "Autoturism") {
  if (hibrid === "nu") {
    if (cilindree >= 1000 && cilindree < 1601) {
      const impozit = Math.ceil(cilindree / 200) * 8;
      calcImpozit(localitate, cilindree, impozit, vehicul);
    } else if (cilindree >= 1601 && cilindree < 2001) {
      const impozit = Math.ceil(cilindree / 200) * 22;
      calcImpozit(localitate, cilindree, impozit, vehicul);
    } else if (cilindree >= 2001 && cilindree < 2601) {
      const impozit = Math.ceil(cilindree / 200) * 85;
      calcImpozit(localitate, cilindree, impozit, vehicul);
    } else if (cilindree >= 2601 && cilindree < 3001) {
      const impozit = Math.ceil(cilindree / 200) * 171;
      calcImpozit(localitate, cilindree, impozit, vehicul);
    } else if (cilindree >= 3001 && cilindree < 4001) {
      const impozit = Math.ceil(cilindree / 200) * 345;
      calcImpozit(localitate, cilindree, impozit, vehicul);
    }
  } else if (hibrid === "da") {
    if (cilindree >= 1000 && cilindree < 1601) {
      const impozit = Math.ceil(cilindree / 200) * 8;
      calcImpozit(localitate, cilindree, impozit / 2, vehicul);
    } else if (cilindree >= 1601 && cilindree < 2001) {
      const impozit = Math.ceil(cilindree / 200) * 22;
      calcImpozit(localitate, cilindree, impozit / 2, vehicul);
    } else if (cilindree >= 2001 && cilindree < 2601) {
      const impozit = Math.ceil(cilindree / 200) * 85;
      calcImpozit(localitate, cilindree, impozit / 2, vehicul);
    } else if (cilindree >= 2601 && cilindree < 3001) {
      const impozit = Math.ceil(cilindree / 200) * 171;
      calcImpozit(localitate, cilindree, impozit / 2, vehicul);
    } else if (cilindree >= 3001 && cilindree < 4001) {
      const impozit = Math.ceil(cilindree / 200) * 345;
      calcImpozit(localitate, cilindree, impozit / 2, vehicul);
    }
  } else {
    // console.log("Datele introduse nu sunt corecte!");
    alert("Datele introduse nu sunt corecte!");
  }
} else if (vehicul === "2" || vehicul === "Motocicleta") {
  const impozit = Math.ceil(cilindree / 200) * 8;
  calcImpozit(localitate, cilindree, impozit, vehicul);
} else if (vehicul === "3" || vehicul === "Autobuz") {
  const impozit = Math.ceil(cilindree / 200) * 26;
  calcImpozit(localitate, cilindree, impozit, vehicul);
} else if (vehicul === "4" || vehicul === "Camion") {
  const impozit = Math.ceil(cilindree / 200) * 32;
  calcImpozit(localitate, cilindree, impozit, vehicul);
} else {
  // console.log("Datele introduse nu sunt suficiente!");
  alert("Datele introduse nu sunt corecte!");
}
