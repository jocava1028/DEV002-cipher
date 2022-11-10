import cipher from './cipher.js';


// guardo los elementos en variables
const inputNumerico = document.getElementById("input-numero");
const inputCifrado = document.getElementById("input-cifrado");
const inputDescifrado = document.getElementById("input-descifrado");
const botonCifrar = document.getElementById("boton-cifrar");
const botonDescifrar = document.getElementById("boton-descifrar");


// declaro las variable que van a guardar los valores mas importantes
let offset // desplazamiento elegido por el usuario
let msjCifrado // mensaje que escribe el usuario
let msjDescifrado // mensaje que escribe el usuario
let resultadoCifrado //es el resultado de la funcion encode
let resultadoDescifrado //es el resultado de la funcion decode

botonCifrar.addEventListener("click", () => { // se le agrega el evento click al boton cifrar

    resultadoCifrado = cipher.encode(offset, msjDescifrado) // llamar al metodo cifrar del objeto cipher
    
        inputCifrado.value = resultadoCifrado // se le asigna el resultado cifrado para que se vea en el input cifrado
    
})
botonDescifrar.addEventListener("click", () => {
    resultadoDescifrado = cipher.decode(offset, msjCifrado) // llamar al metodo descifrar del objeto cipher
   
        inputDescifrado.value = resultadoDescifrado // se le asigna el resultado para que se vea en input descifrado
    

})


inputNumerico.addEventListener("change", (event) => { // se le agrega un escuchador al evento change en el input numerico
    // (desplazaminto)
    

    offset = Number(event.target.value) // se guarda en la variable offset el desplazamiento elegido por el usuario
    // y se tranforma a numero
})
inputCifrado.addEventListener("keyup", (event) => { // se agrega el escuchador al evento keyup 
    // (cuando se deja de presionar una tecla)
   
   event.target.value= event.target.value.toUpperCase(); // cada letra que el usuario escribe se convierte en mayuscula


    msjCifrado = event.target.value; // guarda elmensaje escrito por el usuario  en input cifrado en msj cifrado
})
inputDescifrado.addEventListener("keyup", (event) => {// se agrega el escuchador al evento keyup 
    // (cuando se deja de presionar una tecla)
    event.target.value= event.target.value.toUpperCase(); //cada letra que el usuario escribe se convierte en mayuscula


    msjDescifrado = event.target.value;
})