let situacao = "abc";
let message = null;

switch (situacao) {
  case "aprovado":
    message = "Parabéns, você está aprovado!";
    break;
  case "lista":
    message = "Você foi movido para a lista de espera por vagas!";
    break;
  case "reprovado":
    message = "Infelizmente você foi reprovado!";
    break;
  default:
    message = "ainda não temos sua situação";
}
console.log(message);
