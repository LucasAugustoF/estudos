/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925925925924 

Luiz Otávio nasceu em 1993. 

*/



const nome = 'Luiz Otávio'
const sobrenome = 'Miranda'
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg.`);

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);

console.log(`tem ${alturaEmM} e seu IMC é de ${indiceMassaCorporal}`);

console.log(`${nome} nasceu em ${anoNascimento}`);

anoNascimento = 2026 - idade;
console.log(`${nome} nasceu em ${anoNascimento}`);
