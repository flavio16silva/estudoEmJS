/*
String => padStart e padEnd
São funções de manipulação de string
*/

/*
padEnd - é utilizado para preencher uma string com caracteres adicionais até que ela alcance um comprimento especificado. 
Ele adiciona os caracteres ao "final" da string original. 

1º parametro informa o numero de caracteres após a string
2º parametro informa qual será esse caractere.
*/

let telefone = '754r5'
console.log(telefone.padEnd(9, '*')) //retorna 7*********


/*
padStart - é usado para preencher uma string com caracteres extras no "início", até que ela atinja um comprimento especificado.
1º parametro informa o numero de caracteres após a string
2º parametro informa qual será esse caractere.
*/

let nome = 'S'
console.log(nome.padStart(4, '#')) //retorna ###Sol

//Situação prática - uso de cartao de credito

let cartao = '1234123412341234'
console.log('Esse é o seu cartão: '+cartao)

let numFinal = cartao.slice(-4)

let mascarado = numFinal.padStart(16, '*')
console.log('Esse é o seu cartão: '+mascarado)