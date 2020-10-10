//Ejercicio 6
//###############################################################################
console.info('Ejercicio 6');

function Contact(name, phone){
    this.name = name;
    this.phone = phone;
}

let contact1 = new Contact('Pedro', '123456789');
let contact2 = new Contact('Maria', '987654321');
let contact3 = new Contact('Pepe', '987654322');

let listContact = [];
listContact.push(contact1);
listContact.push(contact2);
listContact.push(contact3);

function call(phone, listContact){
    for(let key in listContact) {
        if(phone === listContact[key].phone)
            return console.log(`${listContact[key].name} está llamando`);
        else
            return console.log('Número desconocido');
    }
}

call('123456789', listContact);

