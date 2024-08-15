//Criar servidor http => O que é http?

//1. Carregar o modulo http
const http = require("http")

//2.Criar de fato o servidor

const server = http.createServer((request, response)=>{
    //comandos do servidor
    console.log(request.url)

    if (request.url ==="/food") {
        response.end(
         `
         <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Eu adoro Macdonalds</h1>
    <img src="https://png.pngtree.com/png-clipart/20230216/ourmid/pngtree-juicy-burgers-with-a-transparent-background-png-image_6603069.png" alt="hamburguer de siri">
</body>
</html>
         `   
        )
    }
})

//3. 'ligar' o meu servidor em uma porta!
server.listen(3001)

console.log("Servidor online..")
//localhost:3001/ => depois do barra digita qq coisa