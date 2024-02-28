// função retorno de idade
function idade(anonascimento) {
  return 2024 - anonascimento;
}
var nome = "eloá";
console.log(`Olá , eu sou ${nome} e tenho ${idade(2007)} anos de idade`);

function mediaCombustivel(combustivel,kml) {
  return combustivel + kml
}

console.log( `Carro 1: 20L -> percorre ${mediaCombustivel(20,12)}kms.`);
console.log( `Carro 2: 8L -> percorre ${mediaCombustivel(8,12)}kms.`);
console.log( `Carro 3: 2L -> percorre ${mediaCombustivel(2,12)}kms.`);


