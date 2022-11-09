import cipher from './cipher.js';


// guardo los elementos en variables
const inputNumerico = document.getElementById("input-numero");
const inputCifrado = document.getElementById("input-cifrado");
const inputDescifrado = document.getElementById("input-descifrado");
const botonCifrar = document.getElementById("boton-cifrar");
const botonDescifrar = document.getElementById("boton-descifrar");


// le doy funcionalidad 
let offset
let msjCifrado
let msjDescifrado
let resultadoCifrado
let resultadoDescifrado

botonCifrar.addEventListener("click", () => {
    resultadoCifrado = cipher.encode(offset, msjDescifrado) // llamar al metodo cifrar del objeto cipher
    if (!msjCifrado || msjCifrado === "") {
        inputCifrado.value = resultadoCifrado
    }
})
botonDescifrar.addEventListener("click", () => {
    resultadoDescifrado = cipher.decode(offset, msjCifrado) // llamar al metodo descifrar del objeto cipher
    if (!msjDescifrado || msjDescifrado === "") {
        inputDescifrado.value = resultadoDescifrado
    }

})


inputNumerico.addEventListener("change", (event) => {

    offset = event.target.value
})
inputCifrado.addEventListener("keyup", (event) => {

    msjCifrado = event.target.value
})
inputDescifrado.addEventListener("keyup", (event) => {

    msjDescifrado = event.target.value
})