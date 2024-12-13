//Importações
import app from './firebase-config'

let array = [10, 13, 15, 22, 30, 44, 50, 11]
//let string = array.toString()
//console.log(array)


function sair(){
     console.log('saiu do input...')
    }
 let mouse = document.querySelector('.digitar')
 //mouse.addEventListener('mouseleave', sair)


function clicar() {
    let digitado = parseInt(document.querySelector('.digitar').value)
    console.log(digitado)
    

    document.querySelector('.clicar').innerHTML = digitado //retorno na tela 
    
    if(isNaN(digitado)){
        alert('digite um numero válido')
        console.log('digite um numero válido')
        return
    }
    
    let valor = array.find(item => item === digitado)
    
    if(valor != undefined){
        console.log('numero faz parte do array')
        
        if(valor % 2 === 0){
            console.log('numero par')
        } else {
            console.log('número impar')
        }
    } else if (valor != array){ //adicionando numeros fora do array no array.
        console.log('numero fora do array')
        //array.push(digitado)
        array.sort()
        //console.log(array)        
        let outroArray = [...array, digitado]
        console.log(outroArray)
        console.log(array)
    }     
}










    /*    metodo include
    if(array.includes(digitado)) {
        console.log('Numero faz parte do array.')
    
      if (digitado % 2 == 0) {
          console.log(`Numero ${digitado} é par.`) 
      } else {
          console.log(`Numero ${num} é impar.`)  
      } 
    
    } else {
        console.log('Numero fora do array') 
    
    }     
    */





