// Instala o pacote lodash com o comando npm install lodash
// lodash = biblioteca para trabalhar com arrays
const _ = require("lodash");
const arr = [4, 6, 8, 10, 12, 1, 3, 5, 7];
// .chunk: divide um array em partes de tamanho especificado
// (arr, 3); -> primeiro argumento: array a ser dividido, segundo argumento: tamanho das partes
// [4, 6, 8], [10, 12, 1], [3, 5, 7]

// forEach: executa uma função para cada elemento do array
_.chunk(arr, 3).forEach((element) => {
  console.log("------------");

  element.forEach((i) => {
    console.log(i);
  });
});
