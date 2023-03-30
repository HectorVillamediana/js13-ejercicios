//1
const firstForm = document.createElement("form")
const firstArticle = document.getElementById("ejercicio-1")
const firstDiv = firstArticle.lastElementChild
const firstInput = document.createElement("input")
firstDiv.appendChild(firstForm)
const firstLabel = document.createElement("label")
firstLabel.innerText = "Escriba su nombre: "
firstForm.appendChild(firstLabel)
firstForm.appendChild(firstInput)
const firstSubmit = document.createElement("input")
firstSubmit.type = "submit"
firstSubmit.innerText = "Enviar"
firstForm.appendChild(firstSubmit)

firstForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const firstParagraph = document.createElement("p")
    if (firstDiv.lastElementChild !== firstForm) {
        firstDiv.lastElementChild.remove()
    }
    firstParagraph.innerText = firstInput.value
    firstDiv.appendChild(firstParagraph)
})
//2
const secondArticle = document.getElementById("ejercicio-2")
const secondForm = secondArticle.lastElementChild
const secondText = secondForm.firstElementChild.nextElementSibling
secondForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const secondParagrah = document.createElement("p")
    if (secondArticle.lastElementChild.innerText == "Debe introducir texto en el formulario") {
        secondArticle.lastElementChild.remove()
    }
    if (secondText.value == "") {
        secondParagrah.innerText = "Debe introducir texto en el formulario"
        secondArticle.appendChild(secondParagrah)
        secondParagrah.style.color = "red"
    }
})
//3
const thirdArticle = document.getElementById("ejercicio-3")
const thirdForm = thirdArticle.lastElementChild.previousElementSibling
const inputNUmber = thirdForm.lastElementChild.previousElementSibling
const thirdDiv = thirdArticle.lastElementChild

thirdForm.addEventListener("submit", (e) => {
    e.preventDefault()
    if (thirdDiv.children.length > 0) {
        for (let i = 0; i < thirdDiv.children.length - 1; i++) {
            thirdDiv.children[i].remove()
            console.log(thirdDiv.children[i]);
        }
    }
    for (let j = 1; j < parseInt(inputNUmber.value) + 1; j++) {
        const button = document.createElement("button")
        button.innerText = j;
        if (j % 2 !== 0) {
            button.style.backgroundColor = "pink"
            button.style.color = "white"
            thirdDiv.appendChild(button)
        } else if (j % 10 == 0) {
            button.style.backgroundColor = "lightblue"
            thirdDiv.appendChild(button)
        } else {
            button.style.backgroundColor = "violet"
            thirdDiv.appendChild(button)
        }
    }
})
//4
const forthArticle = document.getElementById("ejercicio-4")
const forthDiv = forthArticle.lastElementChild
const saltoLinea = document.createElement("br")
const forthForm = document.createElement("form")
const forthLabelText = document.createElement("label")
forthLabelText.innerText = "Inserte su Username:  "
const forthText = document.createElement("input")
forthText.type = "text"
const forthLabelEmail = document.createElement("label")
forthLabelEmail.innerText = "Inserte su email:  "
const forthEmail = document.createElement("input")
forthEmail.type = "email"
const forthLabelPasw = document.createElement("label")
forthLabelPasw.innerText = "Inserte su contraseña:  "
const forthPassword = document.createElement("input")
forthPassword.type = "password"
const forthLabelAge = document.createElement("label")
forthLabelAge.innerText = "Inserte su edad:  "
const forthAge = document.createElement("input")
forthAge.type = "number"
const forthSubmit = document.createElement("input")
forthSubmit.type = "submit"
forthSubmit.innerText = "Enviar"

forthDiv.appendChild(forthForm)
forthForm.style.display = "flex"
forthForm.style.flexDirection = "column"
forthForm.appendChild(forthLabelText)
forthForm.appendChild(forthText)
forthForm.appendChild(forthLabelEmail)
forthForm.appendChild(forthEmail)
forthForm.appendChild(forthLabelPasw)
forthForm.appendChild(forthPassword)
forthForm.appendChild(forthLabelAge)
forthForm.appendChild(forthAge)
forthForm.appendChild(forthSubmit)

const ParagraphUser = document.createElement("p")
const ParagraphEmail = document.createElement("p")
const ParagraphPassword = document.createElement("p")
const ParagraphAge = document.createElement("p")
forthForm.addEventListener("submit", (e) => {
    e.preventDefault()
    ParagraphUser.innerText = forthText.value
    ParagraphEmail.innerText = forthEmail.value
    ParagraphPassword.innerText = forthPassword.value
    ParagraphAge.innerText = forthAge.value
    forthArticle.appendChild(ParagraphUser)
    forthArticle.appendChild(ParagraphEmail)
    forthArticle.appendChild(ParagraphPassword)
    forthArticle.appendChild(ParagraphAge)
})

//5
const fifthArticle = document.getElementById("ejercicio-5")
const fifthDiv = fifthArticle.lastElementChild.previousElementSibling
const fifthButton = fifthArticle.lastElementChild
window.addEventListener("keypress", (e) => {
    fifthDiv.innerText += e.key
},)
fifthButton.addEventListener("click", () => {
    fifthDiv.innerText = ""
})

