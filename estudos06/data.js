//Data
//Retorna a data completa - Tue Oct 15 2024 10:23:54 GMT-0300 (Horário Padrão de Brasília)
let d = new Date() //Retorna a data congelada daquele momento, pois não atualiza. 
//console.log(d)

//Resumindo a data:
//console.log(d.toDateString()) //Tue Oct 15 2024

//Para retornar o horario oficial sem o fuso:
//console.log(d.toUTCString()) //Tue, 15 Oct 2024 13:28:40 GMT

//Gerando uma data com parametros de data
let a = new Date(2025, 1, 10, 10, 55, 12)
//console.log(a.toString()) //retorna o mesmo valor sem uso do toString()

//Gerando uma data com outro formato de parametros
let b = new Date('2025-01-10 10:55:12')
//console.log(b.toString())

//Inicio da contagem das datas 1969 e depois 1970. Se colocar negatio retorna a 1969
let c = new Date(13452567)
//console.log(c.toUTCString())

//----------- Manipulação de Data
//Pegando o ano atual
let z = new Date()
let w = z.getFullYear()
//console.log(w)

//Pegando o mes atual - No JS o mes começa a contar do zero
let q = new Date()
let ss = q.getMonth()
//console.log(ss)

//Pegando o dia - No JS o dia começa no domingo e com contagem iniciando do zero
let zz = new Date()
let ff = zz.getDay()
//console.log(ff)

//Pegando o dia atual - nesse cado a data atual
let g = new Date()
let f = g.getDate()
//console.log(f)

//Pegando as horas
let hora = new Date()
let h = hora.getHours()
//console.log(h)

//Pegando os Minutos
let min = new Date()
let m = min.getMinutes()
//console.log(m)

//Pegando os segundos
let seg = new Date()
let s = seg.getSeconds()
//console.log(s)

//Pegando os Milisegundos
let milis = new Date()
let mi = milis.getMilliseconds()
//console.log(mi)

//Pegando o total de milisegundos entre o final de 1969 e inicio de 1970. Conhecido como Time stamp
let y = new Date()
let bb = y.getTime()
//console.log(bb)

//Outra forma de pegar a data atual em milisegundos, ou seja, pelo timestamp
let x = Date.now()
//console.log(x)

// Executando alterações na Data - Ano
let n = new Date()
n.setFullYear(2000)
let nn = n
//console.log(nn)

// Executando alterações na Data - Mes
let mes = new Date()
mes.setMonth(4)
let mm = mes
//console.log(mm)

// Executando alterações na Data - Dia
let dia = new Date()
dia.setDate(10)
let dd = dia
//console.log(dd)

// Executando alterações na Data acrescentando o numero de dias
//Obs.: Esse mesmo processo pode ser feita para horas, minutos
let dias = new Date()
dias.setDate(dias.getDate() + 5)
let date = dias
console.log(date)