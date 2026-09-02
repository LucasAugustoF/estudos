let num1 =10;
let num2 =2.5;
let num3 = 10.571283823;
let numBinaria = 1500;

console.log(num1 + num2);
console.log(num1.toString() + num2); // Concatenação transformando num1 em string resultando em "12.5"
console.log(typeof num1); // Continua sendo um number
console.log(numBinaria.toString(2)); // Transformando o número em binário
console.log(num3.toFixed(2)); // Limitando o número de casas decimais para 2 

console.log(Number.isInteger(num1)); // Verificando se o número é inteiro

