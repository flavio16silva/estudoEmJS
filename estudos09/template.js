//Template Strings, Objetos e Arrays

//Template Strings
let chamado = 'Flavio'
let ano = 43
//let frase = 'Meu nome é '+nome+ ' e tenho '+idade+ ' anos.'
let frase = `Meu nome é ${chamado} e tenho ${ano} anos e próximo ano terei ${ano + 1} anos.`
//console.log(frase)

//Objetos

let pessoa = {
    nome: 'Flavio',
    sobrenome: 'Silva',
    //idade: 43,
    social: {
        facebook: 'flavio16',
        instagram: {
            url: '@flavioSilva',
            seguidores: 1000
        }
    },
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`
    }
}

//console.log(pessoa.nomeCompleto())

//Forma padrão de dar um valor a variavel
/*
let nome = pessoa.nome
let sobrenome = pessoa.sobrenome
let idade = pessoa.idade

console.log(nome, sobrenome, idade)
*/


//Descontruindo o objeto
//let {nome, sobrenome, idade} = pessoa
//console.log(nome, sobrenome, idade)

//Alterando o nome da variavel dentro da desconstrução do objeto

//let {nome:pessoaNome, sobrenome, idade} = pessoa //variavel 'nome', sendo alterada para pessoaNome
//console.log(nome, sobrenome, idade)  - caso mantenha a variavel 'nome' nesse formato retornará no console - nome não definido
//console.log(pessoaNome, sobrenome, idade) //nova forma de chamada da variavel. 

/*
Caso a variavel de um objeto não exista e seja chamada posteriormente, podemos dar a ela um valor padrão. 
Exemplo:
Supor que a variavel idade 'não' exista no objeto 'pessoa' acima.
*/
//let {nome, sobrenome, idade = 77} = pessoa
//console.log(nome, sobrenome, idade) //caso não defina o valor da variavel retornará no console - undefined

// ------- Como pegar objeto dentro de objetos
//let {facebook, instagram} = pessoa.social
//console.log(facebook, instagram)

//---- OU

// let {nome, sobrenome, social:{instagram}} = pessoa
// console.log(nome, sobrenome, instagram)

//caminho mais dificil - Pegando o instagram, mantendo a variavel solicitada:
// let {nome, sobrenome, social:{instagram:{url:instagram, seguidores}}} = pessoa
// console.log(nome, sobrenome, instagram, seguidores)


let gente = {
    nome: 'Flavio',
    //sobrenome: 'Silva',
    //idade: 43,
    social: {
        facebook: 'flavio16',
        instagram: {
            url: '@flavioSilva',
            seguidores: 1000
        }
    }  
}

function pegarNome({nome, sobrenome = 'Mattos', social:{instagram:{url:instagram}}}) { //opção 03 - desconstruindo o objeto - inserindo as variaveis como parametros na função, dentro das chaves.
    //function pegarNome(obj)  - atende opção 01 e 02
    //return obj.nome+' '+obj.sobrenome - opção 01
    //let nome = obj.nome // opção 02
    //let sobrenome = obj.sobrenome
    return `${nome} ${sobrenome} - Siga nas redes ${instagram}`
}

pegarNome(gente)
//console.log(pegarNome(gente))


//----------- ARRAYS --------------
/*
Na hora de desconstruir um array é necessário dar um ome, porque irá se tornar uma variavel. 
A desconstrução do array é feito na ordem que ele tá sendo criado. Ou seja, o nome das variaveis que serão criadas. 
*/ 

let info = ['Flavio Silva', 'Flavio', 'Silva', '@flaviosilva'] //array padrão

let [nomeCompleto, nome, sobrenome, instagram ] = info //array desconstruido

//console.log(nomeCompleto, nome, sobrenome, instagram) //inserir o nome das variaveis que constam dentro do array

/*
Pegando itens selecionados no array - basta inserir virgulas e deixar o nome da variavel em branco para não ocupar espaço na memoria.
Isso pode ser feito com qualquer item em qualquer posição do array
*/

let [nomeTodo, , , insta] = info
//console.log(nomeTodo, insta)

//Desconstruindo um array que acabou de ser criado. Ou seja, criando a variavel primeiroNome e segundoNome
//Posso inserir valores padrões direto na variavel, como exemplo na variavel - idade
let [primeiroNome, segundoNome, idade = 90] = ['Flavio', 'Leite']
//console.log(primeiroNome, segundoNome, idade) // caso não insira o valor da variavel padrão, ao chamar a variavel retornará 'undefined' no console.


//Gerando um array e sua desconstrução atraves de uma função
function criar() {
    return [1,2,3]    
}
let [a,b,c] = criar()
//console.log(a,b,c)

