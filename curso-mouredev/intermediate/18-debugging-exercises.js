/*
Clases 74 - Depuración
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=24329
*/

// 1. Crea un código con un error lógico y usa VS Code para encontrarlo

// Función que calcula el factorial de un número (con error lógico)
function calcularFactorial(numero) {
    if (numero < 0) {
        return "No se puede calcular factorial de números negativos";
    }

    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
        // Error lógico: debería ser i <= numero, pero aquí puse i < numero por error
    }

    return resultado;
}

// Función que verifica si un número es primo 
const isPrime = (num) => {
    if (num <= 1) {
        return false
    }

    if (num > 2 && num % 2 == 0) {
        return false
    } else if (num === 2) {
        return true
    }

    let sqr = Math.floor(Math.sqrt(num))

    for (let i = 2; i <= sqr; i++) {
        if (num % i != 0) {
            continue
        } else if (num % i == 0) {
            return false
            break
        }

    }

    return true

}

// Función principal que usa las otras funciones
function main() {
    console.log("Iniciando pruebas...");

    // Prueba de factorial (debería dar 120 para 5)
    const numFactorial = 5;
    const factorial = calcularFactorial(numFactorial); // Error tipográfico en variable
    console.log(`Factorial de ${numFactorial} es: ${factorial}`);

    // Prueba de número primo
    const numPrimo = 7;
    const primo = isPrime(numPrimo);
    console.log(`¿El número ${numPrimo} es primo? ${primo}`);

    // Más pruebas
    console.log(`Factorial de 3: ${calcularFactorial(3)}`);
    console.log(`¿El número 15 es primo? ${isPrime(15)}`);
    console.log(`¿El número 1 es primo? ${isPrime(1)}`); // Falta cerrar el paréntesis
}

main();

// 2. Experimenta con breakpoints y observa cómo cambia el flujo de ejecución