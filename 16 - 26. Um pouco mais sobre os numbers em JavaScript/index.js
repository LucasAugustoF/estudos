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


let temp =num1 * 'Ola'; // Multiplicando um número por uma string
console.log(Number.isNaN(temp)); // Verificando se o resultado é NaN (Not a Number)


let num4 = 0.7;
let num5 = 0.1;
num4 += num5; // 0.8
num4 += num5; // 0.9
num4 += num5; // 1.0

num4 = parseFloat(num4.toFixed(2)); // Corrigindo o problema de precisão com toFixed e parseFloat
//num4 = Number(num4.toFixed(2)); // Outra forma de corrigir o problema de precisão com toFixed e Number
console.log(num4); // Exibindo o valor corrigido
console.log(Number.isInteger(num4)); // Verificando se o número é inteiro

