//Importações
import { onSnapshot ,collection, addDoc, updateDoc, deleteDoc, doc } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js'
import { db } from './firebase-config.js'


//Dados Iniciais
const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('#tbody')
const modalNome = document.querySelector('#m-nome')
const modalEmail = document.querySelector('#m-email')
const modalTelefone = document.querySelector('#m-fone')
const modalAP = document.querySelector('#m-ap')
const modalSenha = document.querySelector('#m-pass')
const btnSalvar = document.querySelector('#btnSalvar')
const searchInput = document.querySelector('#searchInput')


//Adicionando evento no botão - Adicionar
document.querySelector('#new').addEventListener('click', () => openModal())

let itens
let id

// -------- Funções ---------------

//Pesquisar nome
searchInput.addEventListener('input', function() {
  const searchValue = searchInput.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    const rows = tbody.getElementsByTagName('tr')

    //Varrer a tabela
    for(const row of rows){
        const nomeCelula = row.getElementsByTagName('td')[0]
        if(nomeCelula){
          const nomeTexto = nomeCelula.textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            row.style.display = nomeTexto.includes(searchValue) ? '' : 'none'
        }
    }
})

//Mascara de telefone - edição e inserção
function mascaraTelefone(telefone){
  telefone = telefone.replace(/\D/g, '')

  if(telefone.length > 11){
    telefone = telefone.slice(0, 11)
  }

  if (telefone.length <= 2) {
    telefone = telefone.replace(/^(\d{2})/, '($1) ') 
  } else if (telefone.length <= 7) {
    telefone = telefone.replace(/^(\d{2})(\d{5})/, '($1) $2-') 
  } else {
    telefone = telefone.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3') 
  }
  return telefone
}

//Formatação da mascara ao digitar
modalTelefone.addEventListener('input', function() {
  modalTelefone.value = mascaraTelefone(modalTelefone.value)
})

//Abrir Modal
window.openModal = function (edit = false, index = 0) {
  modal.classList.add('active')

  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active')
    }
  }

  if (edit) {
    modalNome.value = itens[index].nome
    modalEmail.value = itens[index].email
    modalTelefone.value = mascaraTelefone(itens[index].telefone)  
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



// Editar Modal
window.editItem = function(index) {
    id = index
  openModal(true, index)
}

//Deletar Modal
async function deleteItem(index) {
  const itemDoc = doc(db, 'moradores', itens[index].id)
  await deleteDoc(itemDoc)
  // itens.splice(index, 1)
  // setItensBD()
  loadItens()
}

//Inserir Modal
function insertItem(item, index) {
  console.log(item)
  let tr = document.createElement('tr')

  tr.innerHTML = `
    <td>${item.nome}</td>
    <td>${item.email}</td>
    <td>${item.telefone}</td>
    <td>${item.ap}</td>
    <td>*******</td>
    <td class="acao">
      <button onclick="editItem(${index})"><i class='bx bx-edit' style='color:#fdfafa'></i></button>
    </td>
    <td class="acao">
      <button class="deleteItem"><i class='bx bx-trash' style='color:#fdfafa'></i></button>
    </td>
  `

  //Clique para deletar
  tr.querySelector('.deleteItem').addEventListener('click', function () {
    deleteItem(index)
  })

  tbody.appendChild(tr)
}



//Função do mostrar senha
function handleShowPassword(){
    modalSenha.type = showPasswordInput.checked ? 'text' : 'password'
}

//Botao de Salvar
btnSalvar.onclick = async (e) => {
  
  if (modalNome.value == '' || modalEmail.value == '' || modalTelefone.value == ''  
      || modalAP.value == '' || modalSenha.value == '') {
    return
  }

  e.preventDefault()

  const novoItem = {
    nome: modalNome.value,
    email: modalEmail.value,
    telefone: modalTelefone.value,
    ap: modalAP.value,
    senha: modalSenha.value
  }

  if (id !== undefined) {
    const itemDoc = doc(db, 'moradores', itens[id].id)
    await updateDoc(itemDoc, novoItem)
    // itens[id].nome = modalNome.value
    // itens[id].email = modalEmail.value
    // itens[id].telefone = modalTelefone.value
    // itens[id].ap = modalAP.value
    // itens[id].senha = modalSenha.value
  } else {
    // itens.push({'nome': modalNome.value, 'email': modalEmail.value, 
    //     'telefone': modalTelefone.value, 'ap': modalAP.value, 'senha': modalSenha.value})
    await addDoc(collection(db, 'moradores'), novoItem)
  }

  //setItensBD()

  modal.classList.remove('active')
  loadItens()
  id = undefined
}


//Buscar morador no Firebase
function loadItens() {
  onSnapshot(collection(db, "moradores"), (querySnapshot) => {
  itens = []
 // Percorrendo os documentos na coleção e atualizando o array 'itens'
  querySnapshot.forEach((doc) => {
    const data = doc.data()
    itens.push({
      id: doc.id,
      nome: data.nome,
      email: data.email,
      telefone: data.telefone,
      ap: data.ap,
      senha: data.senha
    })    
  })
    tbody.innerHTML = ''
    itens.forEach((item, index) => {
      insertItem(item, index)
    })
  })
}



loadItens()