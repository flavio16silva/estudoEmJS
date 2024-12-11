//Dados Iniciais
const form = document.querySelector('#form')
const nameInput = document.querySelector('#nome')
const emailInput = document.querySelector('#email')
const telefoneInput = document.querySelector('#fone')
const selectInput = document.querySelector('#select')
const passInput = document.querySelector('#password')

//console.log(selectInput)

//Função
form.addEventListener('submit', (event) => {
    event.preventDefault()

    //verifica nome vazio
    if(nameInput.value === ''){
        alert('Preencha o nome!')        
        return
    } 

    //verifica email é valido
    if(emailInput.value === '' || !isEmailValid(emailInput.value)){
        alert('Preencha com email válido!')        
        return
    }

    //verifica telefone é válido
    let valor = telefoneInput.value.replace(/\D/g, '')
    if(valor.length < 11){
        alert('Informar número completo com DDD!')        
        return
    }

    //verifica senha válida
    if(!validPassword(passInput.value, 8)){
        alert('Preencha sua senha com minimo 8 digitos!')        
        return
    }

    //verifica o select do apartamento
    if(selectInput.value === ''){
        alert('Selecione seu apartamento!')        
        return
    }

    //Todos os campos preenchidos, envia o form
    form.submit()
})

//Função que valida email
function isEmailValid(email){
    //regex para validar email
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    )

    if(emailRegex.test(email)){
        return true
    }
    return false
}

//Função de validar a senha
function validPassword(pass, minDig){
    if(pass.length >= minDig){
        return true //senha valida
    }
    return false //senha invalida
}

//Função para validar o telefone
telefoneInput.addEventListener('input', ()=> {
    // Remove tudo que não é número
    let valor = telefoneInput.value.replace(/\D/g, '')  
    
    // Aplica a máscara (XX) XXXXX-XXXX
    if(valor.length > 10){
        valor = valor.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2 - $3')
    } else if (valor.length > 6){
        valor = valor.replace(/^(\d{2})(\d{4})(\d+).*/, '($1) $2-$3')    
    } else if (valor.length > 2){
        valor = valor.replace(/^(\d{2})(\d+).*/, '($1) $2')
    } else if (valor.length > 0){
        valor = valor.replace(/^(\d+)/, '($1) ')
    }
    telefoneInput.value = valor  //atualiza o campo da mascara
})
