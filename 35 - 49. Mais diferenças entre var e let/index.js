const verdadeira = true;

//let tem escopo de bloco, ou seja, só funciona dentro do bloco que foi declarada
//var tem escopo de função, ou seja, funciona dentro da função que foi declarada

/*
let nome = 'Lucas'; //criando
var nome2 = 'Lucas';


if (verdadeira) {
    let nome = 'Otávio'; //criando 
    var nome2 = 'Otávio'; //redeclarando

    if (verdadeira) {
        var nome2 = 'Ronaldo'; //redeclarando
        let nome = 'Outro nome';
    }
}

console.log(nome, nome2);
*/



/*
function falaOi() {


    if (verdadeira) {
        let nome = 'Lucas';
        console.log(nome, sobrenome);
    }
    var sobrenome = 'Augusto';
}

falaOi();
*/


let sobrenome = 'Ferreira';
console.log(sobrenome);

