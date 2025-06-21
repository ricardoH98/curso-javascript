// 1. Crea una clase que reciba dos propiedades

class SmartPhone {
    constructor(brand, so) {
        this.brand = brand
        this.so = so
    }

    turnOn() {
        console.log(`Encendiendo el teléfono ${this.brand}, sistema operativo ${this.so}`)
    }

    static red(r = true) {
        if (r) {
            return console.log('El smartphone tiene 5g')
        } else {
            return console.log('El smartphone no tiene 5g')
        }
    }
}

let aSmartPhone = new SmartPhone('Samsung', 'Android')

console.log(aSmartPhone)

// 2. Añade un método a la clase que utilice las propiedades

// 3. Muestra los valores de las propiedades e invoca a la función

console.log(aSmartPhone.brand)
console.log(aSmartPhone.so)
aSmartPhone.turnOn()

// 4. Añade un método estático a la primera clase

// 5. Haz uso del método estático

SmartPhone.red(false)

// 6. Crea una clase que haga uso de herencia

class BibliographicMaterial {
    constructor(title, author) {
        this.title = title
        this.author = author
    }

    showInfo() {
        console.log(`${this.title} - ${this.author}`)
    }

}

class Book extends BibliographicMaterial {
    constructor(title, author, category) {
        super(title, author)
        this.category = category
    }

    showInfo() {
        super.showInfo()
        console.log(`Categoría: ${this.category}`)
    }
}

let aBook = new Book('Cien años de soledad', 'Gabriel García Marquez', 'Novela')

console.log(aBook)
aBook.showInfo()

// 7. Crea una clase que haga uso de getters y setters

class Employee {

    #email
    #address

    constructor(name, lastName, age, email, address) {
        this.name = name
        this.lastName = lastName
        this.age = age
        this.#email = email
        this.#address = address
    }

    get fullName() {
        return `${this.name} ${this.lastName}`
    }

    set completeName(secondName) {
        this.name = `${this.name} ` + secondName
    }

    get showEmail() {
        return this.#email
    }

    set changeAddrees(newAdress) {
        this.#address = newAdress
    }

    get showAddress() {
        return this.#address
    }
}

let aEmployee = new Employee('Brandon', 'Perez', 24, 'brandon@correo.com', 'callew2323')

console.log(aEmployee.fullName)

aEmployee.completeName = 'Marlon'

console.log(aEmployee.fullName)
console.log(aEmployee.name)

// 8. Modifica la clase con getters y setters para que use propiedades privadas



// 9. Utiliza los get y set y muestra sus valores

console.log(aEmployee) // EL email no se muestra porque es propiedad privada
console.log(aEmployee.showEmail) // pero como esta en un get, lo podemos mostrar

aEmployee.changeAddrees = 'Calle nueva macedonia'

console.log(aEmployee.showAddress)

// 10. Sobrescribe un método de una clase que utilice herencia 


class Magazine extends BibliographicMaterial {
    constructor(title, author, category) {
        super(title, author)
        this.category = category
    }

    showInfo() {
        console.log(`La revista ${this.title} pertenece a la categoría: ${this.category} `)
    }

}

let aMagazine = new Magazine('Magaly', 'Magaly', 'Espectaculos')

aMagazine.showInfo()