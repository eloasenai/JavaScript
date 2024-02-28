console.log("---------------------------------");
var anonascimento = 2004;

if (anonascimento > 2003) console.log(`A pessoa nasceu depois de 2003!`);

if (anonascimento < 2003) console.log(`A pessoa nesceu antes de 2003!`);

if (anonascimento == 2003) console.log(`A pessoa nasceu em 2003!`);

//condicional composto com if
const login = "admin"; //digitado pelo usuario
var senha = "123456"; //digitado pelo usuario

//-------------------------------------------------
const loginUser = "Admin"; //banco de dados
const senhaUser = "Admin"; //banco de dados
//--------------------------------------------------

if (login == loginUser && senha == senhaUser)
  // && significa E -- || significa OU
  console.log(`Acesso permitido!`);
else console.log(`acesso negado!`);

console.log("---------------------------------------------");

//função sinaleiro
function sinaleiro(cor) {
  if (cor == "vermelho") console.log(`pare`);
  else if (cor == "amarelo") console.log("preste atenção");
  else if (cor == "verde") console.log("siga");
  else
    console.log(
      "você informou cores diferentes de verde , amarelo ou vermelho"
    );
}
sinaleiro("vermelho");

//desvio condicional if com bloco de comando
console.log("---------------------------------------------");
var idade = 18;

if (idade <= 18) {
  console.log("entrou no if...");
  idade++, console.log("incrementei a idade ...");
  console.log(`A nova idade e ${idade}`);
  console.log(`Agora estou saindo do bloco de codigos if`);
}
console.log(`Terminei!`);

//desvie condicional if inline (ternario)
//validação (algo == algo) ou (algo > algumacoisa)
//?(IF)
//se for verdadeiro
//: (ELSE)
//se for falso
//testeDeValidação == teste ? "bla bla" : ("ble ble")
var preco = 100;

var resultado = preco <= 100 ? "ta barato " : "vish ta caro";

console.log(resultado);
