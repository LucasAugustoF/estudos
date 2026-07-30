let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const varATemp = varA;

varA = varB; //B
varB = varC; //C
varC = varATemp; //A


console.log(varA, varB, varC);

/*
O código troca os valores entre as variáveis:

A → B
B → C
C → A

A variável temporária:

const varATemp = varA;

serve para guardar o valor original de varA antes que ele seja substituído.

Resultado:

B C A
*/