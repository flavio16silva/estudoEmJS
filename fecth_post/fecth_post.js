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

async function inserirPost() {
    document.getElementById("posts").innerHTML = 'Carregando...'

    let req = await fetch('https://jsonplaceholder.typicode.com/posts', { //inclusão do 2º parametro
        method: 'POST', //Para usar o metodo GET, basta alterar o metodo e retirar o body, headers
        body: JSON.stringify({
            title: 'Titulo de Teste',
            body: 'Corpo de Teste',
            userId: 4
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    let json = await req.json()
    console.log(json)
}

