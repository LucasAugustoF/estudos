//capturar evento de submit do formulário

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso Inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura Inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    const msg = `Seu IMC é ${imc} (${nivelImc}).`;
    setResultado(msg, true);
});

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];

}


function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid){
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }


    p.innerHTML = msg;
    resultado.appendChild(p);
}

//explique tudo que foi feito
// O código acima é um script JavaScript que captura o evento de envio de um formulário HTML, calcula o Índice de Massa Corporal (IMC) com base no peso e altura fornecidos pelo usuário, e exibe o resultado na página.
// Aqui está uma explicação detalhada do que cada parte do código faz:
// 1. Captura do evento de envio do formulário:
// O código seleciona o formulário com o ID 'formulario' e adiciona um ouvinte de evento para o evento 'submit'. Quando o formulário é enviado, a função anônima é executada.
// 2. Prevenção do comportamento padrão do formulário:
// A função e.preventDefault() é chamada para evitar que a página seja recarregada quando o formulário é enviado.
// 3. Captura dos valores de peso e altura:
// Os valores dos campos de entrada 'peso' e 'altura' são capturados e convertidos para números.
// 4. Validação dos valores de peso e altura:
// O código verifica se os valores de peso e altura são válidos (não nulos ou NaN). Se algum dos valores for inválido, uma mensagem de erro é exibida usando a função setResultado() e a execução da função é interrompida com return.
// 5. Cálculo do IMC: 
// O código calcula o IMC com base nos valores de peso e altura fornecidos pelo usuário.
// 6. Determinação do nível de IMC:
// A função getNivelImc() é chamada para determinar o nível de IMC com base no valor calculado. Ela retorna uma string que representa o nível de IMC (por exemplo, "Peso normal", "Sobrepeso", etc.).
// 7. Exibição do resultado: 
// O código exibe o resultado do cálculo do IMC na página, utilizando a função setResultado().
// 8. Funções auxiliares:
// - getNivelImc(imc): Determina o nível de IMC com base no valor do IMC.
// - getImc(peso, altura): Calcula o IMC com base no peso e altura fornecidos.
// - criaP(): Cria um elemento <p> para exibir a mensagem de resultado.
// - setResultado(msg, isValid): Exibe a mensagem de resultado na página, aplicando uma classe CSS diferente dependendo se o resultado é válido ou inválido.