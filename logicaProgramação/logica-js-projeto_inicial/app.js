//alert('Hello, world!');;
alert('Boas vindas ao jogo do número secreto!')

let limite = 100;
let numSecreto = parseInt(Math.random() * limite + 1);

let chute;
let cont = 0;

while(chute != numSecreto){
  chute = prompt('Escolha um número entre 1 e '+limite);
  //console.log('Valor do chute:', chute);
  cont++;
  if(numSecreto == chute){
    //console.log(numSecreto);
    break;
  } else if(numSecreto > chute){
    alert(`O número secreto é maior que ${chute}`);
  } else {
    alert(`O número secreto é menor que ${chute}`);
  }
}

let palavra = cont > 1 ? 'tentativas' : 'tentativa' //operador ternário

alert(`Parabéns! Você descobriu o número secreto ${numSecreto} em ${cont} ${palavra}`);

// alert('Boas vindas ao site');
// // let nome = 'Lua';
// // let idade = 25;
// let nome = prompt('Digite seu nome');
// let idade = prompt('Digite sua idade: ')
// let numeroVendas = 50;
// let saldoDisponivel = 1000;
// let mensagemErro = 'preencha todos os campos';
// //alert(mensagemErro);
// if(idade >= 18){
//   alert('Usuário maior de idade')
// } else {
//   alert('usuário menor de idade')
// }
