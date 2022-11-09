const cipher = {
encode: (offset, string) =>{
  // texto es el mensaje que escribe el usuario
  //numero es el deplazamiento que elije el usuario
  
    if (!string) return "";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    string = string.toUpperCase();
    offset = (offset % 26 + 26) %26;
    const resultado= string.replace(/[A-Z]/ig, (letra)=> {
      return letras[(letras.indexOf(letra)+offset)%26]
    });

    return resultado;
    
},

decode: (offset, string) =>{
  
    if (!string) return "";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    string = string.toUpperCase();

    offset = (offset % 26 - 26) %26;

    const resultado= string.replace(/[A-Z]/ig, (letra)=> {
      return letras[(letras.indexOf(letra)-offset)%26]
    });

    return resultado;

}
}


export default cipher;
