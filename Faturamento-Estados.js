// Faturamento mensal detalhado por estado
const faturamentoPorEstado = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
};

// Função para calcular o total de faturamento
function calcularTotalFaturamento(faturamentoPorEstado) {
  return Object.values(faturamentoPorEstado).reduce((total, valor) => total + valor, 0);
}

// Função para calcular o percentual de cada estado
function calcularPercentuais(faturamentoPorEstado) {
  const totalFaturamento = calcularTotalFaturamento(faturamentoPorEstado);
  const percentuais = {};

  for (const estado in faturamentoPorEstado) {
    const valorEstado = faturamentoPorEstado[estado];
    percentuais[estado] = ((valorEstado / totalFaturamento) * 100).toFixed(2); // Arredondar para 2 casas decimais
  }

  return percentuais;
}

// Cálculo dos percentuais
const percentuais = calcularPercentuais(faturamentoPorEstado);

// Exibir os resultados
console.log('Percentual de faturamento por estado:');
for (const estado in percentuais) {
  console.log(`${estado}: ${percentuais[estado]}%`);
}
