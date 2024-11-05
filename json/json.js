/*
JSON (JavaScript Object Notation) é um formato leve e amplamente utilizado para armazenar e 
trocar dados de maneira estruturada e legível. Ele usa uma sintaxe baseada em pares chave-valor e 
listas de valores, semelhante a objetos e arrays do JavaScript.

Estrutura básica do JSON:
Objetos: { "chave": "valor" }
Arrays: [ valor1, valor2, valor3 ]
Tipos de dados: strings, números, objetos, arrays, booleanos (true ou false) e null


JSON é comumente usado em APIs para transferência de dados entre clientes e servidores. 
Ele pode ser manipulado no JavaScript com os métodos JSON.parse() (para converter JSON em objeto) 
e JSON.stringify() (para converter um objeto em JSON).

*/

//Conversão de um JSON em objeto - JSON.parse()
let gente = JSON.parse('{"nome":"flavio", "idade": 43 }') 
console.log(gente)
console.log(gente.idade) //buscando a propriedade no objeto


//Conversão de objeto em JSON.stringify()
let pessoa = {
    nome:'flavio',
    sobrenome: 'leite',
    idade: 43,
    trabalho: 'analista de ti'
}
console.log(pessoa)

let str = JSON.stringify(pessoa)
console.log('JSON: '+str)
