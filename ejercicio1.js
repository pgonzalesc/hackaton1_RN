//Ejercicio 1
//###############################################################################
function Company(name, address, phone, nif) {
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.nif = nif;
}
let company1 = new Company('Empresa 1', 'Av. Perú cdra 2', '1234567', '0000125');

function Client(name, address, phone, dni) {
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.dni = dni;
}
let client1 = new Client('Cliente 1', 'Av. Angamos cdra 20', '987654321', '12345678');

function Product(desc, price, unit) {
    this.desc  = desc;
    this.price = price;
    this.unit  = unit;
}

let product1 = new Product('Pilsen', 5.00, 2);
let product2 = new Product('Snack', 7.00, 1);
let product3 = new Product('Gaseosa', 11.00, 1);
let product4 = new Product('Hielo', 10.00, 1);

let list = [];
list.push(product1);
list.push(product2);
list.push(product3);
list.push(product4);

const GetSubtotal = (list)=>{
    let price = 0;
    for(let key in list) {
        price += (list[key].price*list[key].unit);
    }
    return price;
}

const GetTax = (subTotal)=>{
    const igv = 18;
    let tax = 0;
    tax = (subTotal*igv)/100
    return tax;
}

const GetTotal = (subTotal, tax)=>{
    let total = 0;
    total = subTotal + tax;
    return total;
}

const ShowTotal = (total)=>{
    return `Total: ${total}`;
}

function Factura(company, client, list){
    this.company   = company;
    this.client    = client;
    this.list      = list;
    this.subTotal  = GetSubtotal(this.list);
    this.tax       = GetTax(this.subTotal);
    this.total     = GetTotal(this.subTotal, this.tax);
    this.showTotal = ShowTotal(this.total);
}

let factura1 = new Factura(company1, client1, list);

console.info('Ejercicio 1');
console.log(factura1);
console.log(factura1.showTotal);