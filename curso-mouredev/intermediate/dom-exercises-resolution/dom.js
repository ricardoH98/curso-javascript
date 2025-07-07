// 1. Crea un elemento (por ejemplo, un <h1 id="title">) y cambia su contenido a "¡Hola Mundo!"" al cargar la página
const title = document.getElementById("title")
title.textContent = "¡Hola Mundo!"

// 2. Inserta una imagen con id="myImage" y cambia su atributo src a otra URL
const image = document.getElementById("myImage")
image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOg8yUUCBbYFNcjYae_ABOwJ8BFH5HmQmdNg&s"

// 3. Crea un <div id="box"> sin clases y agrega la clase resaltado cuando se cargue la página
const box = document.getElementById("box")
box.setAttribute("class", "resaltado")

// 4. Crea un párrafo con id="paragraph" y cambia su color de texto a azul

const paragraph = document.getElementById('paragraph')
paragraph.style.color = "blue"

// 5. Agrega un botón que, al hacer clic, cree un nuevo elemento <li> con el texto "Nuevo elemento y lo agregue a una lista <ul id="list">

const button = document.getElementById("button")
const list = document.getElementById("list")

function addLi() {

    const newElement = document.createElement("li")
    newElement.textContent = "Nuevo Elemento"

    list.appendChild(newElement)
}

button.addEventListener("click", addLi)

// 6. Crea un párrafo con id="deleteParagraph" y un botón. Al hacer clic en el botón, elimina el párrafo del DOM

const buttonDelParagraph = document.getElementById("delParagraph")
const paragraphToDelete = document.getElementById("deleteParagraph")

buttonDelParagraph.addEventListener("click", () => {
    paragraphToDelete.remove()
})

// 7. Crea un <div id="content"> con algún texto y reemplaza su contenido por un <h2> con el mensaje "Nuevo Contenido"

const content = document.getElementById("content")
content.innerHTML = "<h2>Nuevo Contenido</h2>"

// 8. Crea un botón con id="greetBtn" y añade un evento que muestre una alerta con el mensaje "¡Hola!" al hacer clic

const greetButton = document.querySelector("#greetBtn")

greetButton.addEventListener("click", () => {
    alert("¡Hola!")
})

// 9. Crea un <input id="textInput"> y un <div id="result">. Al escribir en el input, el <div> se debe actualizarse mostrando lo que se escribe

const textInput = document.getElementById("textInput")
const divResult = document.getElementById("result")


function writeText() {
    divResult.textContent = textInput.value
}

textInput.addEventListener("input", writeText)

// 10. Crea un botón con id="backgroundBtn" y, al hacer clic, cambia el color de fondo del <body> a un color diferente

const backgroundButton = document.getElementById("backgroundBtn")
const bodyDocument = document.querySelector("body")

const generateHexColor = () => {
    const colorDecimal = Math.floor(Math.random() * 16777216)
    const colorHex = colorDecimal.toString(16).padStart(6, '0')

    return `#${colorHex}`
}

function changeColor() {

    bodyDocument.style.backgroundColor = generateHexColor()
}

backgroundButton.addEventListener("click", changeColor)

