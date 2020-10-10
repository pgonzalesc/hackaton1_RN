//Ejercicio 2
//###############################################################################

let names = new Array('Pedro', 'Juan', 'Pepe', 'Luis');

function addName(array1, array2) {
    for(let key=0; key < array2.length; key++){
        array1.push(array2[key]);
    }
}

console.info('Ejercicio 2');
addName(names, ['Rosa', 'Sofia', 'Maria']);
console.log(names);