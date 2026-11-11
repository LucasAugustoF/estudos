// Operador ternário
// ? :

const pontuacaoUsuario = 1000;
// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso';
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP': 'Usuário normal';

const corUsuario = 'pink';
const corPadrao = corUsuario || 'Preto';

console.log(nivelUsuario, corPadrao);

