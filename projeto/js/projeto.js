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
    if (ataInput.value.trim() === ''){
        showError(ataInput, 'Preencha o título da Ata')
    } 
   

    if(horasT.value <= horasI.value){
        event.preventDefault()
        alert('A hora de início deve ser anterior à hora de término')
    }

  

    const errors = [];
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
function showError(Input, message) {
    const errorElement = document.createElement('small')
    errorElement.className = 'text-danger'
    errorElement.innerText = message
    Input.parentElement.appendChild(errorElement)
}

