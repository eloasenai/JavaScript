//criando array

var frutas = ["banana", "maçã", "pera", "uva", "morango"];
frutas.push("tangerina");
frutas.unshift("goiaba");
console.table(frutas);
console.log(frutas[5]);
//frutas.splice(4,1)
console.table(frutas);

var proc = frutas.indexOf("uva");
console.log(frutas[proc]);
console.log("vetor copia 2");
var copia2 = frutas.splice(1, 3);
console.table(copia2);

console.log("----------------------------");
// atividade2

var numeros = [ 1, 2, 3, 4, 5]
console.table (numeros);
console.log("o terceiro elemento da tabela é o numero", numeros [2]);
numeros.splice (1, 2, 3, 4, 5);

//copia do vetor 
var copianumeros = numeros.slice()

copianumeros[0]= numeros [0]+ 2;
copianumeros[1]= numeros [1]+ 2;
copianumeros[2]= numeros [2]+ 2;
copianumeros[3]= numeros [3]+ 2;
copianumeros[4]= numeros [4]+ 2;
console.table(copianumero) 



