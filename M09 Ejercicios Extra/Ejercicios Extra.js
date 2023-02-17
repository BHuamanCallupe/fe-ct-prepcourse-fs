/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   
   let newArray = [];
   let keysOfObjeto = Object.keys(objeto);
   for (let i = 0; i < keysOfObjeto.length; i++) {
      newArray.push([keysOfObjeto[i], objeto[keysOfObjeto[i]]])
   }
   return newArray;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   let arrayCadena = string.split("");
   arrayCadena = arrayCadena.sort();
   let vecesRepetidas = 1;
   let arrayLetras = [];
   let arrayRepeticiones = [];
   for (let i = 0; i < arrayCadena.length; i++) {
      if(arrayCadena[i] == arrayCadena[i+1]){
         vecesRepetidas++;
      }else{
         arrayLetras.push(arrayCadena[i]);
         arrayRepeticiones.push(vecesRepetidas);
         vecesRepetidas=1;
      }
   }
   let objeto = {};
   for (let i = 0; i < arrayLetras.length; i++) {
      objeto[arrayLetras[i]] = arrayRepeticiones[i];
   }
   return objeto;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   let array = string.split("");
   let minusculas = [];
   let mayusculas = [];
   for (let i = 0; i < array.length; i++) {
      if(array[i].toUpperCase() == array[i]){
         mayusculas.push(array[i]);
      }else{
         minusculas.push(array[i]);
      }
   }
   for (let i = 0; i < minusculas.length; i++) {
      mayusculas.push(minusculas[i]);
   }
   string = mayusculas.join("");
   return string;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   let array = frase.split(" ");
   let invertirPalabra = [];
   for (let i = 0; i < array.length; i++) {
      invertirPalabra = array[i].split("");
      array[i] = invertirPalabra.reverse().join("");
   }
   return array.join(" ");
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   numero = String(numero); 
   numero = numero.split("");
   let invertido = numero.map(el=>el).reverse();
   let es = numero.every((el,i) =>  el == invertido[i]);
   if(es){
      return "Es capicua";
   }else{
      return "No es capicua";
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   let array = string.split("");
   return array.filter(el => (el != "a") && (el != "b") && (el != "c")).join("");
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   for (let i = 0; i < arrayOfStrings.length; i++) {
      for (let j = i+1; j < arrayOfStrings.length; j++) {
         if(arrayOfStrings[i].length>arrayOfStrings[j].length){
            let aux = arrayOfStrings[i];
            arrayOfStrings[i]=arrayOfStrings[j];  
            arrayOfStrings[j]=aux;     
         }
      }
   }
   return arrayOfStrings
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   let arrayU = [];
   for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
         if(array1[i] == array2[j]){
            arrayU.push(array1[i]);
         }
      }
   }
   if(arrayU.length==0){
      return [];
   }else{
      return arrayU;
   }
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
