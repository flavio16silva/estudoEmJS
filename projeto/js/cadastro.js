//Importações
import app from './firebase-config.js'
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js'

//Dados Iniciais
const form = document.querySelector('#form')
const nameInput = document.querySelector('#nome')
const emailInput = document.querySelector('#email')
const telefoneInput = document.querySelector('#fone')
const apInput = document.querySelector('#ap')
const passInput = document.querySelector('#password')
const showPasswordInput = document.querySelector('#showpassword')

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

    //verifica o select do apartamento
    if(!validApartamento(apInput, event)){
        return
    }

    //verifica senha válida
    if(!validPassword(passInput.value, 8)){
        alert('Preencha sua senha com minimo 8 digitos!')        
        return
    }
    
    
    //Todos os campos preenchidos, envia o form
    userRegister()
})

//verifica/mostra a senha digitada
showPasswordInput.addEventListener('change', handleShowPassword);


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

//Função para validar o apartamento
function validApartamento(apInput, e) {
    if(isNaN(apInput.value) || apInput.value.trim() === ''){
        alert('Preencha com seu apartamento!')  
        e.preventDefault()      
        return false
    }
    return true
}

//Função do mostrar senha
function handleShowPassword(){
    passInput.type = showPasswordInput.checked ? 'text' : 'password'
}

// ------- Firebase - cadastro de usuario  -------
function userRegister(){
    const auth = getAuth(app) //autenticação do Firebase

    //Dados do formulário
    const formEmail = emailInput.value
    const formPassword = passInput.value

    //Criando o usuario
    createUserWithEmailAndPassword(auth, formEmail, formPassword)
        .then((userCredential) => { //objeto contém informações sobre o usuário recém-criado.
            const user = userCredential.user
            console.log('usuario cadastrado: ', user)
            console.log('Detalhes do usuario: ', userCredential)

            setTimeout(() => {
                //Direciona para a pagina de Login
                window.location.href = 'login.html'                
            }, 1000);
        })
        .catch((error) => {
            console.error('Erro ao fazer cadastro: ', error.message)
            alert('Erro ao cadastrar usuário. Tente novamente!')
        })
}



