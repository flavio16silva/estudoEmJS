//Funções relacionadas a matematica
//Calculando PI
let valor = Math.PI
//console.log(valor)


//Arredondamento de numero de acordo valor informado:
let v = Math.round(3.57) //4
//console.log(v)

//Arredondamento de numero para baixo:
let val = Math.floor(3.7) //3
//console.log(val)

//Arredondamento de numero para cima:
let n = Math.ceil(3.2) //4
//console.log(n)

//Para saber o numero absoluto de algum numero - ou seja, o valor positivo dele:
let num = Math.abs(-9.654)
//console.log(num)

//Informar o menor numero:
let min = Math.min(51,77,40,8,9,30,48)
//console.log(min)

//Informar o maior numero:
let max = Math.max(51,77,40,8,98,30,48)
//console.log(max)

//Gera numeros aleatorios entre 0 e 1:
let ran = Math.random()
//console.log(ran)

//Para gerar numeros aleatorios até um determinado valor, basta usar a combinação de funções:
let ale = Math.floor(Math.random() * 100) //Nesse caso sao gerados numeros aleatorios que não ultrapassarao 100, pois a contagem é para baixo - Math.floor
console.log(ale) 
