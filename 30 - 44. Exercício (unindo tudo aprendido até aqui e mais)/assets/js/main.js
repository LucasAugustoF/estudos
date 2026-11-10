//capturar evento de submit do formulário

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Evento previnido.');
    setResultado('Formulário enviado com sucesso!');
});

function setResultado(msg) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = document.createElement('p');
    p.classList.add('paragrafo-resultado');
    p.innerHTML = 'Qualquer Coisa';
    resultado.appendChild(p);
}
