//Uma melhor opção para o uso do: URL.createObjectURL(imagem)

function mostrar(){
    let reader = new FileReader()
    let imagem = document.getElementById('imagem').files[0]
    
    //usando o callback:
    reader.onloadend = function(){
        let img = document.createElement('img')
        img.src = reader.result
        img.width = 200

        document.getElementById("area").appendChild(img)

    }    
    
    reader.readAsDataURL(imagem)
}

/*
let img = document.createElement('img')
img.src = URL.createObjectURL(imagem) //criando uma URL visivel no navegador, nesse caso é uma imagem
img.width = 200
*/