const nome = 'Luiz'; //String
const nome1 = "Luiz"; //String
const nome2 = `Luiz`; //String

const num1 = 10; //Number
const num2 = 10.52; //Number
let nomeAluno; //Undefined -> não aponta para local nenhum na memória
const sobrenomeAluno = null; //Nulo -> não aponta para local nenhum na memória

/*
Para você, que está estudando JavaScript, é melhor memorizar assim:

let nomeAluno;            // undefined → não recebeu valor
let sobrenomeAluno = null; // null → recebeu explicitamente "nulo"

Resumo:

🟡 undefined = valor não definido

⚫ null = valor nulo definido intencionalmente

Então, sua ideia de que os dois representam uma ausência de valor está no caminho certo. A principal diferença é que undefined normalmente indica que nenhum valor foi atribuído, enquanto null é uma atribuição explícita feita pelo programador para representar ausência de valor.

*/

const aprovado = true; //trueou false - Boolean
 
console.log(typeof nome, num1, sobrenomeAluno, aprovado);
