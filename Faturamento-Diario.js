// Dados do faturamento diário em formato JSON
const faturamentoMensal = [
  { dia: 1, faturamento: 200 },
  { dia: 2, faturamento: 0 },
  { dia: 3, faturamento: 300 },
  { dia: 4, faturamento: 250 },
  { dia: 5, faturamento: 0 },
  { dia: 6, faturamento: 400 },
  { dia: 7, faturamento: 500 },
  { dia: 8, faturamento: 0 },
  { dia: 9, faturamento: 600 },
  { dia: 10, faturamento: 0 },
  // Adicione mais dados conforme necessário
];

// Função para calcular o menor valor de faturamento
function menorFaturamento(faturamentoMensal) {
  const diasComFaturamento = faturamentoMensal.filter(dia => dia.faturamento > 0);
  return Math.min(...diasComFaturamento.map(dia => dia.faturamento));
}

// Função para calcular o maior valor de faturamento
function maiorFaturamento(faturamentoMensal) {
  const diasComFaturamento = faturamentoMensal.filter(dia => dia.faturamento > 0);
  return Math.max(...diasComFaturamento.map(dia => dia.faturamento));
}

// Função para calcular a média mensal, ignorando os dias sem faturamento
function mediaFaturamento(faturamentoMensal) {
  const diasComFaturamento = faturamentoMensal.filter(dia => dia.faturamento > 0);
  const totalFaturamento = diasComFaturamento.reduce((acc, dia) => acc + dia.faturamento, 0);
  return totalFaturamento / diasComFaturamento.length;
}

// Função para calcular o número de dias em que o faturamento foi superior à média mensal
function diasAcimaDaMedia(faturamentoMensal) {
  const media = mediaFaturamento(faturamentoMensal);
  return faturamentoMensal.filter(dia => dia.faturamento > media).length;
}

// Cálculos
const menor = menorFaturamento(faturamentoMensal);
const maior = maiorFaturamento(faturamentoMensal);
const media = mediaFaturamento(faturamentoMensal);
const diasAcimaMedia = diasAcimaDaMedia(faturamentoMensal);

// Resultados
console.log(`Menor valor de faturamento: R$ ${menor}`);
console.log(`Maior valor de faturamento: R$ ${maior}`);
console.log(`Média mensal de faturamento: R$ ${media.toFixed(2)}`);
console.log(`Número de dias com faturamento superior à média: ${diasAcimaMedia}`);