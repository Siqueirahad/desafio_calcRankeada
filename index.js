// Declaração das variáveis
let nomedoheroi = "Had"; // Nome do herói
let experiencia = 2980; // Experiência do herói

// Declaração da variável para armazenar o nível do herói
let nivel;"Prata"

// Estrutura de decisão para verificar o nível do herói com base na experiência
if (experiencia < 1000) {
    nivel = "Ferro";
} else if (experiencia <= 2000) {
    nivel = "Bronze";
} else if (experiencia <= 5000) {
    nivel = "Prata";
} else if (experiencia <= 7000) {
    nivel = "Ouro";
} else if (experiencia <= 8000) {
    nivel = "Platina";
} else if (experiencia <= 9000) {
    nivel = "Ascendente";
} else if (experiencia <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Exibe a mensagem final com o nome e o nível do herói
console.log('O Herói de nome ' + nomedoheroi +' está no nível de '+ nivel + '.');