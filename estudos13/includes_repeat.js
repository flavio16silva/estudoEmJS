//Includes e Repeat

/*
Includes - é usado para verificar se um array ou string contém um determinado valor. Ele retorna true se o valor for encontrado e false se não for.
O método é case-sensitive(diferencia maiusculas de minusculas) e facilita a busca de elementos ou substrings em arrays e strings.
*/


let lista = ['ovo', 'carne', 'feijão', 'macarrão', 'arroz', 'farinha']
console.log(lista.includes('feijão'))

//Uso com strings
let pessoa = 'Flavio Leite'
console.log(pessoa.includes('e'))


/*
Repeat - retorna uma nova string que repete a string original um número especificado de vezes.
Esse método é útil para gerar strings repetidas de forma simples e eficiente.

sintaxe - string.repeat(count);
*/

console.log('a '.repeat(5))
let nome = 'Flavio ' //para inserir o espaço só dentro da string
console.log(nome.repeat(3))