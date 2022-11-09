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
let resultadoCifrado
let resultadoDescifrado
botonCifrar.addEventListener("click", () => {
   // botonCifrar.style.display = "none"
    //botonDescifrar.style.display = "inline-block"
    resultadoCifrado = cipher.funcionCifrar(msjDescifrado, offset) // llamar al metodo cifrar del objeto cipher
    if(!msjCifrado || msjCifrado===""){
        inputCifrado.value=resultadoCifrado
    }
})
botonDescifrar.addEventListener("click", () => {
   // botonCifrar.style.display = "inline-block"
   // botonDescifrar.style.display = "none"
    resultadoDescifrado = cipher.funcionDescifrar(msjCifrado, offset) // llamar al metodo descifrar del objeto cipher
    if(!msjDescifrado|| msjDescifrado===""){
        inputDescifrado.value=resultadoDescifrado
    }

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