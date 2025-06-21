// 1. Crea un array que almacene cinco animales

let arrAnimal = ['perro', 'gato', 'conejo', 'oveja', 'vaca']

console.log(arrAnimal)

// 2. Añade dos más. Uno al principio y otro al final

arrAnimal.unshift('cordero')
console.log(arrAnimal)

arrAnimal.push('caballo')
console.log(arrAnimal)


// 3. Elimina el que se encuentra en tercera posición

arrAnimal.splice(2, 1)
console.log(arrAnimal)

// 4. Crea un set que almacene cinco libros

let books = new Set(['Cien años de soledad', 'La Catedral', 'La Ciudad y los perros', 'Crónica de una muerte anunciada', 'Solo para fumadores'])

console.log(books)

// 5. Añade dos más. Uno de ellos repetido

books.add('La palabra del mudo')
books.add('Cien años de soledad')

console.log(books)

// 6. Elimina uno concreto a tu elección

books.delete('La Ciudad y los perros')

console.log(books)

// 7. Crea un mapa que asocie el número del mes a su nombre

let months = new Map(
    [
        [1, 'Enero'],
        [2, 'Febrero'],
        [3, 'Marzo'],
        [4, 'Abril'],
        [5, 'Mayo'],
        [6, 'Junio'],
        [7, 'Julio'],
        [8, 'Agosto'],
        [9, 'Setiembre'],
        [10, 'Octubre'],
        [11, 'Noviembre'],
        [12, 'Diciembre'],
    ]
)

console.log(months)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log(months.has(5))
console.log(months.get(5))


// 9. Añade al mapa una clave con un array que almacene los meses de verano

months.set('summer', ['Enero', 'Febrero', 'Marzo'])

console.log(months)


// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let newArr = ['aaa', 'bbb', 111, 222]

console.log(newArr, typeof newArr)

let newSet = new Set(newArr)

console.log(newSet, typeof newSet)

let newMap = new Map(
    [
        ['set from array', newSet]
    ]
)

console.log(newMap, typeof newMap)
