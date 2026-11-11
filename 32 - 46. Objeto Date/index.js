
// const tresHoras = 60 * 60 * 3 * 1000; // 3 horas em milissegundos
// const umDia = 60 * 60 * 24 * 1000; // 1 dia em milissegundos
// const data = new Date(0 + tresHoras + umDia); // 01/01/1970 Timestamp unix ou época unix

const data1 = new Date(2026, 10, 10, 21, 38, 28); // Ano, Mês, Dia, Hora, Minuto, Segundo, Milissegundo);
console.log(data1.toString());


const data2 = new Date('2026-11-10 21:38:28'); // Ano, Mês, Dia, Hora, Minuto, Segundo, Milissegundo);
console.log('Dia', data2.getDate());
console.log('Mês', data2.getMonth() + 1);
console.log('Ano', data2.getFullYear());
console.log('Hora', data2.getHours());
console.log('Minuto', data2.getMinutes());
console.log('Segundo', data2.getSeconds());
console.log('Milissegundo', data2.getMilliseconds());
// aqui obtem os valores da data2, que é um objeto Date, e imprime cada componente da data no console.

console.log(data2.toString());
console.log(Date.now()); // retorna o timestamp atual em milissegundos

const data3 = new Date(1794357925596); // timestamp em milissegundos
console.log(data3.toString()); // mostra a data correspondente ao timestamp fornecido

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data4){
    const dia = zeroAEsquerda(data4.getDate());
    const mes = zeroAEsquerda(data4.getMonth() + 1); // adiciona 1 porque os meses começam do zero
    const ano = zeroAEsquerda(data4.getFullYear());
    const hora = zeroAEsquerda(data4.getHours());
    const min = zeroAEsquerda(data4.getMinutes());
    const seg = zeroAEsquerda(data4.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data4 = new Date();
const dataBrasil = formataData(data4);
console.log(dataBrasil);


