"use strict";

// Tema 1: JS Array

const initialValues = [1, 2, "salut", "Catalin", [3, 4, 5], true];
const otherValues = [10, 11, 12, "Ingrid", "Simona", "Maria", [13, 14], false];
// 2)
initialValues.push(otherValues);
// 3 , 4)
initialValues[0] = initialValues[0] + 2;
initialValues[1] = initialValues[1] + 2;
initialValues[4][0] = initialValues[4][0] + 2;
initialValues[4][1] = initialValues[4][1] + 2;
initialValues[4][2] = initialValues[4][2] + 2;
initialValues[6][0] = initialValues[6][0] + 2;
initialValues[6][1] = initialValues[6][1] + 2;
initialValues[6][2] = initialValues[6][2] + 2;
initialValues[6][6][0] = initialValues[6][6][0] + 2;
initialValues[6][6][1] = initialValues[6][6][1] + 2;
// 5)
initialValues[2] = initialValues[2] + "happy codding";
initialValues[3] = initialValues[3] + "happy codding";
initialValues[6][3] = initialValues[6][3] + "happy codding";
initialValues[6][4] = initialValues[6][4] + "happy codding";
initialValues[6][5] = initialValues[6][5] + "happy codding";
// 6)
initialValues[5] = !initialValues[5];
initialValues[6][7] = !initialValues[6][7];
console.log(initialValues);
