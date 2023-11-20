function abrirRegalo(event) {
    const image = event.currentTarget;
    image.src = 'ajo.jpg';

    const mensaje = document.querySelector('h1');
    mensaje.textContent = 'Felicidades';

    image.removeEventListener('click', abrirRegalo);
}

document.querySelector('img').addEventListener('click', abrirRegalo);

