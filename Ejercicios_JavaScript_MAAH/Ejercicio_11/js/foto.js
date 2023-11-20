function createImage(src) {
    const image = document.createElement('img');
    image.src = src;
    return image;
}

function onThumbnailClick(event) {
    currentIndex = event.currentTarget.dataset.index;
    const image = createImage(event.currentTarget.src);
    modalView.appendChild(image);

    document.body.classList.add('no-scroll');
    modalView.style.top = window.pageYOffset + 'px';
    modalView.classList.remove('hidden');

    document.addEventListener('keydown', nextPhoto);
}

function onModalClick() {
    hideModal();
}

function hideModal() {
    document.body.classList.remove('no-scroll');
    modalView.classList.add('hidden');
    modalView.innerHTML = '';
    document.removeEventListener('keydown', nextPhoto);
}

const modalView = document.querySelector('#modal-view');
modalView.addEventListener('click', onModalClick);

const albumView = document.querySelector('#album-view');
for (let i = 0; i < PHOTO_LIST.length; i++) {
    const photoSrc = PHOTO_LIST[i];
    const image = createImage(photoSrc);
    image.dataset.index = i;
    image.addEventListener('click', onThumbnailClick);
    albumView.appendChild(image);
}

/*
Realiza acciones dependiendo de la tecla presionada
Parámetro: Evento
*/
function nextPhoto(event) {
    // Si la tecla presionada fue ESCAPE, ocultamos el diálogo modal
    if (event.key === 'Escape') {
        hideModal();
        return;
    }

    // Si la tecla es diferente de flecha izquierda o derecha hacemos nada
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {
        return;
    }

    // Guardamos el valor del índice actual
    let nextIndex = currentIndex;
    if (event.key === 'ArrowLeft') {
        // Si la tecla presionada es la flecha izquierda decrementamos el índice
        nextIndex--;
    } else {
        // Si la tecla presionada no es la flecha izquierda incrementamos el índice
        nextIndex++;
    }

    // Si hemos sobrepasado los límites del arreglo, hacer nada
    if (nextIndex < 0 || nextIndex === PHOTO_LIST.length) {
        return;
    }

    // Asignar una imagen del arreglo de fotos con el nuevo índice
    const photoSrc = PHOTO_LIST[nextIndex];
    // Eliminar el contenido actual de la vista
    modalView.innerHTML = '';
    // Crear el nuevo elemento imagen
    const image = createImage(photoSrc);
    // Adjuntar la imagen a la vista
    modalView.appendChild(image);
    // Actualizar el valor del índice actual
    currentIndex = nextIndex;
}
