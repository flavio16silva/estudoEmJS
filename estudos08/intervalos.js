/*
Intervalos ou timer
Aprendendo a retardar ou executar um programa varias vezes em um tempo determinado.
*/

let timer //Variavel global, sendo declarada dessa forma para usar em outras funções. 
function comecar(){
/* Função para executar o time de x em x segundos - SetInterval() - 
recebe o nome da função, e o tempo em milisegundos para ser executado
Ele não para a executação somente se for parado pelo clearInterval() */
    timer = setInterval(showTime, 1000)
}

function parar(){
    clearInterval(timer) //basta declarar o metodo e inserir a variavel dentro. Metodo usado como oposto do setInterval, ele para a contagem.  
}

//Função com exibição da hora, minuto e segundo na tela
function showTime() {
    let date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    let txt = h+':'+m+':'+s

    document.querySelector('.demo').innerHTML = txt
}


/*
setTimeout() - função que setamos um 'tempo especifico', iremos esperar esse tempo e a função em si será executada. Roda uma única vez. 
Recebe o tempo como parte da função
Recebe uma função dentro dele
Recebe o tempo para ser executado
*/
let time
function rodar(){
    time = setTimeout(function() {
        document.querySelector('.demo').innerHTML = 'Rodou o tempo!'
        
    }, 2000) 
    console.log('time indo')   
}

function stop(){
    clearTimeout(time)
    console.log("Parando o time")
}
