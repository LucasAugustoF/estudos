/*
Operadores de comparação

> maior que
>= maior ou igual que
< menor que
<= menor ou igual que
== igualdade (só checa valor)
=== igualdade estrita (checa valor e tipo)
!= diferente (checa valor)
!== diferente estrito (checa valor e tipo)
*/

const maiorQue = 10 > 5;
console.log(maiorQue);
//resultado TRUE

const maiorOuIgualQue = 10 >= 10;
console.log(maiorOuIgualQue);
//resultado TRUE

const menorQue = 10 < 5;
console.log(menorQue);
//resultado FALSE

const menorOuIgualQue = 10 <= 10;
console.log(menorOuIgualQue);
//resultado TRUE

const num1 = 10;
const num2 = '10';
const igualdade = num1 == num2;
console.log(igualdade);
//resultado TRUE porque o operador == só checa o valor, não o tipo

const num3 = 11;
const num4 = '10';
const igualdade2 = num3 == '10';
console.log(igualdade2);
//resultado FALSE porque o operador == só checa o valor, não o tipo

const num5 = 10;
const num6 = '10';
const igualdadeEstrita = num5 === num6;
console.log(igualdadeEstrita);
//resultado FALSE porque o operador === checa o valor e o tipo
