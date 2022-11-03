import cipher from './cipher.js';


// guardo los elementos en variables
const inputNumerico = document.getElementById("input-numero");
const inputCifrado = document.getElementById("input-cifrado");
const inputDescifrado = document. getElementById("input-descifrado");
const botonCifrar = document. getElementById("boton-cifrar");
const botonDescifrar = document. getElementById("boton-descifrar");
// le doy funcionalidad 
let offset
let msjCifrado
let msjDescifrado
botonCifrar.addEventListener("click", () => {
    botonCifrar.style.display = "none"
    botonDescifrar.style.display = "block"
    cipher.funcionCifrar(msjDescifrado, offset) // llamar al metodo cifrar del objeto cipher
})
botonDescifrar.addEventListener("click", () => {
    botonCifrar.style.display = "block"
    botonDescifrar.style.display = "none"
})
inputNumerico.addEventListener("change", ( e) =>{ 
    console.log("valor:", e.target.value)
    offset= e.target.value  
})
inputCifrado.addEventListener("keyup", ( e) =>{ 
    console.log("valor:", e.target.value)
    msjCifrado= e.target.value  
})
inputDescifrado.addEventListener("keyup", ( e) =>{ 
    console.log("valor:", e.target.value)
    msjDescifrado= e.target.value  
})