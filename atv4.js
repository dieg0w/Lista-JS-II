const totalEleitores = parseInt(prompt("Digite o número total de eleitores: "));
const votosX = parseInt(prompt("Digite o número de votos do candidato X: "));
const votosY = parseInt(prompt("Digite o número de votos do candidato Y: "));
const votosBrancos = parseInt(prompt("Digite o número de votos brancos: "));
const votosNulos = parseInt(prompt("Digite o número de votos nulos: "));

const totalVotos = votosX + votosY + votosBrancos + votosNulos;

if (totalVotos !== totalEleitores) {
  alert("Erro: O total de votos não é igual ao total de eleitores.");
} else {
  const percentualX = (votosX / totalEleitores) * 100;
  const percentualY = (votosY / totalEleitores) * 100;
  const percentualBrancos = (votosBrancos / totalEleitores) * 100;
  const percentualNulos = (votosNulos / totalEleitores) * 100;

  alert(`Percentual de votos do candidato X: ${percentualX.toFixed(2)}%`);
  alert(`Percentual de votos do candidato Y: ${percentualY.toFixed(2)}%`);
  alert(`Percentual de votos brancos: ${percentualBrancos.toFixed(2)}%`);
  alert(`Percentual de votos nulos: ${percentualNulos.toFixed(2)}%`);
}