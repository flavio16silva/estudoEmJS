//Number

// tostring() - transforma um numero em string
let a = 10
let b = a.toString() 
let c = b + 5
//console.log(c)

/*
toFixed() - metodo usado para converter um numero aleatorio em formato decimal. 
Quantos decimais após o ponto.
*/ 
let z = 23.54394
let w = z.toFixed(3)
//console.log(w)

/*
parseInt() - transforma uma string em um numero
*/
let num = '10'
let p = num + 5 //string
let t = parseInt(num) + 5 //number
//console.log(p)
//console.log(t)

/*
parseFloat() - preserva os numeros decimais do numero caso exista. 
*/
let n = '10.8'
let l = parseFloat(n) + 5
console.log(l)

