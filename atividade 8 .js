var popA = 100003;
var popB = 300004;
var ano = 0;

while (popA < popB) {
  ano++;
  popA += 1.03;
  popB += 1.015;
}

console.log(
  `a população A (${Math.round(popA)}) irá passar a população B(${Math.round(
    popA
  )}) em ${ano} anos!`
);

console.log(
  "--------------------------------------------------------------------------"
);

console.log(`__|__|__`);
console.log(`__|__|__`);
console.log(`  |  |  `);

const tabuleiro = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];
let jogadorX = "X";
let jogadorO = "O";

function jogar(jogador) {
  let linha, coluna;
  do {
    linha = Math.floor(Math.random() * 3);
    coluna = Math.floor(Math.random() * 3);
  } while (tabuleiro[linha][coluna] !== " ");

  tabuleiro[linha][coluna] = jogador;
}
jogar(jogadorO);
jogar(jogadorX);
jogar(jogadorO);
jogar(jogadorX);
jogar(jogadorO);
jogar(jogadorX);
jogar(jogadorO);
jogar(jogadorX);
jogar(jogadorX);


