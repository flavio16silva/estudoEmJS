//Sincrono e Assincrono

/*
Síncrono
Executa as instruções uma após a outra, na ordem em que aparecem.
Cada linha de código espera a anterior ser concluída antes de iniciar.
É ideal para operações rápidas e simples, mas pode ser ineficiente para tarefas demoradas, 
pois o código "pausa" até que a tarefa atual termine.
*/
let nome = 'flavio'
let sobrenome = 'silva' //essa linha irá aguardar a anterior para ser executada. 
let completo = nome+ ' '+sobrenome //essa linha irá aguardar as anteriores para ser executada. 

console.log("Início");
// Executa imediatamente
console.log("Processando...");
// Executa após a linha anterior
console.log("Fim - sincrono");


/*
Assíncrono
Permite que o código continue sendo executado enquanto aguarda a conclusão de operações demoradas.
Usa técnicas como setTimeout, Promises, async/await, ou callbacks.
Evita o bloqueio da execução principal (thread), tornando-o ideal para tarefas como 
requisições de rede ou leitura de arquivos.
*/

let n = 'flavio' //essa linha será executada.
let sobre = 'silva' //essa linha será executada. 
//let tempo = temperatura.pegarTemperatura() //Assincrono - essa linha será executada.
let comp = n+ ' '+sobre //essa linha será executada.

console.log("Início");

// Exemplo com setTimeout (assíncrono)
setTimeout(() => {
  console.log("Processamento concluído após 2 segundos");
}, 2000);

console.log("Fim - assincrono");
// Esta linha executa imediatamente após "Início", sem esperar o setTimeout.

