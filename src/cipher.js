const cipher = {
funcionCifrar: (texto, numero) =>{
  // texto es el mensaje que escribe el usuario
  //numero es el deplazamiento que elije el usuario
  
    if (!texto) return "";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    texto = texto.toUpperCase();
    numero = (numero % 26 + 26) %26;
    const resultado= texto.replace(/[A-Z]/ig, (letra)=> {
      return letras[(letras.indexOf(letra)+numero)%26]
    });

    return resultado;
    
},

funcionDescifrar: (texto, numero) =>{
  
    if (!texto) return "";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    texto = texto.toUpperCase();

    numero = (numero % 26 - 26) %26;

    const resultado= texto.replace(/[A-Z]/ig, (letra)=> {
      return letras[(letras.indexOf(letra)-numero)%26]
    });

    return resultado;

}
}


export default cipher;
