const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('#tbody')
const modalNome = document.querySelector('#m-nome')
const modalEmail = document.querySelector('#m-email')
const modalTelefone = document.querySelector('#m-fone')
const modalAP = document.querySelector('#m-ap')
const modalSenha = document.querySelector('#m-pass')
const btnSalvar = document.querySelector('#btnSalvar')

let itens
let id

function openModal(edit = false, index = 0) {
  modal.classList.add('active')

  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active')
    }
  }

  if (edit) {
    modalNome.value = itens[index].nome
    modalEmail.value = itens[index].email
    modalTelefone.value = itens[index].telefone 
    modalAP.value = itens[index].ap
    modalSenha.value = itens[index].senha
    id = index
  } else {
    modalNome.value = ''
    modalEmail.value = ''
    modalTelefone.value = ''
    modalAP.value = ''
    modalSenha.value = ''

  }
  
}

function editItem(index) {

  openModal(true, index)
}

function deleteItem(index) {
  itens.splice(index, 1)
  setItensBD()
  loadItens()
}

function insertItem(item, index) {
  let tr = document.createElement('tr')

  tr.innerHTML = `
    <td>${item.nome}</td>
    <td>${item.email}</td>
    <td>${item.telefone}</td>
    <td>${item.ap}</td>
    <td>${item.senha}</td>
    <td class="acao">
      <button onclick="editItem(${index})"><i class='bx bx-edit' style='color:#fdfafa'></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash' style='color:#fdfafa'></i></button>
    </td>
  `
  tbody.appendChild(tr)
}

btnSalvar.onclick = e => {
  
  if (modalNome.value == '' || modalEmail.value == '' || modalTelefone.value == ''  || modalAP.value == '' || modalSenha.value == '') {
    return
  }

  e.preventDefault();

  if (id !== undefined) {
    itens[id].nome = modalNome.value
    itens[id].email = modalEmail.value
    itens[id].telefone = modalTelefone.value
    itens[id].ap = modalAP.value
    itens[id].senha = modalSenha.value
  } else {
    itens.push({'nome': modalNome.value, 'email': modalEmail.value, 
        'telefone': modalTelefone.value, 'ap': modalAP.value, 'senha': modalSenha.value})
  }

  setItensBD()

  modal.classList.remove('active')
  loadItens()
  id = undefined
}

function loadItens() {
  itens = getItensBD()
  tbody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItem(item, index)
  })

}

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

loadItens()