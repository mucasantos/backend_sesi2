//Funções em Javascript/NodeJs
/**Passos iniciais:
 * 
 * 1. Importar http
 * 2. Criar servidor
 * 3. Ouvir o servidor
 * 
 */

const http = require("http")

const server = http.createServer((request, response)=> {
//Rotas

})

server.listen(3000,)

var idade = 17;
var ano = 1995;

console.log(somar(idade,ano))
console.log(subtrair(12, 2024))

function somar(num1, num2){
   return num1 + num2
}

function subtrair(num1, num2) {
    return num2 - num1
}