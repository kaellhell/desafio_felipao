const readline = require('readline');
const text = "O Herói de nome "
const text1 = " está no nível de "

// desafio_felipao/index.js
// Este código solicita o nome do usuário e seu nível de experiência,
// e então determina o rank correspondente com base no nível fornecido.
// Utiliza a biblioteca readline para ler entradas do usuário no terminal.

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("Qual é o seu nome? ", function(name) {
    rl.question("qual é o seu nivel de experiencia: ", function(nivel) { 
        let level = parseInt(nivel); // Converter de string para número
        
        if(level <= 1000) {
            console.log(text + name + text1 + " Ferro");
        } else if (level > 1001 && level <= 2000) {
            console.log(text + name + text1 + " Bronze");
        }else if(level > 2001 && level <= 3000) {
            console.log(text + name + text1 + "prata");
        }else if(level > 3001 && level <= 4000) {
            console.log(text + name + text1 + "Ouro");
        }else if(level > 4001 && level <= 5000) {
            console.log(text + name +text1 + "Platina");
        }else if(level > 5001 && level <= 6000) {
            console.log(text + name + text1 + "Ascendente");
        }else if(level > 6001 && level <= 7000) {
            console.log(text + name + text1 + "Imortal");
        }else if(level > 7001 && level <= 8000) {
            console.log(text + name + text1 + "Radiante");   
        } else {
            console.log("Nível inválido. Por favor, insira um número entre 0 e 8000.")
        }
        
     
  // Encerrar a interface após a resposta
  rl.close();
});
});

