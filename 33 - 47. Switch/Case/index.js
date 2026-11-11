// SWITCH/CASE
/*
domingo = 0
segunda = 1
terca = 2
quarta = 3
quinta = 4
sexta = 5
sabado = 6
*/
function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;;
        case 1:
            diaSemanaTexto = 'Segunda-feira';
            return diaSemanaTexto;;
        case 2:
            diaSemanaTexto = 'Terça-feira';
            return diaSemanaTexto;;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
            return diaSemanaTexto;;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
            return diaSemanaTexto;;
        case 5:
            diaSemanaTexto = 'Sexta-feira';
            return diaSemanaTexto;;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;;
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;;
    }
}

const data = new Date('2026-11-13T22:38:50');
let diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);
// diaSemana = 4;




console.log(diaSemana, diaSemanaTexto);


/*
if (diaSemana === 0) {
    diaSemanaTexto = 'Domingo';
} else if (diaSemana === 1) {
    diaSemanaTexto = 'Segunda-feira';
} else if (diaSemana === 2) {
    diaSemanaTexto = 'Terça-feira';
} else if (diaSemana === 3) {
    diaSemanaTexto = 'Quarta-feira';
} else if (diaSemana === 4) {
    diaSemanaTexto = 'Quinta-feira';
} else if (diaSemana === 5) {
    diaSemanaTexto = 'Sexta-feira';
} else if (diaSemana === 6) {
    diaSemanaTexto = 'Sábado';
} else {
    diaSemanaTexto = '';}
*/

