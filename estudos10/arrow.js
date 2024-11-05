//Arrow Functions
//1º opção de função:
/*
function somar(x, y){
    return x + y
}
*/

//2º opção de função:
/*
let somar = function(x, y){
    return x + y
}
*/

//3º opção de função:
/*
let somar = (x, y) => {
    return x + y
}
*/

//4º opção de função:
let somar = (x, y) => x + y
console.log(somar(10,5))

//5º opção de função:
/*
Função arrow com apenas um parametro - Quando temos um parametro o uso de parenteses é opcional. 
Caso não tenha nenhum parametro, faz-se necessário o uso. 
*/
//Função com parenteses:
let letrasNome = (nome) => nome.length
console.log(letrasNome('Flavio'))

//Função sem parenteses:
let letrasDoNome = nome =>nome.length
console.log(letrasDoNome('Flavio'))