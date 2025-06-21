/*
Clase 79 - Regex
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=25888
*/

// 1. Crea una RegEx que valide correos electrónicos

const regEmail = /^(?!.*\.\.)[^.0-9_#-@][a-zA-Z0-9_.]+@(?:[a-z]+\.){1,2}[a-z]+$/

// const regEmail = RegExp("^(?!.*\\.\\.)[^.0-9_#-@][a-zA-Z0-9_.]+@(?:[a-z]+\\.){1,2}[a-z]+$")

const email = 'ricardo.heredia@urp.edu.pe'
const email2 = 'correo@@corre.com'
const email3 = '34correo@corre.com'
const email4 = 'ricardo_heredia@suplacorp.com.pe'
const email5 = 'ricardo..heredia@suplacorp.com.pe'
const email6 = 'ricardo.heredia@suplacorp..com'

console.log('resultado de email: ', regEmail.test(email))
console.log('resultado de email2: ', regEmail.test(email2))
console.log('resultado de email3: ', regEmail.test(email3))
console.log('resultado de email4: ', regEmail.test(email4))
console.log('resultado de email5: ', regEmail.test(email5))
console.log('resultado de email6: ', regEmail.test(email6))

/* Explicación de regex:
^ → hace que se coincida desde el inicio del string

(?!.*\.\.) → en toda la cadena busca que no exista dos puntos consecutivos juntos

[^.0-9_#-@][a-zA-Z0-9_.]+ → luego el primer caracter no puede ser ni "." ni un digito del 0 al 9 ni "_" ni "#" ni "-" ni "@"
Los dígitos que siguen pueden ser letras minusculas o mayusculas, digitos del 0 al 9, guín bajo o punto

@(?:[a-z]+\.){1,2}[a-z]+$ → despúes del @ puede haber un patrón de letras minusculas seguido de un "." y esto se puede repetir 1 o 2 veces máximo, luego de eso solo puede haber un patrón de letras minúsculas, el caracter $ indica que debe coincidir con el final de la cadena de texto a evaluar

*/

// 2. Crea una RegEx obtenga Hashtags de un Texto

const text = "Este es un texto con #hashtags, tiene varios de estos desde #123 hasta #código #Javascript y demás lenguajes como #python #español #2025"

const regHashTags = /(?:^|\s)#([a-zA-Z0-9_À-ÿ\u00c0-\u017F]+)/g

let match;
const hashtags = []

while ((match = regHashTags.exec(text)) !== null) {
    hashtags.push(match[1]); // match[1] contiene el texto del hashtag sin el #
}

console.log(hashtags)

/* 
Explicación:
(?:^|\s) → grupo no caputrador que indica que se empieza a buscar coincidencias desde el inicio del texto (^) o despúes de una espacio en blanco (\s)

#([a-zA-Z0-9_À-ÿ\u00c0-\u017F]+) → Luego del caracter # captura lo que se encuentre al costado, esto incluye un conjunto de letras minusculas y mayusculas, digitos del 0-9 y caraceres especiales.

/g → indica que se busque de manera global en todo el texto


*/

// 3. Crea una RegEx que valide contraseñas seguras (mínimo 8 caracteres, al menos una letra y un número)

// NOTA: Aplícalas utilizando diferentes operaciones

const pass = '12345678'
const pass2 = '12345678b'
const pass3 = '1aaaaaaaaaaabbbbbbb'
const pass4 = '123456'

const regPassword = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/

console.log('el resultado de pass es:' ,regPassword.test(pass))
console.log('el resultado de pass2 es:' ,regPassword.test(pass2))
console.log('el resultado de pass3 es:' ,regPassword.test(pass3))
console.log('el resultado de pass4 es:' ,regPassword.test(pass4))

/* Explicación:
(?=.*[a-zA-Z]) → lookhead positivo, "." es cualquier caracter excepto saltos de línea, "*" indica que los caracteres previos pueden aparecer 0 veces o ilimitadas veces, despúes debe haber al menos una letra ya sea minuscula o mayucula.

(?=.*\d) → lookhead que indica que debe haber al menos un digito de 0-9

.{8,} → el string debe ser como minimo de 8 caracteres.

*/