//laço de repetição FOR
//escrever para usuario 1000x "prestar mais atenção em aula "

//mostrando numeros
for (let i = 1; i <= 1000; i++) {
  console.log(i);
}

console.log("---------------------------------------");
// escreva todos os numeros de 1 a 20 com FOR

for (let i = 1; i <= 20; i++) {
  console.log(i);
}

//escreva todos os numeros pares de 1 a 20 com FOR

for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}
console.log("--------------------------------------------");
// escrevendo todos os numeros impares de 1 a 20 com FOR

for (let i = 1; i <= 20; i += 2) {
  console.log(i);
}

console.log("----------------------------------------");

const numeros = [5, 6, 8, 14, 0, 9, 7, 2];
var somar = 0;

for (let i = 0; i < numeros.length; i++) {
  somar += numeros[1];
}
console.log(`A soma dos sistemas de array é : ${somar}`);

console.log("------------------------------------------------");

//dado um vetor com numeros 5,6,8,14,0,9,7,2,
//multiplique todos os seus elementos por 3 ultilizandoo loop FOR
//em seguida , mostre o novo vetor

let array = [5, 6, 8, 14, 0, 9, 7, 2];

for (let i = 0; i < array.length; i++) {
  array[i] *= 3;
}

console.log(array);

//dado a matriz 2x3 , escrever para o usuario todos os seus elementos
//com as respectivas posiçoes da matriz
//[8,4,1]
//[3,7,8]

var matriz = [
  [8, 4, 1], 
  [3, 7, 8]];

console.table(matriz);

for (let linha = 0; linha < matriz.length; linha++) {
  for (let coluna = 0; coluna < matriz[0].length; coluna++) {
    console.log(`matriz [${linha},${coluna}] = ${matriz[linha][coluna]}`);
  }
}
