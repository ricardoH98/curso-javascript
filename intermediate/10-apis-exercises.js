/*
Clase 60 - APIs
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=18710
*/

// 1. Realiza una petición GET con fetch() a JSONPlaceholder y muestra en la consola la lista de publicaciones

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => { return response.json() })
    .then(data => { console.log(data) })

// 2. Modifica el ejercicio anterior para que verifique si la respuesta es correcta usando response.ok. Si no lo es, lanza y muestra un error

fetch('https://jsonplaceholder.typicode.com/dasdasd')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Status HTTP: ${response.status}`);
        }
        return response.json()
    })
    .then(data => { console.log(data) })
    .catch(error => {
        console.log('Ha surgido el siguiente error: ', error)
    })

// 3. Reescribe el ejercicio 1 usando la sintaxis async/await en lugar de promesas

async function getPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')

        if (!response.ok) {
            throw new Error(`Status HTTP: ${response.status}`);
        }

        const data = await response.json()
        console.log(data)


    } catch (error) {
        console.log('Se ha producido un', error)
    }
}

getPosts()

// 4. Realiza una petición POST a JSONPlaceholder para crear una nueva publicación. Envía un objeto con propiedades como title o body

async function posting() {
    try {
        const newPost = {
            userId: 2,
            title: 'Título de la nueva publicación',
            body: 'Contenido de la nueva publicación'
        }

        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        })

        if (!response.ok) {
            throw new Error(`Status HTTP: ${response.status}`);
        }

        const data = await response.json()
        console.log(data)

    } catch (error) {
        console.log('Se ha producido un', error)
    }
}

posting()

// 5. Utiliza el método PUT para actualizar completamente un recurso (por ejemplo, modificar una publicación) en JSONPlaceholder

async function updatingPost() {
    try {
        const upPost = {
            id: 10,
            userId: 1,
            title: 'Actualizando post 1',
            body: 'Contenido actualizado'

        }

        const response = await fetch("https://jsonplaceholder.typicode.com/posts/10", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(upPost)
        })

        if (!response.ok) {
            throw new Error(`Status HTTP: ${response.status}`);
        }

        const data = await response.json()
        console.log(data)

    } catch (error) {
        console.log('Se ha producido un', error)
    }
}

updatingPost()

// 6. Realiza una petición PATCH para modificar únicamente uno o dos campos de un recurso existente

async function patchingPost() {
    try {

        const response = await fetch("https://jsonplaceholder.typicode.com/posts/10", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ userId: 2, title: 'título actualizado' })
        })

        if (!response.ok) {
            throw new Error(`Status HTTP: ${response.status}`);
        }

        const data = await response.json()
        console.log(data)

    } catch (error) {
        console.log('Se ha producido un', error)
    }
}

patchingPost()

// 7. Envía una solicitud DELETE a la API para borrar un recurso (por ejemplo, una publicación) y verifica la respuesta

async function deleting() {
    try {

        const response = await fetch("https://jsonplaceholder.typicode.com/posts/10", {
            method: "DETELE",
        })

    } catch (error) {
        console.log('Se ha producido un', error)
    }
}

deleting()

// Alternativa

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
});

// 8. Crea una función que realice una solicitud GET (la que quieras) a OpenWeatherMap

async function consultWeather(city) {
    const apiKey = "405e4441afb17483a652463f0831e8a9"
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`

    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("Error", error)
    }

}

consultWeather("Lima")

// 9. Utiliza la PokéAPI para obtener los datos de un Pokémon concreto, a continuación los detalles de la especie y, finalmente, la cadena evolutiva a partir de la especie

async function getPokemon(pokemon) {

    // https://pokeapi.co
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

    try {
        const response = await fetch(url)
        const data = await response.json()
        // console.log(data)

        const responseSpecies = await fetch(data.species.url)
        const dataSpecies = await responseSpecies.json()

        // console.log(dataSpecies)

        const responseEvolutionChain = await fetch(dataSpecies.evolution_chain.url)
        const dataEvolutionChain = await responseEvolutionChain.json()

        console.log(dataEvolutionChain)

    } catch (error) {
        console.log("Error", error)
    }
}

getPokemon("bulbasaur")

// 10. Utiliza una herramienta como Postman o Thunder Client para probar diferentes endpoint de una API

