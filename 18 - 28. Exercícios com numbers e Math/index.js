const numero = Number(prompt('Digite um número:')); 
const numeroTitulo = document.getElementById('numero-titulo'); // Pega o elemento HTML com o id 'numero-titulo'
const texto = document.getElementById('texto'); // Pega o elemento HTML com o id 'texto'
numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Seu número + 2 é ${numero + 2}.</p>`; // Adiciona um parágrafo com o resultado da soma do número digitado com 2


/*
Raiz quadrada: 7.429586495895986 55.1987555 é inteiro: false
É NaN: false
Arredondando para baixo: 55
Arredondando para cima: 56
Com duas casas decimais: 55.20
*/

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Raiz quadrada: ${Math.sqrt(numero)}.</p>`; 
// Adiciona um parágrafo com o resultado da raiz quadrada do número digitado

texto.innerHTML += `<p>Esse ${numero} é inteiro? ${Number.isInteger(numero)}.</p>`; 
// Adiciona um parágrafo com o resultado da verificação se o número digitado é inteiro

texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`; 
// Adiciona um parágrafo com o resultado do arredondamento para baixo do número digitado

texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`; 
// Adiciona um parágrafo com o resultado do arredondamento para cima do número digitado

texto.innerHTML += `<p>Com duas casas decimais: ${Number(numero).toFixed(2)}</p>`; 
// Adiciona um parágrafo com o resultado do número digitado com duas casas decimais

texto.innerHTML += `<p>É NaN? ${Number.isNaN(numero)}</p>`; 
// Adiciona um parágrafo com o resultado da verificação se o número digitado é NaN