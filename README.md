# Projetos Diversos em JavaScript

Este repositório contém diversos códigos JavaScript que implementam soluções para problemas específicos. Abaixo estão descritos os principais códigos presentes.

## Índice

1. [Cálculo de Índice K](#cálculo-de-índice-k)
2. [Inversão de String](#inversão-de-string)
3. [Verificação de Sequência de Fibonacci](#verificação-de-sequência-de-fibonacci)
4. [Cálculo de Faturamento por Estado](#cálculo-de-faturamento-por-estado)
5. [Análise de Faturamento Diário](#análise-de-faturamento-diário)

## Cálculo de Índice K

Este código calcula a soma incremental de um índice K até o valor de 13.

```javascript
let INDICE = 13;
let SOMA = 0;
let K = 0;

if (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}
console.log(SOMA);
```

## Inversão de String

Este código inverte uma string informada pelo usuário.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inverter String</title>
</head>
<body>
    <h1>Inverter String</h1>
    <script>
        function inverterString(str) {
            let strInvertida = '';
            
            for (let i = str.length - 1; i >= 0; i--) {
                strInvertida += str[i];
            }

            return strInvertida;
        }

        const texto = prompt("Informe a string para inverter:");
        const resultado = inverterString(texto);
        alert(`A string invertida é: ${resultado}`);
    </script>
</body>
</html>
```

## Verificação de Sequência de Fibonacci

Este código verifica se um número informado pelo usuário pertence à sequência de Fibonacci.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <script>
        function fibonacciSequenceUntil(number) {
            let a = 0, b = 1;
            const fibonacciSequence = [a, b];

            while (b <= number) {
                const next = a + b;
                fibonacciSequence.push(next);
                a = b;
                b = next;
            }

            return fibonacciSequence;
        }

        function checkFibonacci(number) {
            const fibonacciNumbers = fibonacciSequenceUntil(number);

            if (fibonacciNumbers.includes(number)) {
                return `O número ${number} pertence à sequência de Fibonacci.`;
            } else {
                return `O número ${number} não pertence à sequência de Fibonacci.`;
            }
        }

        const numero = prompt("Informe um número para verificar se pertence à sequência de Fibonacci:");
        const resultado = checkFibonacci(Number(numero));
        alert(resultado);
    </script>
</body>
</html>
```

## Cálculo de Faturamento por Estado

Este código calcula o percentual de faturamento mensal de cada estado com base nos dados fornecidos.

```javascript
const faturamentoPorEstado = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
};

function calcularTotalFaturamento(faturamentoPorEstado) {
  return Object.values(faturamentoPorEstado).reduce((total, valor) => total + valor, 0);
}

function calcularPercentuais(faturamentoPorEstado) {
  const totalFaturamento = calcularTotalFaturamento(faturamentoPorEstado);
  const percentuais = {};

  for (const estado in faturamentoPorEstado) {
    const valorEstado = faturamentoPorEstado[estado];
    percentuais[estado] = ((valorEstado / totalFaturamento) * 100).toFixed(2);
  }

  return percentuais;
}

const percentuais = calcularPercentuais(faturamentoPorEstado);

console.log('Percentual de faturamento por estado:');
for (const estado in percentuais) {
  console.log(`${estado}: ${percentuais[estado]}%`);
}
```

## Análise de Faturamento Diário

Este código analisa o faturamento diário, identificando o menor, maior faturamento e a média, além de quantos dias tiveram faturamento acima da média.

```javascript
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

function menorFaturamento(faturamentoMensal) {
  const diasComFaturamento = faturamentoMensal.filter(dia => dia.faturamento > 0);
  return Math.min(...diasComFaturamento.map(dia => dia.faturamento));
}

function maiorFaturamento(faturamentoMensal) {
  const diasComFaturamento = faturamentoMensal.filter(dia => dia.faturamento > 0);
  return Math.max(...diasComFaturamento.map(dia => dia.faturamento));
}

function mediaFaturamento(faturamentoMensal) {
  const diasComFaturamento = faturamentoMensal.filter(dia => dia.faturamento > 0);
  const totalFaturamento = diasComFaturamento.reduce((acc, dia) => acc + dia.faturamento, 0);
  return totalFaturamento / diasComFaturamento.length;
}

function diasAcimaDaMedia(faturamentoMensal) {
  const media = mediaFaturamento(faturamentoMensal);
  return faturamentoMensal.filter(dia => dia.faturamento > media).length;
}

const menor = menorFaturamento(faturamentoMensal);
const maior = maiorFaturamento(faturamentoMensal);
const media = mediaFaturamento(faturamentoMensal);
const diasAcimaMedia = diasAcimaDaMedia(faturamentoMensal);

console.log(`Menor valor de faturamento: R$ ${menor}`);
console.log(`Maior valor de faturamento: R$ ${maior}`);
console.log(`Média mensal de faturamento: R$ ${media.toFixed(2)}`);
console.log(`Número de dias com faturamento superior à média: ${diasAcimaMedia}`);
```

