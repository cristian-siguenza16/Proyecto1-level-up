// variable que almacena keys y valores (Diccionario u Objecto)
let diccionario={a: 1, z: 'hola', l: 3, k:4, key1: true, key2: null};

//ordena las keys alfabeticamente y las almacena en un array
let keysOrdenadas = Object.keys(diccionario).sort();

//algoritmo para almacenar los valores en un array con el orden de keys
let valoresOrdenados = [];
for(let i=0; i<keysOrdenadas.length; i++){
    valoresOrdenados[i] = diccionario[keysOrdenadas[i]];
}

//imprime el antes y despues(con arrays separando keys y valores)
console.log(diccionario);
console.log(keysOrdenadas, valoresOrdenados);
