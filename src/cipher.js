const cipher = {
funcionCifrar: (texto, numero) =>{
  // texto es el mensaje que escribe el usuario
  //numero es el deplazamiento que elije el usuario
  console.log("entro a cipher", texto, numero);
    if (!texto) return "";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    numero = (numero % 26 + 26) %26;
    console.log(texto.replace(/[A-Z]/ig, c=> letras[(letras.indexOf(c)+numero)%26]))
    return texto.replace(/[A-Z]/ig, c=> letras[(letras.indexOf(c)+numero)%26]);
    
},

funcionDescifrar: (texto, numero) =>{
    if (!texto)return "";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    numero = (numero % 26 - 26) %26;
    console.log(texto.replace(/[A-Z]/ig, c=> letras[(letras.indexOf(c)+numero)%26]))
    return texto.replace(/[A-Z]/ig, c=> letras[(letras.indexOf(c)-numero)%26]);

}
}


export default cipher;
