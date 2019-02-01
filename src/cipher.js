window.cipher = {
   encode: (key,input) => {
input = input.toUpperCase();
    let output = "" ;
    for (let i = 0; i < input.length; i++) {
      let letter = input.charCodeAt(i);

      let newLetter =((letter - 65 + key) % 26) + 65;
      output = output +(String.fromCharCode(newLetter));

  }
      return output;
    },

    decode: (key,input) => {
      input = input.toUpperCase();
        let output = "" ;
        for (let i = 0; i < input.length; i++) {
          let letter = input.charCodeAt(i);

          let newLetter = ((letter + 65 - key) % 26) + 65;
          output = output +(String.fromCharCode(newLetter));
      }
          return output;
          }
  // ...
};
