const cipher = {

  encode: (offset, string) => {
    let tipos = typeof offset !== "number" || typeof string !== "string";
    let vacios = (offset === (null || 0)) || (string === undefined);

    if (tipos || vacios) {
      throw TypeError()
    }
    // texto es el mensaje que escribe el usuario
    //numero es el deplazamiento que elije el usuario

    else {
      const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      string = string.toUpperCase();
      offset = (offset % 26 + 26) % 26;
      const resultado = string.replace(/[A-Z]/ig, (letra) => {
        return letras[(letras.indexOf(letra) + offset) % 26]
      });

      return resultado;
    }
  },

  decode: (offset, string) => {
    let tipos = typeof offset !== "number" || typeof string !== "string";
    let vacios = (offset === (null || 0)) || (string === undefined);
    if (tipos || vacios) {
      throw TypeError()
    }

    else {
      const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      string = string.toUpperCase();

      offset = (offset % 26 - 26) % 26;

      const resultado = string.replace(/[A-Z]/ig, (letra) => {
        return letras[(letras.indexOf(letra) - offset) % 26]
      });

      return resultado;

    }
  }
}


export default cipher;
