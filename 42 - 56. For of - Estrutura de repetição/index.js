//            012345 
const nome = ['Lucas', 'Augusto', 'Ferreira'];


for (let i=0; i < nome.length; i++) {
    console.log(nome[i]);  
};

console.log('################');

for (let i in nome){
    console.log(nome[i]);
};

console.log('################');

//Vai ler o indice e pegar o valor
for (let valor of nome){
    console.log(valor);
}

console.log('################');

nome.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
});