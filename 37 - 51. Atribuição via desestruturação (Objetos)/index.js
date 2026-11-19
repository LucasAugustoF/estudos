//51. Atribuição via desestruturação (Objetos)

const pessoa = {
    nome:'Lucas',
    sobrenome:'Augusto',
    idade: 29,
    endereco:{
        rua:'Biagio Marchetti Neto',
        numero: 42
    }
};


/*
const pessoa = {
   // nome:'Lucas',
    sobrenome:'Augusto',
    idade: 29,
    endereco:{
        rua:'Biagio Marchetti Neto',
        numero: 42
    }
};
//na variavel nome, se não estiver um dado, vai aparecer como vazio mesmo ou algum texto que queira colocar
const { nome ='SEM NOME!', sobrenome, idade } = pessoa;
console.log(novaVariavel, sobrenome, idade);*/


//atribuição via desestruturação
/*const { nome: novaVariavel ='', sobrenome, idade } = pessoa;
console.log(novaVariavel, sobrenome, idade);*/

/*
const {endereco: {rua, numero}} = pessoa;
console.log(rua, numero);*/

/*
const pessoa = {
    nome:'Lucas',
    sobrenome:'Augusto',
    idade: 29,
    endereco:{
    //   rua:'Biagio Marchetti Neto',
        numero: 42
    }
};

const { endereco: {rua: r = 12345, numero}, endereco} = pessoa;
console.log(r, numero, endereco);
*/

const {nome, sobrenome, ...resto} = pessoa;
console.log(nome, resto);