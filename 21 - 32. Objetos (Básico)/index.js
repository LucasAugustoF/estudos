/*
const nome01 = 'Lucas';
const sobreNome01 = 'Augusto';
const idade01 = 29;

const nome02 = 'Jonas';
const sobreNome02 = 'Augusto';
const idade02 = 31;
*/

/*
const pessoa1 = {
    nome: 'Lucas',
    sobreNome: 'Augusto',
    idade: 29
};

console.log(pessoa1.nome);
console.log(pessoa1.sobreNome);
console.log(pessoa1.idade);
*/

// essa função cria um objeto pessoa com as propriedades nome, sobrenome e idade
/*function criaPessoa (nome, sobrenome, idade){
    return { nome, sobrenome, idade}; // retorna um objeto com as propriedades nome, sobrenome e idade
}

const pessoa1 = criaPessoa('Lucas', 'Augusto', 29);
const pessoa2 = criaPessoa('Jonas', 'Augusto', 31);
const pessoa3 = criaPessoa('Maria', 'Silva', 25);
const pessoa4 = criaPessoa('Pedro', 'Santos', 35);
const pessoa5 = criaPessoa('Ana', ' Oliveira', 28);
console.log(pessoa1.nome, pessoa1.sobrenome, pessoa2.nome, pessoa2.sobrenome, pessoa2.idade);*/


// essa função cria um objeto pessoa com as propriedades nome, sobrenome e idade
const pessoa1 ={
    nome: 'Lucas',
    sobrenome: 'Augusto',
    idade: 29,

    fala(){
        console.log(`A minha idade atual é ${this.idade}`); // exibe a idade atual da pessoa
    },

    incrementaIdade(){
        ++this.idade; // incrementa a idade em 1
    }
};

pessoa1.fala(); // chama a função fala do objeto pessoa1
pessoa1.incrementaIdade(); // chama a função incrementaIdade do objeto pessoa1
pessoa1.fala(); // chama a função fala do objeto pessoa1
pessoa1.incrementaIdade(); // chama a função incrementaIdade do objeto pessoa1
pessoa1.fala(); // chama a função fala do objeto pessoa1
