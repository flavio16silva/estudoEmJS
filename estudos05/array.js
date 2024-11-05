//Metodos para Array

//Metodo toString() - transforma o array em uma string alterando sua estrutura. 
let lista = ['ovo', 'farinha', 'leite', 'manteiga']
let resp = lista
let res = lista.toString()
//console.log(res)
//console.log(resp)

//Metodo join() - pega o array e separa os itens pelo valor que for incluido dentro do parenteses.

let l = ['ovo', 'farinha', 'leite', 'manteiga']
let r = l.join('-')
//console.log(r)

//metodo indexOf() - executa a busca no array e retorna a posição exata do item desejado. E retorna -1 quando o item não existe.
let c = ['ovo', 'farinha', 'leite', 'manteiga']
let d = c.indexOf('leite')
//console.log(d)

//metodo pop() - remove o ULTIMO item do array
let e = ['ovo', 'farinha', 'leite', 'manteiga']
e.pop()
let f = e
//console.log(f)

//metodo shift() - remove o PRIMEIRO item do array
let ee = ['ovo', 'farinha', 'leite', 'manteiga']
ee.shift()
let ff = ee
//console.log(ff)

//metodo push() - vai adicionar um novo item ao final do array. nesse caso ele altera o array.
let zz = ['ovo', 'farinha', 'leite', 'manteiga']
zz.push('calda')
let bb = zz
//console.log(bb)

//Alterando o item do array pelo valor do indice
let z = ['ovo', 'farinha', 'leite', 'manteiga']
z[3] = 'nozes'
//console.log(z)
//Criando item que não existe:
z[4] = 'frutas'
//console.log(z)
//Adicionando item no array de outra forma. Como se fosse o próximo do último item:
z[z.length] = 'liquidificador'
//console.log(z)


//metodo splice - Remover um item do array - recebe dois valores: o primeiro o local(index) a ser deletado e o segundo valor até onde será deletado.
let a = ['ovo', 'farinha', 'leite', 'manteiga']
let b = a
a.splice(1,2)
//console.log(b)

//metodo concat() - Concatenar dois arrays:
let array1 = ['ovo', 'farinha', 'leite', 'manteiga']
let array2 = ['sal', 'pimenta', 'oleo']
let array3 = array1.concat(array2)
//console.log(array3)

//metodo sort() - serve para ordenar o array
let um = ['ovo', 'farinha', 'leite', 'manteiga', 'sal', 'pimenta', 'oleo']
um.sort()
//console.log(um)

//metodo reverse() - serve para inverter a ordem do array
let u = ['ovo', 'farinha', 'leite', 'manteiga', 'sal', 'pimenta', 'oleo']
u.reverse()
//console.log(u)

//metodo map() - mapeia o array, ou seja, irá varrer o array e executar uma função em cada item. Ele não modifica o array original.
let number = [2, 7, 10, 9, 11, 15]
let number2 = []

number2 = number.map( function(item) {
    return item * 2
})
//console.log(number)
//console.log(number2)

//metodo filter() - irá rodar uma função e retornará true ou false. O array original não é modificado. 
//O filter() retorna um novo array contendo apenas os elementos que passam no teste. Se nenhum elemento atender à condição, o filter() retorna um array vazio.

let num = [2, 7, 10, 9, 11, 15]
let num2 = []
num2 = num.filter( function(item) {
    if (item > 9 ) {
        return true
    } else {
        return false
    }
         
})
//console.log(num2)

//metodo every() - retorna true se "todos" os elementos atenderem à condição. Retorna false assim que encontra um elemento que não passa no teste.
//Não modifica o array original.
let n = [2, 7, 10, 9, 11, 15]
let n1 = []

n1 = n.every(function(item) {
    if(item > 20 ){
        return true
    } else {
        return false
    }
})
//console.log(n1)

//metodo some() - O some() retorna true "se ao menos um" elemento passar no teste. Retorna false se nenhum elemento passar. Ele não modifica o array original.
let n2 = [2, 7, 10, 9, 11, 15]
let n3 = []

n3 = n2.some(function(item) {
    // ou: return (item > 12)? true: false - ternario
    // ou: n2.some(item => item > 12)
    if(item > 12 ){
        return true
    } else {
        return false
    }
})
//console.log(n3)

//metodo find() - retorna o 'primeiro' elemento que passa no teste especificado. Se nenhum elemento passar no teste, ele retorna "undefined". 
//O array original não é modificado
let numero = [2, 77, 10, 99, 5, 15]
let numero1 = []

numero1 = numero.find(item => item == 5)
//console.log(numero1)
//Outro exemplo de uso do find()

let todos = [
    {id:1, nome: 'Paulo', sobrenome: 'Santos' },
    {id:2, nome: 'Joao', sobrenome: 'Caros' },
    {id:3, nome: 'Artur', sobrenome: 'Palma' },
    {id:4, nome: 'Joao', sobrenome: 'Fulano' }
]

let alguem = todos.find(function(item){
    return (item.nome == 'Joao') ? true: false
})
//console.log(alguem)


//metodo findIndex() - O findIndex() retorna o "índice" do 'primeiro' elemento que passa no teste especificado. Se nenhum elemento atender à condição, ele retorna -1.
//O array original não é modificado.
let numeros = [2, 77, 10, 99, 5, 15]
let numeros1 = []

numeros1 = numeros.findIndex( item => item > 20)
//console.log(numeros1)



