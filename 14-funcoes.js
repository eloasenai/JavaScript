function saudacao(nome) {
  console.log("Olá ${nome}, seja bem-vindo");
}
saudacao("eloa");
saudacao("kika");
saudacao("liz");

//criando uma funçao de soma de dois valores, retornando um resultado
function somar(valor1, valor2) {
  return valor1 + valor2;
}

console.log(`5 + 3 = ${somar(5, 3)}`);
console.log(`12 + 8 = ${somar(12, 8)}`);
console.log(`6.5 + 2.12 = ${somar(6.5, 2.12)}`);

var v1 = 9;
var v2 = 6;

console.log(`5 + 3 = ${somar(v1, v2)}`);

//criando uma função que calcula e retorna o desconto em uma venda 
function desconto (valorvenda,desc) {
 return  (valorvenda * desc) / 100
}

var totalpedido = 300
var totaldesconto = desconto (totalpedido,5)

console.log(`----------------------------`)
console.log(`total do pedido : R$${totalpedido}`)
console.log(`total do descontos: R$${totaldesconto}`)
console.log(`valor final da venda: R$${totalpedido-totaldesconto}`)
console.log(`----------------------------`)

//criando uma função que apresente uma pessoa 

function apresentapessoa (nome,idade,cidade){
    console.log(`apresento a vocês: ${nome},que tem ${idade}, e mora em ${cidade} `)
} 
apresentapessoa("eloá", 17, "Jaú")