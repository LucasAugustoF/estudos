 
var nome = 'Luiz' 
var nome = 'Otávio'

console.log(nome);

/*
não é uma boa pratica redeclarar uma variavel no meio do código

Exato. Na maioria dos casos, não é uma boa prática redeclarar uma variável no meio do código, principalmente se isso deixar o código confuso ou dificultar entender qual valor a variável possui em cada momento.

Por exemplo, em JavaScript:

let nome = "Lucas";

console.log(nome);

let nome = "João"; // ❌ Erro: nome já foi declarado

Com let e const, você não pode declarar novamente a mesma variável no mesmo escopo.

O correto seria apenas alterar o valor, se for necessário:

let nome = "Lucas";

console.log(nome);

nome = "João"; // ✅ Apenas alterando o valor

console.log(nome);

Com var, a redeclaração é permitida:

var nome = "Lucas";

var nome = "João"; // Funciona

Mas evite usar var em código moderno. Prefira:

const → quando o valor não será reatribuído.
let → quando o valor precisará mudar.

Exemplo:

const idade = 25;

let saldo = 100;

saldo = 200;
Uma observação importante

Se você está falando de redeclarar em outro bloco/escopo, aí pode ser permitido:

let nome = "Lucas";

if (true) {
    let nome = "João"; // ✅ Outra variável, em outro escopo
    console.log(nome); // João
}

console.log(nome); // Lucas

Nesse caso, são duas variáveis diferentes, porque o let dentro do if pertence a outro escopo.

Regra prática para seus estudos de JavaScript: tente declarar a variável no lugar onde ela faz sentido e use const por padrão. Só use let quando você realmente precisar mudar o valor. Isso deixa seu código mais previsível e fácil de manter.
*/