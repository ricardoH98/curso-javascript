// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let myName = "Ricardo"

if (myName == "Ricardo") {
    console.log(`El nombre del usuario es ${myName}`);
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let userName = 'erre4'
let password = '123456'

if (userName == 'erre4' && password == '123456') {
    console.log(`Bienvenido, ${userName}`);
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let aNumber = 0

if (aNumber > 0) {
    console.log('El número es positivo');
} else if (aNumber < 0) {
    console.log('El número es negativo');

} else if (aNumber === 0) {
    console.log('El número es 0');

}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let randomAge = 15

if (randomAge >= 18) {
    console.log('La persona puede votar');
} else {
    console.log('La persona no puede votar, no tiene mayoría de edad');
    console.log(`Le faltan ${18 - randomAge} años`);

}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad
let aPersonAge = 17
let estatus = aPersonAge >= 18 ? 'adulto' : 'menor'

console.log(estatus)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let aMonth = 'febrero'
let aSeason

if (aMonth == 'enero' || aMonth == 'febrero' || aMonth == 'marzo') {
    aSeason = 'Verano'
    console.log(`Estamos en la estación de ${aSeason}`)
} else if (aMonth == 'abril' || aMonth == 'mayo' || aMonth == 'junio') {
    aSeason = 'Otoño'
    console.log(`Estamos en la estación de ${aSeason}`)
} else if (aMonth == 'julio' || aMonth == 'agosto' || aMonth == 'septiembre') {
    aSeason = 'Invierno'
    console.log(`Estamos en la estación de ${aSeason}`)
} else if (aMonth == 'octubre' || aMonth == 'noviembre' || aMonth == 'diciembre') {
    aSeason = 'Primavera'
    console.log(`Estamos en la estación de ${aSeason}`)
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

if (aMonth == 'abril' || aMonth == 'junio' || aMonth == 'septiembre' || aMonth == 'noviembre') {
    console.log('El mes tiene 30 días')

} else if (aMonth == 'enero' || aMonth == 'marzo' || aMonth == 'mayo' || aMonth == 'julio' || aMonth == 'agosto' || aMonth == 'octubre' || aMonth == 'diciembre') {
    console.log('El mes tiene 31 días')

} else if (aMonth == 'febrero') {
    // la variable currentYear tiene un ámbito de bloque block scope, del else if (aMonth == 'febrero')
    const currentYear = new Date().getFullYear();
    // const currentYear = 2000
    console.log(currentYear)

    if (currentYear % 4 == 0) {

        if (currentYear % 100 == 0) {

            if (currentYear % 400 == 0) {
                console.log('Año bisiesto')
                console.log('El mes tiene 29 días')
            } else {
                console.log('Año no bisiesto')
                console.log('El mes tiene 28 días')

            }
        } else {
            console.log('Año bisiesto')
            console.log('El mes tiene 29 días')
        }
    } else {
        console.log('Año no bisiesto')
        console.log('El mes tiene 28 días')
    }
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let aLanguage = 'german'

switch (aLanguage) {
    case 'spanish':
        console.log('Hola a todos')
        break;

    case 'english':
        console.log('Hello everyone')
        break;

    case 'french':
        console.log('Bonjour à tous')
        break;

    case 'german':
        console.log('Hallo, alle!')
        break;

    case 'portuguese':
        console.log('Olá, a todos')
        break;

}


// 9. Usa un switch para hacer de nuevo el ejercicio 6

aMonth = 'octubre'

switch (aMonth) {
    case 'enero':
    case 'febrero':
    case 'marzo':
        aSeason = 'Verano';
        console.log(`Estamos en la estación de ${aSeason}`);
        break;

    case 'abril':
    case 'mayo':
    case 'junio':
        aSeason = 'Otoño';
        console.log(`Estamos en la estación de ${aSeason}`);
        break;

    case 'julio':
    case 'agosto':
    case 'septiembre':
        aSeason = 'Invierno';
        console.log(`Estamos en la estación de ${aSeason}`);
        break;

    case 'octubre':
    case 'noviembre':
    case 'diciembre':
        aSeason = 'Primavera';
        console.log(`Estamos en la estación de ${aSeason}`);
        break;

    default:
        console.log('Mes no válido');

}

// 10. Usa un switch para hacer de nuevo el ejercicio 7

aMonth = 'febrero'

switch (aMonth) {
    case 'abril':
    case 'junio':
    case 'septiembre':
    case 'noviembre':
        console.log('El mes tiene 30 días')
        break;

    case 'enero':
    case 'marzo':
    case 'mayo':
    case 'julio':
    case 'agosto':
    case 'octubre':
    case 'diciembre':
        console.log('El mes tiene 31 días')
        break;

    case 'febrero':
        // la variable currentYear tiene un ámbito de bloque block scope, dentro del case 'febrero' solo existe aquí
        const currentYear = new Date().getFullYear();
        console.log(currentYear)

        if (currentYear % 4 == 0) {

            if (currentYear % 100 == 0) {

                if (currentYear % 400 == 0) {
                    console.log('Año bisiesto')
                    console.log('El mes tiene 29 días')
                } else {
                    console.log('Año no bisiesto')
                    console.log('El mes tiene 28 días')

                }
            } else {
                console.log('Año bisiesto')
                console.log('El mes tiene 29 días')
            }
        } else {
            console.log('Año no bisiesto')
            console.log('El mes tiene 28 días')
        }

        break;

    default:
        console.log('Mes no válido');
}