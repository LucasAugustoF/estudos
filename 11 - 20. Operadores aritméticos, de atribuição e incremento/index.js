/*
Aritméticos
+ Adição / concatenação
- / * e ** Subtração, multiplicação e potenciação
/ Divisão
% Resto da divisão
*/

const num1 = 5;
const num2 = 10;

console.log(num1 + num2);
//Dessa forma irá somar os dois números, resultando em 15

//CONCATENAÇÃO
const num3 = '5';
console.log(num3 + num2);
//Dessa forma irá concatenar os dois valores, resultando em 510

//POTENCIALIZAÇÃO
console.log(num1 ** num2);
//Dessa forma irá elevar o num1 a potência do num2, resultando em 9765625

//RESTO DA DIVISÃO
console.log(num2 % num1);
//Dessa forma irá retornar o resto da divisão do num2 pelo num1, resultando em 0


//Ordem de precedência
//1º () - Parênteses
//2º ** - Potenciação
//3º * / % - Multiplicação, divisão e resto da divisão
//4º + - - Adição e subtração
console.log((num1 + num2) * num3);
//Dessa forma irá somar os dois números, resultando em 15 e depois multiplicar pelo num3, resultando em 75


let contador = 1;
//Incremento
contador++;
console.log(contador);
//Dessa forma irá incrementar o valor da variável contador em 1, resultando em 2


const passo = 2;
let contador2 = 2;
contador2 *= passo; //contador = contador * passo
console.log(contador2);

/*
Incremento **
Decremento --
*/
let contador3 = 2;
contador3 **= 10;
console.log(contador3);
//Dessa forma irá elevar o valor da variável contador3 a potência de 10, resultando em 1024


// NaN - Not a Number
// parseInt() - Converte uma string em número inteiro
// parseFloat() - Converte uma string em número decimal
// Number() - Converte uma string em número, seja inteiro ou decimal
const num4 = 10;
const num5 = parseInt('5');
console.log(num4 + num5);
console.log(typeof num5);
//Dessa forma irá somar os dois números, resultando em 15 e o typeof irá retornar number

