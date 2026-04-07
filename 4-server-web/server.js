const http = require("http");

/**
 * createServer: Cria o servidor HTTP.
 * Recebe uma função callback com os objetos:
 * - req (request): Dados que vêm do navegador/cliente.
 * - res (response): Dados que o servidor envia de volta.
 */
const server = http.createServer((req, res) => {
  // Extração de metadados da requisição
  const headers = req.headers; // Informações do cabeçalho da conexão
  const method = req.method; // Método HTTP (GET, POST, etc.)
  const url = req.url; // Caminho (endpoint) acessado

  console.log("Servidor acessado!");
  console.log("Headers:", headers);
  console.log("Method: " + method);
  console.log("URL: " + url);

  // Rota para conteúdo HTML
  if (req.url === "/teste") {
    // setHeader: Define o tipo de conteúdo como HTML
    res.setHeader("Content-Type", "text/html");
    // end: Finaliza a resposta e envia o conteúdo ao navegador
    res.end("<h1>Olá Mundo!</h1>");
  }

  // Rota para conteúdo JSON
  if (req.url === "/json") {
    res.setHeader("Content-Type", "application/json");
    const data = {
      id: 1,
      name: "John Doe",
      email: "9YH3t@example.com",
    };
    // Converte o objeto JavaScript em string JSON antes de enviar
    res.end(JSON.stringify(data));
  }
});

/**
 * listen: Faz o servidor "escutar" as requisições em uma porta específica.
 * Porta 3000 é comum para ambientes de desenvolvimento.
 */
server.listen(3000);
