//Ao clicar no botão irá executar essa função:

/*
Fetch - essa função do JS retorna uma promessa
*/

function loadPosts(){
  
    document.getElementById("posts").innerHTML = "Carregando..."
  
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