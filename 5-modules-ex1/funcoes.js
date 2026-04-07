// Exporta uma função que recebe um argumento (x) e retorna um objeto
module.exports = (x) => {
  // Verifica se o número é par usando o operador ternário
  // ? se verdadeiro : se falso
  let par = () => (x % 2 === 0 ? true : false);

  return {
    msg: "o valor eh par? ",
    value: par(),
  };
};
