const pessoas = 45;
const totalChopp = 300;

const choppDesperdicado = parseFloat(prompt("Digite a quantidade de chopp desperdiçado em litros: "));
const choppSobrado = parseFloat(prompt("Digite a quantidade de chopp sobrado em litros: "));

const choppConsumido = totalChopp - choppDesperdicado - choppSobrado;

const mediaChopp = choppConsumido / pessoas;

alert(`A média de chopp bebido por pessoa é: ${mediaChopp.toFixed(2)} litros`);