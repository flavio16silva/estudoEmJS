/*
Uma função callback em JavaScript é uma função que é passada como argumento para outra função e é chamada (ou "executada") 
depois que a função externa completa seu processamento. A ideia principal é que a função de callback seja usada como um mecanismo 
para permitir que o código execute algo após a conclusão de uma tarefa assíncrona (como uma requisição de dados ou uma animação), 
ou após um evento específico, dependendo do design do código.
*/

function alertar(){
    //console.log('Retorno callback')
}

let nome = 'flavio'
setTimeout(alertar, 5000)
let sobrenome = 'leite'
//console.log(`${nome} ${sobrenome}`)


function loadData(callback) {
    //console.log("Carregando dados...");
    setTimeout(function() {
        //console.log("Dados carregados.");
        callback(); // Chama a função de callback após 5 segundos
    }, 5000);
}

function showData() {
    //console.log("Exibindo dados carregados.");
}

// Executa loadData e passa showData como callback
loadData(showData);



// function saudacao(name) {
//     alert('Olá ' + name);
//    }
   
//    function digitarNome(callback) {
//    let name = prompt('Por favor, digite seu nome.');
//     callback(name);
//    }
   
//    digitarNome(saudacao);


//Nova tentativa de callback
function mostrar(num){
    console.log('Esse é o resultado '+num) //3º Função
}

function soma(a, b, callback){ //1º Função
    let op = a + b
    callback(op)

}
soma(3, 5, mostrar)

function multiplicar(a, b, callback){//2º Função
    let op = a * b
    callback(op)
}
multiplicar(2, 2, mostrar)

function subtrair(a, b, cb){
    let op = a - b
    cb(op)
}
subtrair(5, 3, mostrar)

//Outra tentativa
console.log('Antes da callback...')

//Essa função abaixo é assincrona, porque espera a resposta de 2 segundos para ser executada
setTimeout(function(){ //callback - ou seja, uma função sendo passada como argumento de outra função
    console.log('Durante a callback...')
}, 2000)

console.log('Depois da callback...')