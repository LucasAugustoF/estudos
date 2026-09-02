let num1 = 9.56345;


let num2 = Math.floor(num1); // arredonda para baixo
console.log(num2);

let num3 = Math.ceil(num1); // arredonda para cima
console.log(num3);

let num4 = Math.round(num1); // arredonda para o número inteiro mais próximo
console.log(num4);

console.log(Math.max(1,2,3,4,5,6,7,8,9,-10,1230,-64565,99999)); // retorna o maior número da lista
console.log(Math.min(1,2,3,4,5,6,7,8,9,-10,1230,-64565,99999)); // retorna o menor número da lista
console.log(Math.random()); // retorna um número aleatório entre 0 e 1

const aleatorio = Math.round(Math.random() * (10 - 5) + 5); // retorna um número aleatório entre 5 e 10
console.log(aleatorio);

console.log(Math.PI);
console.log(Math.pow(2, 10)); // ou Math.pow 2 ** 10 

let num5 = 9;
console.log(num5 ** 0.5); // retorna a raiz quadrada do número
