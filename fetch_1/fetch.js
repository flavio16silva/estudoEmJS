//Ao clicar no botão irá executar essa função:

/*
Fetch - essa função do JS retorna uma promessa
*/

function loadPosts(){
    /*
    1º opção:  
    let rep = fetch() - armazenar numa variavel
    rep.then() - aguardar a resposta    
    */
    document.getElementById("posts").innerHTML = "Carregando..."
    //2º opção: já deixar pre-configurado -  fetch().then()
    //recebe 2 parametros:
    fetch('https://jsonplaceholder.typicode.com/posts') //1º parametro: URL - Fazendo a requisição       

        .then(function(resultado){
            //console.log(resultado)
            return resultado.json() //Pega o resultado e transforma em json
        })
        .then(function(json){ //Após pegar o resultado, mostra o json, ou seja, retorna o objeto
            //console.log(json)
            document.getElementById("posts").innerHTML = json.length+ ' posts'
        })
        .catch(function(error){
            console.log('Ocorreu um erro...')
        })
}