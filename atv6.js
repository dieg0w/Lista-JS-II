const plastico = parseFloat(prompt("Digite a quantidade de plástico em kg: "));
const papel = parseFloat(prompt("Digite a quantidade de papel em kg: "));
const metal = parseFloat(prompt("Digite a quantidade de metal em kg: "));

const valorPlastico = plastico / 10 * 2;
const valorPapel = papel / 30 * 3;
const valorMetal = metal / 50 * 5;

const total = valorPlastico + valorPapel + valorMetal;

alert(`Você receberá R$ ${total.toFixed(2)}`);