// Incluindo uma biblioteca
const http = require('http');
const queryString = require('query-string');
const url = require('url');
const fs = require('fs');
// Definição de endereço / URL
const hostname = '127.0.0.1';
const port = 3000;

// Implementação da regra de negócio
const server = http.createServer((req, res) => {

    let resposta;
    const urlparse = url.parse(req.url, true);
    const params = queryString.parse(urlparse.search);
    // Criar um usuario - Atualizar um usuário
    if(urlparse.pathname == '/criar-usuario'){
        //receber informações do usuário

        //Salvar as informações
        fs.writeFile('users/' + params.id + '.txt',JSON.stringify(params), function (err) {
        if (err) throw err;
        console.log('Saved!');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(resposta);
        });

        resposta = 'Usuário criado com sucesso';
    }
    else if(urlparse.pathname == '/selecionar-usuario'){
        fs.readFile('users/' + params.id + '.txt', function(err, data) {
        resposta = data;
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(resposta);
        });
    }
    // Selecionar o usuário
    // Remover o usuário

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(resposta);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
