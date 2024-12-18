//Dados Iniciais
const form = document.querySelector('#form')
const ataInput = document.querySelector('#ata')
const dataInput = document.querySelector('#data')
const horasI = document.querySelector('#horasI')
const horasT = document.querySelector('#horasT')
const localInput = document.querySelector('#local')
const presidInput = document.querySelector('#presidente')
const secreInput = document.querySelector('#secretario')
const participaInput = document.querySelector('#participantes')
const pautaInput = document.querySelector('#pauta')
const discussoesInput = document.querySelector('#discussoes')
const obsInput = document.querySelector('#observacoes')
const assinaInput = document.querySelector('#signature-pad')


// --------- Assinatura no Canvas -----------
let signaturePad

document.addEventListener('DOMContentLoaded', () => {
const canvas = document.querySelector('#signature-pad')
signaturePad = new SignaturePad(canvas, {
        //Personalização
        penColor: 'black',
        minWidth: 1,
        maxWidth: 5,
    }) 
})

document.addEventListener('DOMContentLoaded', () => {
    const limparBotao = document.querySelector('#clear-signature')
    limparBotao.addEventListener('click', limparAssinatura)
})


//Limpar campos
function clearErrors() {
    document.querySelectorAll('.text-danger').forEach((error) => error.remove());
}

//Eventos
horasI.addEventListener('input', validHorasInput)
horasT.addEventListener('input', validHorasInput)

//Função
form.addEventListener('submit', (event) => {
    event.preventDefault() //impede envio imediato
    clearErrors()          //remove erros anteriores
    
    let hasError = false    //rastrear erros
    
    //Validações dos Inputs
    //trim() - Remove espaços em branco no início e no final do valor   
    if (ataInput.value.trim() === ''){
        showError(ataInput, 'Preencha o título da Ata')
        hasError = true         //indica que a erro
    } 

    if (dataInput.value.trim() === '') {
        showError(dataInput, 'Preencha a data da Ata')
        hasError = true
    }

    if (horasI.value.trim() === ''){
        showError(horasI, 'Preencha o horário inicial')
        hasError = true
    } 

    if (horasT.value.trim() === ''){
        showError(horasT, 'Preencha o horário final')
        hasError = true
    }

    if (localInput.value.trim() === ''){
        showError(localInput, 'Preencha com o local')
        hasError = true
    } 

    if (presidInput.value.trim() === ''){
        showError(presidInput, 'Preencha o nome do Presidente')
        hasError = true
    } 

    if (secreInput.value.trim() === ''){
        showError(secreInput, 'Preencha o nome do Secretário')
        hasError = true
    }

    if(participaInput.value.trim() === ''){
        showError(participaInput, 'Preencha os Participantes')
        hasError = true
    }

    if(pautaInput.value.trim() === ''){
        showError(pautaInput, 'Preencha com a pauta')
        hasError = true
    }

    if (discussoesInput.value.trim() === '') {
        showError(discussoesInput, 'Preencha os relatos das Discussões')
        hasError = true
    }

    if (obsInput.value.trim() === '') {
        showError(obsInput, 'Preencha as Observações')
        hasError = true
    }      

    if(!validHorasInput()){
        hasError = true   //indica erro
    }

    if(!validAssinatura()){
        hasError = true
    }

    if(hasError) return  //impede envio de erros  

    //console.log('Assinatura válida:', signaturePad.toDataURL())
    form.submit()        //submete o form
})

//Validando preenchimento da hora
function validHorasInput(){
    if(horasT.value && horasI.value){
        if(horasT.value <= horasI.value){
            showError(horasT, 'A hora final deve ser posterior à hora inicial')
            return false
        }       
        return true
    }
}

//Exibir erro
function showError(input, message) {
    const parent = input.closest('.form-floating') || input.parentElement 

    if(parent.querySelector('.text-danger')) return 

    const errorElement = document.createElement('small')
    errorElement.className = 'text-danger d-block mt-1'
    errorElement.innerText = message
    
    parent.appendChild(errorElement)
}

//Validando se assinatura foi feita
function validAssinatura(){
    const parent = assinaInput.closest('.form-floating') || assinaInput.parentElement 

    parent.querySelectorAll('.text-danger').forEach(error => error.remove())

    if (signaturePad.isEmpty()) {
    const errorElement = document.createElement('small')
    errorElement.className = 'text-danger d-block mt-1'
    errorElement.innerText = 'Por favor assine o documento'
    
    parent.appendChild(errorElement)
        return false       
    }
        return true
}


//Limpar assinatura



function limparAssinatura(){
    if(signaturePad){
        signaturePad.clear()
    } else {
        console.error('Signature não definido')
    }
   
}



