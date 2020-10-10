//Ejercicio 6
//###############################################################################
console.info('Ejercicio 6');


let contact1 = new Array('Pedro', '123456789');
let contact2 = new Array('Maria', '987654321');
let contact3 = new Array('Pepe', '987654322');

let listContact = [];
listContact.push(contact1);
listContact.push(contact2);
listContact.push(contact3);

function call(phone, listContact){
    for(let key=0; key < listContact.length; key++){
        if(phone == listContact[key][1])
            return console.log(`${listContact[key][0]} está llamando`);
        else
            return console.log('Número desconocido');
    }
}

call('123456780', listContact);