const player1 = {
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIADDE: 3,
    PODER: 3,
    PONTOS: 0
};

const player2 = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIADDE: 4,
    PODER: 4,
    PONTOS: 0
};

async function rollDice(){
    return Math.floor(Math.random() * 6) + 1;
}

(async function main() {
    console.log("hello");
})()