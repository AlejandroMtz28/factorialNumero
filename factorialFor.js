function factorial(numero) {
    if (!Number.isInteger(numero) || numero < 0) {
        throw new Error("El número debe ser un entero mayor o igual que 0");
    }

    let resultado = 1;

    for (let contador = 2; contador <= numero; contador++) {
        resultado *= contador;
    }

    return resultado;
}

console.log(factorial(5));
console.log(factorial(7));
console.log(factorial(6));