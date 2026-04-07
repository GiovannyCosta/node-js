// Importa o objeto de 'operations.js' e acessa suas propriedades
const operations = require("./operations");
console.log(operations.var1);
console.log(operations.var2);

// Importa a função de 'funcoes.js' e a executa passando o argumento 2
const funcoes = require("./funcoes");
const result = funcoes(2);
console.log(result.msg);
console.log(result.value);

// Importa o módulo 'funcoes2.js' que contém múltiplas funções
const funcoes2 = require("./funcoes2");

// Utiliza a notação de ponto (.) para especificar qual função executar
const add = funcoes2.adicao(5, 7); // Executa a função de adição
const sub = funcoes2.subtracao(7, 3); // Executa a função de subtração

console.log(add);
console.log(sub);
