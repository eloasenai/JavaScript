// class pessoa {
//   constructor(pNome, pIdade) {
//     this.nome = pNome;
//     this.idade = pIdade;
//   }
//   apresentarSe() {
//     console.log(`olá, meu nome é ${this.nome} e eu tenho ${this.idade}anos`);
//   }
//   envelhecer() {
//     this.idade++;
//   }
// }

// //criando objetos do "tipo" pessoa
// var pessoa1 = new pessoa("dienifer", 52);
// var p2 = new pessoa("Taldo Pedrin", 18);

// pessoa1.apresentarSe();
// p2.apresentarSe();

// pessoa1.envelhecer();
// pessoa1.apresentarSe();

// p2.envelhecer();
// p2.apresentarSe();

// console.log("-------------------------------------------------");
// //abstrair caracteristicas mais importantes e descartando detalhes irrelevantes
// console.log("------------------abstração----------------------")
// class Pet {
//   constructor(nome, idade, tipo) {
//     this.nome = nome;
//     this.idade = idade;
//     this.tipo = tipo;
//   }
//   alimentar() {
//     console.log(`${this.nome} foi alimentado!`);
//   }
// }
// const meuPet = new Pet("Rex", 2, "Cachorro");
// console.log(
//   `Meu pet é um ${meuPet.tipo},chamado${(meuPet.nome)} e tem ${
//     meuPet.idade
//   } anos!`
// );

// meuPet.alimentar();

// console.log("------------------herança---------------")
// class Animal {
//     constructor(nome, idade, tipoAlimentacao) {
//       this.nome = nome;
//       this.idade = idade;
//       this.tipoAlimentacao = tipoAlimentacao;
//     }

//     alimentar() {
//       console.log(`O animal ${this.nome} foi alimentado!`);
//     }

//     emitirSom() {
//       console.log(`Barulho padrão de animal!`);
//     }
//   }

//   class Cachorro extends Animal {
//     alimentar() {
//       console.log(`O cachorro ${this.nome} foi alimentado`);
//     }

//     emitirSom() {
//       console.log(`🐶 Au au! 🐶`);
//     }
//   }
//   const pet = new Animal("Carlos", 10, "Comida espacial");
//   const meuCachorro = new Cachorro("Rex", 3, "Ração");

//   pet.alimentar();
//   pet.emitirSom();
//   console.log("");
//   meuCachorro.alimentar();
//   meuCachorro.emitirSom();

//   console.log("------------------encapsulamento-------------------")
//   class Petzinho {
//     constructor (nome, idade, tipo) {
//         this.nome = nome;
//         this.idade = idade;
//         this.tipo = tipo;
//       }

//       getNome() {
//         return this.nome;
//       }

//      setNome(novoNome) {
//         this.nome = novoNome;
//      }

//      const novoPetzinho = new Petzinho("Bob", 3, "cachorro");
//      console.log(first)(novoPetzinho.getNome()); //"Bob"
//      novoPetzinho.setNome("Rex");
//      console.log(novoPetzinho,getNome()); //"Rex"

//     }

console.log("----------------poliformismo----------------");
class Animal {
  constructor(nome) {}

  fazerBarulho() {
    console.log("O animal faz um barulho genérico.");
  }
}

class Cachorro extends Animal {
  constructor(nome) {
    super(nome);
  }

  fazerBarulho() {
    console.log("O cachorro late!");
  }
}

class Gato extends Animal {
  constructor(nome) {
    super(nome);
  }

  fazerBarulho() {
    console.log("O gato mia!");
  }
}

// Exemplo de uso
const animais = [
  new Cachorro("Rex"),
  new Gato("Mia"),
  new Animal("Bob"), // Animal genérico
];

for (const animal of animais) {
  animal.fazerBarulho();
}

console.log("-----------------Exemplo------------------");
//criando uma classe Retangulo
class Retangulo {
  constructor(comprimento, largura) {
    this.comprimento = comprimento;
    this.largura = largura;
  }

  obterArea() {
    return this.comprimento * this.largura;
  }

  obterPerimetro() {
    return this.comprimento * 2 + this.largura * 2;
  }
  setComprimento(novocomprimento) {
    this.comprimento = novocomprimento;
  }
  setLargura(novaLargura) {
    this.largura = novaLargura;
  }
}

//criando um objeto do "tipo" retangulo
var ret1 = new Retangulo(10, 15);
function displayRet(retangulo) {
  console.table(retangulo);
  console.log(`comprimento = ${retangulo.comprimento}`);
  console.log(`largura = ${retangulo.largura}`);
  console.log(`area = ${retangulo.obterArea()}`);
  console.log(`perimetro = ${retangulo.obterPerimetro()}`);
}
displayRet(ret1);
ret1.setComprimento(20);
displayRet(ret1);
ret1.setLargura(20);
displayRet(ret1);
