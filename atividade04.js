//crie uma matriz 3x3
var matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9 ],
];
console.table(matriz);

//exibir ao usuario valores das diagonais (4)
console.log(matriz[0][0], matriz[1][1], matriz[2][2]);
console.log(matriz[0][0], matriz[1][1], matriz[2][0]);
console.log(matriz[0][0], matriz[1][1], matriz[0][2]);
console.log(matriz[0][0], matriz[1][1], matriz[0][0]);

var usuario = ["eloa", 17, "vinho", "jabuticaba", "cilas", "kiara"];

console.log("olá", usuario[0], "seja bem vinda");
console.log("voce mora no endereço",usuario[4],"e tem um pet chamado",usuario[5]);
console.log("sua idade é",usuario[1],"e voce gosta muito da fruta",usuario[3]);
console.log("sua cor favorita é", usuario[2]);
