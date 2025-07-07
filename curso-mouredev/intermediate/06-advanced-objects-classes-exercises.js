// 1. Agregega una función al prototipo de un objeto

const user = {
    name: 'pepe',
    age: 19,
    email: 'pepe@correo.com',
    active: true,
}

user.isAdult = function () {
    if (this.age >= 18) {
        return 'Es mayor de edad'
    }
}

console.log(user.isAdult())

// 2. Crea un objeto que herede de otro

const superUser = Object.create(user)

console.log(superUser)

// 3. Define un método de instancia en un objeto

const calculadora = {
    valor: 0,
    sumar(num) {
        this.valor += num;
        return this; // Permite encadenar métodos
    },
    mostrar() {
        console.log(`Resultado: ${this.valor}`);
    }
};

calculadora.sumar(5).sumar(3).mostrar()

// 4. Haz uso de get y set en un objeto

const thermostate = {
    _temperature: 20,

    get temperature() {
        console.log('Leyendo temperatura actual...')
        return `${this._temperature}°C`
    },

    set temperature(value) {
        if (value < 10 || value > 40) {
            console.log('Temperatura inválida para un termostato')
            return
        }
        this._temperature = value
    }
}

console.log(thermostate.temperature) // uso del getter
thermostate.temperature = 35 // uso del setter
console.log(thermostate.temperature)

thermostate.temperature = 5

// 5. Utiliza la operación assign en un objeto

const userDetails = {
    staff: 'yes',
    createdDate: '14/03/2023'
}

let fullUser = Object.assign(user, userDetails)

console.log(fullUser)

// 6. Crea una clase abstracta

class Notificador {
    constructor() {
        if (new.target === Notificador) {
            throw new Error("Clase abstracta");
        }
    }

    //   Validación en la clase abstracta
    enviar(mensaje) {
        if (!mensaje || typeof mensaje !== "string") {
            throw new Error("Mensaje inválido");
        }
        this._enviar(mensaje); // Método privado (a implementar)
    }

    // Método abstracto real (convención)
    _enviar() {
        throw new Error("Implementa este método");
    }
}

class NotificadorPush extends Notificador {
    _enviar(mensaje) {
        console.log(`Notificación push: ${mensaje}`);
    }
}

const notificadorPush = new NotificadorPush()

// Debemos ejevutar el método enviar de la clase abstracta, este metodo realiza una comprobación
notificadorPush.enviar('Nuevo mensaje')
// notificadorPush.enviar() // Genera error por ser vacío

// 7. Utiliza polimorfismo en dos clases diferentes

class NotificadorEmail extends Notificador {
    _enviar(mensaje) {
        console.log(`Enviando email: ${mensaje}`);
        // Lógica real para enviar email (ej: API de SendGrid)
    }
}

class NotificadorSMS extends Notificador {
    _enviar(mensaje) {
        console.log(`Enviando SMS: ${mensaje}`);
        // Lógica real para SMS (ej: API de Twilio)
    }
}

const notificadores = [
    new NotificadorEmail(),
    new NotificadorSMS()
];

notificadores.forEach(notificador => { notificador.enviar('Mensaje de prueba') })

// 8. Implementa un Mixin

const LoggerMixin = {
    log(mensaje) {
        console.log(`[LOG] ${new Date().toISOString()}: ${mensaje}`);
    }
};

const SerializableMixin = {
    // no usar el nomnbre toJson, genera error porque es un método que busca JSON.stringify
    convertToJSON() {
        return JSON.stringify(this);

    }
};


class Usuario {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

// Añadir capacidades al prototipo de Usuario
Object.assign(Usuario.prototype, LoggerMixin, SerializableMixin);

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

Object.assign(Producto.prototype, SerializableMixin);

const usuario = new Usuario("Ana", "ana@ejemplo.com");
const producto = new Producto("Laptop", 3999);

console.log(Object.getPrototypeOf(usuario)) // { log: [Function: log], toJSON: [Function: toJSON] }

usuario.log('Usuario creado') // [LOG] 2025-06-13T04:25:41.547Z: Usuario creado
console.log(usuario.convertToJSON())

console.log(producto.convertToJSON())
// 9. Crea un Singleton

class DatabaseConnection {
    constructor() {
        if (DatabaseConnection.instance) {
            return DatabaseConnection.instance; // Retorna la instancia existente
        }

        // Simula una conexión a DB
        this.connection = `Conexión establecida-${Math.random().toString(36).substring(7)}`;
        DatabaseConnection.instance = this; // Guarda la instancia
    }

    query(sql) {
        console.log(`Ejecutando: "${sql}" en ${this.connection}`);
    }
}

// Uso:
const db1 = new DatabaseConnection();
const db2 = new DatabaseConnection();

console.log(db1 === db2); // true (¡Son la misma instancia!)

db1.query("SELECT * FROM users");
// Ejecutando: "SELECT * FROM users" en Conexión establecida-abc123

db2.query("INSERT INTO logs VALUES ('test')");
// Ejecutando: "INSERT INTO logs VALUES ('test')" en Conexión establecida-abc123
// (Misma conexión subyacente)



// console.log(Math.random().toString(36).substring(7))
// Math.random() => Genera un número aleatorio entre 0 (incluido) y 1 (excluido).
// .toString(36) => Convierte el número a una cadena en base 36 (usando dígitos 0-9 y letras a-z).
// .substring(7) => Elimina los primeros 7 caracteres de la cadena


// 10. Desarrolla un Proxy

const student = {
    nombre: '',
    edad: 0,
    email: ''
};

//  Handler
const validadorHandler = {
    set(target, property, value) {
        // Validaciones específicas por propiedad
        if (property === 'nombre' && typeof value !== 'string') {
            throw new Error('El nombre debe ser un texto.');
        }
        if (property === 'edad' && (typeof value !== 'number' || value < 0)) {
            throw new Error('La edad debe ser un número positivo.');
        }
        if (property === 'email' && !value.includes('@')) {
            throw new Error('Email inválido.');
        }

        // Si pasa las validaciones, asigna el valor
        target[property] = value;
        console.log(`Campo "${property}" actualizado a: ${value}`);
        return true; // Indica éxito
    }
};

// Crear el Proxy
const studentProxy = new Proxy(student, validadorHandler);

studentProxy.nombre = "Pedro"
studentProxy.edad = 24
studentProxy.email = 'pedro@correo.com'

console.log(student)

// Intentos inválidos
// studentProxy.edad = -40
// studentProxy.email = 'ddddd'



