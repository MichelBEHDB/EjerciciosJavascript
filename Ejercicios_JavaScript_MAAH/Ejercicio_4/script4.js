function abrirRegalo(event) {
    const image = event.currentTarget;
    image.src = 'ajo.jpg';
    image.removeEventListener('click', abrirRegalo);
}

const image = document.querySelector('img');
image.addEventListener('click', abrirRegalo);

