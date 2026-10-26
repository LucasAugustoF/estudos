/*
Operadores Lógicos
&& -> AND -> E
|| - OR -> OU
! -> NOT -> NÃO
*/

const expressaoAnd = true && true && false;
console.log(expressaoAnd);
//resultado FALSE porque uma das expressões é falsa

const expressaoOr = true || false || false;
console.log(expressaoOr);
//resultado TRUE porque uma das expressões é verdadeira

const expressaoNot = !true;
console.log(expressaoNot);
//resultado FALSE porque a expressão é verdadeira e o operador ! inverte o valor    
