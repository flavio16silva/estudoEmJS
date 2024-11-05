async function enviar(){
    let arquivo = document.getElementById("arquivo").files[0] //caso deixe sem o indice retornará o arquivo por completo. É uma opção também.
    //console.log(arquivo)

    //Para uso no envio de arquivos
    let body = new FormData()
    body.append('title', 'Teste de envio')
    body.append('arquivo', arquivo)

    let req = await fetch("www.teusite.com.br/upload", {
        method: "POST",
        body: body,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })


}