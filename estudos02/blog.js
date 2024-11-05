//https://jsonplaceholder.typicode.com/posts

async function readPosts() {
    let postArea = document.querySelector('.posts')
    postArea.innerHTML = ' Carregando...'

    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await response.json()

    if (json.length > 0) {
        postArea.innerHTML = ''
        
        for (let i in json){
            let postHtml = `<div><h1>${json[i].title}</h1>${json[i].body}<hr/></div>`
            postArea.innerHTML += postHtml
        }

    } else {
        postArea.innerHTML = 'Nenhum post foi carregado.'
    }

}

//Requisição POST mandando o title e boy
async function addNewPost(title, body) {
    await fetch (
        'https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/Json'
            },
            body: JSON.stringify({
                title,            //title: title - quando uma propriedade recebe um valor de mesmo nome, podemos deixar somente a propriedade no JS
                body,
                userId:2
            })

        }
    )

    //limpando os campos
    document.querySelector('#titleField').value = ''
    document.querySelector('#bodyField').value = ''

    //Recarregando os posts - LENDO
    readPosts()

}

//Evento de clicar no botão inserir
document.querySelector('#insertButton').addEventListener('click', () => {
    let title = document.querySelector('#titleField').value //pegando o titulo
    let body = document.querySelector('#bodyField').value   //pegando o corpo

    if (title && body) {
        addNewPost(title, body)
    } else {
        alert('Preencha todos os campos.')
    }
})

readPosts()

/*
function clicar(){
    let digitado = parseInt(document.querySelector('.digitar').value)    
    console.log(digitado)

    if (isNaN(digitado)){ //verificando se é um numero
        console.log('Digite numero valido')
        return
    }

    let encontrado = array.find(item => item === digitado)
    if (encontrado != undefined){
        console.log('numero valido')

        if (encontrado % 2 == 0) {
          console.log(`Numero ${encontrado} é par.`) 
        } else {
          console.log(`Numero ${encontrado} é impar.`)  
        }

    } else {
        console.log('numero não faz parte do array')
    }

*/