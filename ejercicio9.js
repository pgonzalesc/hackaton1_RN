//Ejercicio 9
//###############################################################################
console.info('Ejercicio 9');

let numbers = new Array(12,2,15,13,26,25);

let parNumbers = [];
let imparNumbers = [];
let totalPar = 0;
let totalImpar = 0;

for(const number of numbers){
    if(number%2 == 0)
        totalPar += number;
    else
        totalImpar += number;
}

console.log(totalImpar);
console.log(totalPar);