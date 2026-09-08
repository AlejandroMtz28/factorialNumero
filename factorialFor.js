function factorial(numero) {
    if (!Number.isInteger(numero) || numero < 0) {
        throw new Error("El número debe ser un entero mayor o igual que 0");
    }

    let resultado = 1;

    return resultado;
}

console.log(factorial(5));
console.log(factorial(7));
console.log(factorial(8));
console.log(factorial(22));

const limite = 10;

console.log("Serie de factoriales:");

for (let numero = 0; numero <= limite; numero++) {
    console.log(`${numero}! = ${factorial(numero)}`);
}