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


const usuario = 'Luiz'; // form usuário digitou 
const senha = '123456'; // form usuário digitou

//                          True                  False
const vaiLogar = usuario === 'Luiz' && senha === '12345';
console.log(vaiLogar);
//resultado FALSE porque a senha está incorreta, então a expressão completa é falsa 