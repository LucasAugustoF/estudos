/*let a = 'A';
let b = 'B';
let c = 'C';

//atribuição via desestruturação em um array
const numeros = [1, 2, 3]
[a, b, c] = numeros;

console.log(a,b,c);*/

//50. Atribuição via desestruturação (Arrays)

/*
//                0    1    2    3    4    5    6    7    8
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const [um, ,tres, ,cinco, ,sete] = numeros;
//const [um, ,tres, ,cinco, ,sete] = numeros; Pulando os ietns do array com espações em branco
//const [um, dois, tres, ...resto] = numeros;
//...rest, ...spread (pega o resto dos itens do array)
//console.log(resto); 
console.log(um, tres, cinco);*/


//                   0          1        2
//                0  1  2   0  1  2   0  1  2 
const numeros = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];
console.log(numeros[1][2]);

//const [,[,,seis]] = numeros; Forma mais complexa de fazer
//console.log(seis);

//Atribuição via desestruturação por Arrays
const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]);
