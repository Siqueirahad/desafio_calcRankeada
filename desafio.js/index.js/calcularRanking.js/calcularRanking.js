function calcularRanking (vitorias, derrotas) {
    // Calcular o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    // Estruturas de decisão para determinar o nível
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    // Concatenando a mensagem no console.log
    console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel);
}

// Testando a função com diferentes valores
calcularRanking(15, 5);  // Exemplo de vitórias e derrotas
calcularRanking(30, 10); // Outro exemplo de vitórias e derrotas
calcularRanking(80, 40); // Outro exemplo
calcularRanking(120, 30); // Exemplo de vitórias muito altas