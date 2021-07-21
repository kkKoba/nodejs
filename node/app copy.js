// Incluindo uma biblioteca
const queryString = require('query-string');
const http = require('http');
const url = require('url');

// Definição de endereço / URL
const hostname = '127.0.0.1';
const port = 3000;

// Implementação da regra de negócio
const server = http.createServer((req, res) => {
  
  //Pegar pergunta
    const params = queryString.parse(url.parse(req.url, true).search);
    
    //Verificar pergunta
    let resposta;
    if(params.pergunta == 'melhor-filme'){
        resposta = 'star wars';
    }   
    else if(params.pergunta == 'melhor-tecnologia-backend'){
        resposta = 'nodejs';
    }
    else {
        resposta = 'não sei. desculpe';
    }

    //Retornar a sresposta
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(resposta);
});

//Execução
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
