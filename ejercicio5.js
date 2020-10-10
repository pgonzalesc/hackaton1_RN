//Ejercicio 5
//###############################################################################
console.info('Ejercicio 5');
const getArea = (radio)=>{
    let result = Math.PI*Math.pow(radio, 2);
    return result;
};

const getLongitud = (radio)=>{
    let result = 2*Math.PI*radio;
    return result;
}

function Circulo(radio){
    this.radio = radio;
    this.area = getArea(this.radio).toFixed(2);
    this.longitud = getLongitud(this.radio).toFixed(2);
    this.showValores = console.log(`Area: ${this.area} - Longitud: ${this.longitud}`);
}

let circulo1 = new Circulo(5);
circulo1.showValores;
