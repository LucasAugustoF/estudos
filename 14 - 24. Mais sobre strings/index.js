let umaString = "Um \"texto\""; // O caractere de escape \" permite que você use aspas dentro da string sem encerrar a string.
let outraString = 'Segundo texto'; 
let terceiraString = "Terceiro texto";

console.log(umaString);

console.log(outraString[4]); // Acessando o caractere na posição 4 da string "outraString", que é a letra "t".

console.log(terceiraString.charAt(5)); // Usando o método charAt() para acessar o caractere na posição 6 da string "terceiraString", que é a letra "o".

console.log(umaString.concat(' em', ' um', ' lindo dia.')); // Usando o método concat() para concatenar várias strings em uma única string.

console.log(outraString.indexOf('texto')); // Usando o método indexOf() para encontrar a posição da substring "texto" na string "outraString". Retorna -1 se não encontrar.

console.log(terceiraString.lastIndexOf('o', 3)); // Usando o método lastIndexOf() para encontrar a última posição da substring "o" na string "terceiraString", limitando a busca ao índice 3.

console.log(outraString.match((/[a-z]/g))); // Usando o método match() com uma expressão regular para encontrar todas as letras minúsculas na string "outraString". Retorna um array com as correspondências.

console.log(outraString.replace('Segundo', 'Outro')); // Usando o método replace() para substituir a substring "Segundo" por "Outro" na string "outraString".

console.log(outraString.replace(/o/g, '1')); // Usando o método replace() com uma expressão regular para substituir todas as ocorrências da letra "o" por "1" na string "outraString".

console.log(terceiraString.length); // Usando a propriedade length para obter o comprimento da string "terceiraString". 

console.log(terceiraString.slice(2, 7)); // Usando o método slice() para extrair uma parte da string "terceiraString" do índice 2 até o índice 7 (não inclusivo).

console.log(terceiraString.split(' ')); // Usando o método split() para dividir a string "terceiraString" em um array de substrings, usando o espaço como delimitador.
