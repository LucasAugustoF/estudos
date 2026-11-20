//52. For - Clássico - Estrutura de repetição


// i = index
for (let i = 0; i <= 5; i++) {
    console.log(`Linha ${i}`);
}

//com i+=10, será incrementado de 10 em 10
for (let i = 100; i <= 150; i += 10) {
    console.log(`Linha2 ${i}`);
}

//checando se i é par
for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0;
    console.log(i, par);
}

//outra forma de checar se i é par
for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, par);
}

//uso do for para checar um array
const frutas = ['maçã', 'pêra', 'uva', 'mamão', 'abacaxi', 'melão', 'kiwi'];
for (let i = 0; i < frutas.length; i++) {
    console.log(`Indice ${i}`, frutas[i]);
}