
//essa função saudacao recebe um parâmetro nome e retorna uma string com uma saudação personalizada.
function saudacao(nome) {
    return `boa noite! ${nome}!`;
}

const variavel = saudacao('Lucas');
console.log(variavel);



// essa função soma recebe dois parâmetros, x e y, e retorna a soma deles. Caso não seja passado nenhum valor para x ou y, eles assumem o valor padrão de 1.
function soma(x = 1,y = 1){
    const resultado = x + y;
    return resultado;
    console.log('Olá Mundo!'); // esse console.log não será executado, pois está depois do return
    
}

const resultado = soma(4, 3); // x recebe 4 e y recebe 3, então resultado = 7
console.log(resultado);


// essa função raiz recebe um parâmetro n e retorna a raiz quadrada de n.
/*const raiz = function(n) {
    return n ** 0.5;
}*/
const raiz = (n) => n ** 0.5; //arrow function é uma forma mais curta de escrever funções em JavaScript. Nesse caso, a função raiz recebe um parâmetro n e retorna n elevado a 0.5, que é o mesmo que a raiz quadrada de n.

console.log(raiz(9)); // 3
console.log(raiz(16)); // 4
console.log(raiz(25)); // 5
