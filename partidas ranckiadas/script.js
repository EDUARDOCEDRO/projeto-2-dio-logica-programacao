const readline = require('readline');

// Configuração do readline para capturar entradas do usuário no console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função que calcula o saldo de vitórias e retorna o nível baseado nas vitórias
function calcularNivel(vitorias) {
    if (vitorias < 10) {
        return "Ferro";
    } else if (vitorias <= 20) {
        return "Bronze";
    } else if (vitorias <= 50) {
        return "Prata";
    } else if (vitorias <= 80) {
        return "Ouro";
    } else if (vitorias <= 90) {
        return "Diamante";
    } else if (vitorias <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}

// Função principal que faz a leitura e calcula o saldo
function main() {
    rl.question("Digite o número de vitórias: ", (vitorias) => {
        rl.question("Digite o número de derrotas: ", (derrotas) => {
            // Cálculo do saldo de vitórias
            let saldoVitorias = parseInt(vitorias) - parseInt(derrotas);

            // Determina o nível do jogador
            let nivel = calcularNivel(parseInt(vitorias));

            // Saída
            console.log(`O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}.`);

            rl.question("Deseja continuar? (S/N): ", (resposta) => {
                if (resposta.toLowerCase() === 's') {
                    main();  // Chama a função novamente para outro jogador
                } else {
                    rl.close();  // Encerra o programa
                }
            });
        });
    });
}

// Executa o programa
main();
