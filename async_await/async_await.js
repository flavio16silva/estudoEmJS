//Ao clicar no botão irá executar essa função:

/*
Fetch - essa função do JS retorna uma promessa

async -  significa "assíncrono" em português. Em JavaScript, ao colocar async antes de uma função, 
você está dizendo que ela funcionará de forma assíncrona, ou seja, permitirá que o código espere a 
conclusão de uma operação que leva tempo (como buscar dados de um servidor) sem bloquear o resto do código.

await - significa "aguardar". Ele é usado dentro de uma função async para pausar a execução até que 
uma operação assíncrona (como uma Promise) seja concluída. Isso facilita o 
trabalho com operações assíncronas de maneira que pareça sequencial.
*/

/*
Caso faça uso do async para criação de função:
let loadPosts async () => {
}
*/

async function loadPosts(){
  
    document.getElementById("posts").innerHTML = "Carregando..."
    
    //Uso do await
    let req = await fetch('https://jsonplaceholder.typicode.com/comments')
    let json = await req.json()
    montarBlog(json)

    /*
    fetch('https://jsonplaceholder.typicode.com/comments') //1º parametro: URL - Fazendo a requisição  
 
        .then(function(resultado){
            //console.log(resultado)
            return resultado.json() //Pega o resultado e transforma em json
        })
        .then(function(json){ //Após pegar o resultado, mostra o json, ou seja, retorna o objeto
            montarBlog(json)   //função para montar o blog            
        })
        .catch(function(error){
            console.log('Ocorreu um erro...')
        })
    
    */
  
}

function montarBlog(lista){
    let html = ''

    for(let i in lista){
        html += '<h3>' +lista[i].name+ '</h3>'
        html += '<h4>' +lista[i].email+ '</h4>'
        html += lista[i].body+ '<br/>'
        html += '<hr/>'
    }
    document.getElementById("posts").innerHTML = html
}