//String
// ------ Para saber quantos caracteres uma string tem:
let nome = 'Flavio Leite da Silva'
let resultado = nome.length
//console.log(resultado)

// ------ Em que posição encontra-se uma string
let pessoa = 'Flavio Leite da Silva'
let index = nome.indexOf('Aves') //Caso digite um nome que não exista ele retorna -1
//console.log(index)
// ------ No Javascript todas as contagens começam por zero.


// ------- metodos responsaveis por extrair informações de uma string
//metodo slice - retorna um pedaço da string de um inicio até o final solicitado.

let str = 'Flavio Leite da Silva'
let slice = str.slice(-15, -10) //caso coloque apenas uma valor, começara daquele valor e retornará o restante da string.
//console.log(slice)
//no slice podemos inserir valores negativos e a contagem começará pelo final da string.

//metodo substring
//não existe contagem de em formato negativo e funciona da mesma forma que o metodo slice.

//metodo substr
/*
retorna a posição inicial e a quantidade de caracteres que serão trazidos.
segundo o Vscode esse metodo foi depreciado.
Também funciona com valores negativos
*/
let n = 'Flavio Leite da Silva'
let s = n.substr(7, 5)
//console.log(s)


//Como substituir textos especificos em uma string
//REPLACE - recebe dois parametros (o valor a ser substituido, e a substituir) - funcional com string, number
let f = 'Flavio Leite da Silva'
let g = f.replace('Leite', 'Sete')
//console.log(f)
//console.log(g)

/* ----------- Metodos
Colocando strings em maiusculas - toUpperCase()
Colocando strings em maiusculas - toLowerCase()
*/
let x = 'Flavio Leite da Silva'
let y = x.toUpperCase()
let z = x.toLowerCase()
//console.log(y)
//console.log(z)

//------ Metodo de concatenar informações - concat()
let e = 'Flavio Leite da Silva'
let i = e.concat(' Sete')
//console.log(i)

//------- Metodo trim() - tira todos os espaços da string do inicio e do final. Não remove espaços internos da string. Não precisa inserir parametros.
let j = '   Flavio Leite da Silva     '
let m = j.trim()
//console.log(m)

/*
-------- Metodo charAt() - busca saber qual o caractere encontra-se numa determinada posição. Recebe um valor com parametro
Também podemos usar dessa forma: o[3], ou seja, nome da variavel e o valor do caractere, funciona como se tivesse pegando um indice no array.  
*/  
let o = 'Flavio Leite da Silva'
let p = o.charAt(0)
//console.log(p)

/*
----- Metodo split() - transforma uma string num array
Split - significa dividir
*/
let t = 'Flavio Leite da Silva'
let u = t.split(' ')
console.log(u)

let w = '1, 2, 3, 4, 5, 6, 7'
let q = w.split(',')
console.log(q)

