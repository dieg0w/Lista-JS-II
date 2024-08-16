const anoNascimento = parseInt(prompt("Digite o ano do seu nascimento: "));
const anoAtual = parseInt(prompt("Digite o ano atual: "));

const idadeAnos = anoAtual - anoNascimento;

const idadeMeses = idadeAnos * 12;
const idadeDias = idadeAnos * 365;
const idadeSemanas = idadeDias / 7;

alert(`Você tem ${idadeAnos} anos, ${idadeMeses} meses, ${idadeDias} dias e ${idadeSemanas} semanas.`);