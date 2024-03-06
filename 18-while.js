let contador = 0;

while (contador < 5) {
  console.log(contador);
  contador++;
  console.log(contador);
}
var x = 20;

while (x > 10) {
  console.log(`entrei no laço while...`);
  x--;
}
console.log(`terminei `);

let countdown = 5;

while (countdown > 0) {
  console.log(countdown);
  countdown--;
}
console.log("lançmento!");

//Estourando o limite do cartão - verão do while

var limite = 500;
var fatura = 0;

while (fatura <= limite) {
  let gasto = Math.random() * 100;
  fatura += gasto;
  console.log(`gastei R$ ${gasto.toFixed(2)}Fatura : R$ ${fatura.toFixed(2)}`);
}
fatura > limite && console.log(`estourou o limite de cartão`);

var limite = 500;
var fatura = 0;

do {
  let gasto = Math.random() * 100;
  fatura += gasto;
  console.log(`gastei R$ ${gasto.toFixed(2)}Fatura : R$ ${fatura.toFixed(2)}`);
  fatura > limite && console.log(`estourou o limite de cartão`);
} while (fatura <= limite);

console.log("---------------------------------------------------------------");

var rodada = 1;
var moeda = "";
var escolhajogador = "";
var vitoria = 0;
var derrota = 0;

while (rodada <= 3) {
  moeda = Math.random() >= 0.5 ? "Cara" : "Coroa";
  escolhajogador = Math.random() >= 0.5 ? "Cara" : "Coroa";
  console.log(moeda);

  if (escolhajogador == moeda) {
    console.log(`parabens, você ganhou !`);
    vitoria++;
  } else {
    console.log(`Que pena, você perdeu ! `);
    derrota++;
  }
  rodada++;
}

console.log(`--------------------`);
console.log(`     PLACAR         `);
console.log(`--------------------`);
console.log(
  `${vitoria > derrota ? " 💵 VOCE VENCEU ! 🥳🎉" : "🙁 VOCE PERDEU 💸"}`
);
console.log(`---------------------`);
