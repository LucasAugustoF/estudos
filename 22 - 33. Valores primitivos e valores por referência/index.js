/*
Primitivos (valores imutáveis)
-string
-number
-boolean
-null
-undefined
-symbol
-bigint

Referência (valores mutáveis)
-Array
-Object
-Function

*/


//          01234    
let nome = 'Lucas'
//nome = 'Augusto' // string é um valor primitivo, então quando alteramos o valor da variável nome, estamos criando um novo valor na memória e não alterando o valor original
//nome[0] = 'L' // não é possível alterar o valor de uma string, pois ela é um valor primitivo e imutável
console.log(nome[0]) // exibe o primeiro caractere da string 'Lucas', que é 'L';

let a = 'A';
let b = a; // b recebe o valor de a, que é 'A'
console.log(a, b);
a = 'Outra coisa' // a recebe um novo valor, que é 'Outra coisa', mas b continua com o valor original de a, que é 'A'
console.log(a, b); // exibe 'Outra coisa' e 'A', pois b não foi alterado

let c = [1, 2, 3]; // c é um array, que é um valor por referência
let d = c;
let e = c; // d recebe a referência do array c, então d e c apontam para o mesmo array na memória
console.log(c, d);
c.push(4); // adiciona o valor 4 ao final do array c, que é um valor por referência, então d também é alterado
console.log(c, d); // exibe [1, 2, 3, 4] e [1, 2, 3, 4], pois c e d são referências para o mesmo array na memória
d.pop(); // remove o último valor do array d, que é um valor por referência, então c também é alterado
console.log(c, d); // exibe [1, 2, 3] e [1, 2, 3], pois c e d são referências para o mesmo array na memória

c.push('Lucas');
console.log(c); // exibe [1, 2, 3, 'Lucas'], pois c é um array que contém os valores 1, 2, 3 e 'Lucas'


// essa const f é um objeto, que é um valor por referência
const f = {
    nome: 'Lucas',
    sobrenome: 'Augusto'
};
const g = {...f}; // g recebe uma cópia do objeto f, então g e f são objetos diferentes na memória

f.nome = 'Jonas'; // altera o valor da propriedade nome do objeto f, que é um valor por referência
console.log(f); // exibe { nome: 'Jonas', sobrenome: 'Augusto' }, pois f é um objeto que contém as propriedades nome e sobrenome
console.log(g); // exibe { nome: 'Lucas', sobrenome: 'Augusto' }, pois g é uma cópia do objeto f e não foi alterado
