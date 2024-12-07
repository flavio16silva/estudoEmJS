//Dados Iniciais
const form = document.querySelector('#form')
const nameInput = document.querySelector('#nome')
const emailInput = document.querySelector('#email')
const telefoneInput = document.querySelector('#fone')
const apInput = document.querySelector('#ap')

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