/*
Clases 80 a 81 - Testing
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=25938
*/

/* Video de referencia para configurar jest: https://www.youtube.com/watch?v=_DzBez4qMi0 */

// Para correr los test se usa el comando npm test

const sum = require('./21-testing.js')

test("Suma de 3 + 5 tiene que ser 8", () => {
    expect(sum(3, 5)).toBe(8)
})

test("Suma de 3 + 3 tiene que ser 6", () => {
    expect(sum(3, 3)).toBe(6)
})

const isEven = require('./23-testing-exercises')

test('El número 4 tiene que devolver true', () => {
    expect(isEven(4)).toBe(true)
})

test('El número 0 tiene que devolver true', () => {
    expect(isEven(0)).toBe(true)
})

test('El número 5 tiene que devolver false', () => {
    expect(isEven(5)).toBe(false)
})

test('El número 4.3 tiene que devolver false', () => {
    expect(isEven(4.3)).toBe(false)
})