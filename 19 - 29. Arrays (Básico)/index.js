const nome = 'Luiz Otavio';
// indice da ordem do array "0" para joão, "1" para maria, "2" para Jeferson
const alunos = ['João', 'Maria', 'João']; // Luiza, Eduardo

console.log(typeof alunos); // object
console.log(alunos instanceof Array); // true pois alunos é uma instância de Array




// alunos.push('Luiza');
// alunos.push('Eduardo');
// console.log(alunos.slice(0, 3)); //recorta o array do índice 0 até o índice 3, sem incluir o índice 3
// console.log(alunos.slice(0, -1)); //recorta o array do índice 0 até o índice -1, sem incluir o índice -1


//console.log(alunos[50]); // undefined, pois não existe o índice 50 no array


//delete alunos[1]; // Remove o elemento do array, mas não altera o tamanho do array
//console.log(alunos); // ['João', empty, 'Jeferson']


// const removido = alunos.shift(); // Remove o primeiro elemento do array e retorna o elemento removido
// console.log(removido); // João
// console.log(alunos); // ['Maria', 'Jeferson']


// const removido = alunos.pop(); // Remove o último elemento do array e retorna o elemento removido
// console.log(removido); // Jeferson
// console.log(alunos); // ['João', 'Maria']


// alunos.unshift('Luiza'); // Adiciona um novo elemento no início do array
// alunos.unshift('Fabio'); // Adiciona um novo elemento no início do array
// console.log(alunos);


// console.log(alunos[0]);
// console.log(alunos[1]);
// console.log(alunos[2]);


// alunos.push('Lucas'); // Adiciona um novo elemento ao array
// alunos.push('Fernando'); // Adiciona um novo elemento ao array


// console.log(alunos.length); // Mostra a quantidade de elementos do array
// alunos[alunos.length] = 'Fabio'; // Adiciona um novo elemento ao array
// alunos[alunos.length] = 'Pedro'; // Adiciona um novo elemento ao array
// console.log(alunos);


// alunos[3] = 'Luiza'; // Adiciona um novo elemento ao array
// alunos[0] = 'Eduardo'; // Modifica o primeiro elemento do array
// console.log(alunos);
// console.log(alunos.length);