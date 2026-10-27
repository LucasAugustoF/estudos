/*
&& -> false && true -> false | Só retorna o valor
|| -> false || true -> true | vai retornar o primeiro valor verdadeiro
! -> !false -> true | inverte o valor
! -> !true -> false

FALSY
*false
*0
*'' "" ``
*null
*undefined
*NaN
*/

// Avaliação de Curto-Circuito (Short-Circuit)

console.log('Lucas Augusto' && 0 && 'Gabi');
//nesse caso o único valor é o 0, então o resultado é 0

console.log('Lucas Augusto' && true && 'Gabi');
//nesse caso todos os valores são verdadeiros, então o resultado é o último valor, que é 'Gabi'

console.log('Lucas Augusto' || 0 || 'Gabi');
//nesse caso o primeiro valor é verdadeiro, então o resultado é o primeiro valor, que é 'Lucas Augusto'

console.log('Lucas Augusto' && true && NaN);
//nesse caso o único valor é o NaN, então o resultado é NaN

console.log('Lucas Augusto' && undefined && 'Gabi');
//nesse caso o único valor é o undefined, então o resultado é undefined

/*function falaOi() {
    return 'Oi';
}

const vaiExecutar = false;
console.log(vaiExecutar && falaOi());
//nesse caso a função não será executada, porque o primeiro valor é falso, então o resultado é false
*/

console.log(0 || false || null || 'Lucas Augusto' || true);
//nesse caso o primeiro valor verdadeiro é 'Lucas Augusto', então o resultado é 'Lucas Augusto'

const corUsuario = null; //usuário nao selecionou uma cor
const corPadrao = corUsuario || 'Preta';
console.log(corPadrao);
//nesse caso o usuário não selecionou uma cor, então o resultado é a cor padrão, que é 'Preta'

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;
console.log(a || b || c || d || e);
//nesse caso o primeiro valor verdadeiro é 'false', então o resultado é 'false' pois os outros valores são falsy