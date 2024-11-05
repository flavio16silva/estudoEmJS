function mostrar(){
    let imagem = document.getElementById('imagem').files[0]
    // console.log(imagem)

    //criando a tag html da imagem para exibição:

    let img = document.createElement('img')
    img.src = URL.createObjectURL(imagem) //criando uma URL visivel no navegador, nesse caso é uma imagem
    img.width = 200

    document.getElementById("area").appendChild(img)
}