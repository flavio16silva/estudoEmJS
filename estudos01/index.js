let person = {
    name: 'flavio',
    lastName: 'silva',
    age: 43
}

//console.log(person)

function createPerson (name, lastName, age) {
    return {
        name, 
        lastName,
        age,
        getFullname: () => { //incorreto
            return `${this.name} ${this.lastName}`
        }
    }
}

//let personUm = createPerson('flavio', 'leite', 40)
//let personDois = createPerson('pedro', 'santos', 30)

//console.log(personUm.getFullname())
// console.log(personDois.age)


let pessoa = {
    name: 'Joao',
    lastName: 'Silva',
    age: 30,
    getFullname() { //correto - função direto como propriedade do objeto
            return `${this.name} ${this.lastName}`
        },
    start () {
        //console.log("deu inicio na pessoa")
    }
    
}

pessoa.start()
//console.log(pessoa.getFullname())

const defaultUser = {
    name: '',
    email: '',
    level: 100
}

const user1 = {
    ...defaultUser,
    name: 'pedro',
    email: 'pedro@email.com'
    
}

//console.log(user1)

const adm1 = {
    ...defaultUser,
    name: 'adm',
    email: 'adm@adm.com.br',
    level: 3
}
//console.log(adm1)



//https://jsonplaceholder.typicode.com/posts
//GET, POST, PUT, DELETE

/*
 ------------ Original -----------
 function clicou() { 
    fetch('https://jsonplaceholder.typicode.com/posts') 
    .then((response) => {
     //console.log(`Status: ${response.status}`)
     return response.json()
     })    
    .then((json) => {
         alert(`Titulo do primeiro post: ${json[0].title}`)
     })
    .catch(() => {
         alert('Deu problema!')
     })

*/

//Com uso do async await para executar a função em sua ordem normal
async function clicou() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await response.json() 
    
    alert(`Titulo do primeiro post: ${json[0].title}`)
    alert("Clicou!")   
    
}

//Uso do async na função abaixo:
/*
---------- Original -----------
function inserir() {
    fetch('https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'Titulo de teste',
                body: 'Corpo de Teste',
                userId: 2
            })
        })
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            console.log(json)
        })

}
*/

//Com uso do async
async function inserir() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title:'Titulo de teste',
                body: 'Corpo de Teste',
                userId: 2
            })
        })
        let json = await response.json()
        console.log(json)
    } 


document.querySelector('#botao').addEventListener('click', clicou)
document.querySelector('#inserir').addEventListener('click', inserir)