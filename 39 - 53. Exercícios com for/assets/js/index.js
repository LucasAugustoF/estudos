const elementos = [
    { tag: 'p', texto: 'Qualquer texto que quiser' },//0
    { tag: 'div', texto: 'Frase2' },//1
    { tag: 'footer', texto: 'Frase3' },//2
    { tag: 'section', texto: 'Frase4' },//3
]

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada);
}

container.appendChild(div);