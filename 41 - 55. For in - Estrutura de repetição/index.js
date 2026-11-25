
//                0        1      2
const frutas = ['Pera', 'Maçã', 'Uva'];

/*
//Uma das formas de usar o for (padrão)
for (let i = 0 < frutas.length; i++) {
    console.log(frutas[i]);
}*/

/*
// For in --> lê os indices ou chaves do objeto 
for (let i in frutas) {
    console.log(frutas[i]);
}*/

const pessoa = {
    nome:'Lucas',
    sobrenome:'Augusto',
    idade: 29
};

for (let chave in pessoa) {
    console.log(pessoa[chave]);
};

//Acessando de formas diferentes
console.log(pessoa.nome);
console.log(pessoa['nome']);

