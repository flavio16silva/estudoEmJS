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

//Função
const errors = []

form.addEventListener('submit', (event) => {
    event.preventDefault()
    clearErrors()

    let hasError = false

    if (ataInput.value.trim() === ''){
        showError(ataInput, 'Preencha o título da Ata')
        hasError = true
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
   

    // if(horasT.value <= horasI.value){
    //     event.preventDefault()
    //     alert('A hora de início deve ser anterior à hora de término')
    // }

    if(hasError) return

    //const errors = [];
    //trim() - Remove espaços em branco no início e no final do valor 
    // if (dataInput.value.trim() === '') errors.push('Preencha a data da Ata');
    // if (horasI.value.trim() === '') errors.push('Preencha o horário de início');
    // if (horasT.value.trim() === '') errors.push('Preencha o horário de término');
    // if (localInput.value.trim() === '') errors.push('Preencha o local da reunião');
    // if (presidInput.value.trim() === '') errors.push('Preencha o nome do Presidente');
    // if (secreInput.value.trim() === '') errors.push('Preencha o nome do Secretário');
    // if (participaInput.value.trim() === '') errors.push('Preencha os Participantes');
    // if (discussoesInput.value.trim() === '') errors.push('Preencha os relatos das Discussões');
    // if (obsInput.value.trim() === '') errors.push('Preencha as Observações');

    //Se houver erros - campo obrigatorio não preenchido
    if (errors.length > 0) {
        alert(errors.join('\n'));
        return;
    }


    form.submit()
})

//Exibir erro
function showError(input, message) {
    const parent = input.closest('.form-floating') || input.parentElement 

    if(parent.querySelector('.text-danger')) return 

    const errorElement = document.createElement('small')
    errorElement.className = 'text-danger d-block mt-1'
    errorElement.innerText = message
    
    parent.appendChild(errorElement)
}

//Limpar campos
function clearErrors() {
    document.querySelectorAll('.text-danger').forEach((error) => error.remove());
}
