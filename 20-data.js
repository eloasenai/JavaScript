//Criando objeto "tipo" data
var data1 = new Date();
console.log(data1);


//Criando um objeto do tipo "data" com date especifica Date []
var data2 = new Date("2005=06-12");
console.log(data2);


//Extraindo partes de uma data
var data3 = new Date("2007=04-09");
console.log(`Data: ${data3}`);
console.log(`Ano: ${data3.getFullYear()}`);
console.log(`Mês: ${data3.getMonth() + 1}`);
console.log(`Dia: ${data3.getDate()}`);


const mes = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];
console.log(`Retornando o Mês por escrito!`);
console.log(`Mês: ${mes[data3.getMonth()]}`);


const diaDaSemana = [
  "domingo",
  "segunda",
  "terça",
  "quarta",
  "quinta",
  "sexta",
  "sabado",
];
console.log(`Dia da semana: ${diaDaSemana[data3.getDay()]}`);




console.log("----------------------------------")


const dataNasc = new Date("2007=04-09");
const dataAtual = new Date();


const diferenca = dataAtual.getTime() - dataNasc.getTime();
// console.log(`diferenca: ${diferenca}`);


const idade = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25));
console.log(`idade: ${idade}`);


const diferencaAnos = dataAtual.getFullYear() - dataNasc.getFullYear();
console.log(`Diferença em anos: ${diferencaAnos}`);


console.log("----------------------------------")


if(dataAtual.getMonth() < dataNasc.getMonth() || 


  (dataAtual.getMonth() === dataNasc.getMonth() && 


  dataAtual.getDate() < dataNasc.getDate())){


    console.log(`Ainda não fez aniversário!`);


    console.log(`Idade: ${diferencaAnos - 1}`);


  }

console.log("---------------------------------------");

//Comparação de strings (sem case sensitive):
//Escreva uma função em JavaScript que recebe duas strings e verifica se elas são iguais, ignorando o tamanho das letras (maiúsculas e minúsculas).

//Extrair números de uma string:
//Crie uma função em JavaScript que recebe uma string e retorna uma lista contendo apenas os números encontrados nela.

//Inverter a ordem das palavras em uma frase:
//Desenvolva uma função em JavaScript que recebe uma frase e retorna uma nova string com a ordem das palavras invertida.

function compararStrings(str1, str2) {
    // converter ambas as strings para minusculas
    const str1Minusculas = str1.toLowerCase();
    const str2Minusculas = str2.toLowerCase();
    // compara as strings minusculas
    return str1Minusculas === str2Minusculas;
  }
  
  var resultado = compararStrings("oi", "OLÁ");
  console.log(resultado); // true
  
  console.log("-----------------------------------");
  
  function extrairNumeros(str) {
    const regex = /\d+/g;
    return str.match(regex);
  }
  
  const string = "O 12 1 2587 preço do produto é R$ 12,99.";
  const numeros = extrairNumeros(string);
  console.log(numeros); //["12", "99"]
  
  console.log("-------------------------------------");
  function inverterFrase(frase) {
    const palavras = frase.split(" ");
    return palavras.reverse().join(" ");
  }
  const frase = " este é um exemplo de frase invertida";
  const fraseInvertida = inverterFrase(frase);
  console.log(fraseInvertida); //"invertida frase de exemplo um é Este"
  
  
