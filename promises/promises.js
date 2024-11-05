/*
Promise é um objeto que representa a conclusão (ou falha) eventual de uma operação assíncrona. 
Ela permite lidar com operações assíncronas de uma maneira mais organizada, evitando o chamado "callback hell."

Como funciona:
Pending (pendente): o estado inicial, enquanto a operação ainda está em andamento.
Fulfilled (resolvida): a operação foi concluída com sucesso.
Rejected (rejeitada): a operação falhou.

*/

function pegarTemperatura(){
    return new Promise(function(resolve, reject) {
        console.log('pegando temperatura...')

        setTimeout(function(){
            resolve('40 na sombra')
        }, 2000)
    })
}

//Usando a promise
console.log('codigo antes...')

let temp = pegarTemperatura()

console.log('codigo durante...')

temp.then(function(resultado){
    console.log('Temperatura: '+resultado)
})

temp.catch(function(error){
    console.log('Eita deu erro...')
})

console.log('codigo depois...')