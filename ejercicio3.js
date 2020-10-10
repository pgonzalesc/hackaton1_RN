//Ejercicio 3
//###############################################################################
const GetValorFuturo = (valor, tasa, periodo)=>{
    let result = valor*Math.pow(1+tasa/100, periodo);
    return result;
};

let valor = 1000;
let tasa = 5;
let periodo = 3;
let valorFuturo = GetValorFuturo(valor, tasa, periodo);
console.log(`Valor Futuro de una inversión de S/.${valor} a una tasa de ${tasa}% en un periodo de ${periodo} años es: S/.${valorFuturo}`);
