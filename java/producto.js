function abrirModal(img) {
    var modal = document.getElementById("modalImagen");
    var modalImg = document.getElementById("imagenAmpliada");
    modal.style.display = "flex";
    modalImg.src = img.src;
}

function cerrarModal() {
    document.getElementById("modalImagen").style.display = "none";
}


 window.addEventListener('DOMContentLoaded', () => {
    const titulo = document.getElementById('titulo-llamativo');
    let visible = false;

    // Repite cada 3 segundos
    setInterval(() => {
    if (visible) {
        titulo.style.opacity = '0';
    } else {
        titulo.style.opacity = '1';
    }
    visible = !visible;
    }, 2000); // 3 segundos
});


// Selecciona todos los botones con la clase 'boton-compra'
const botones = document.querySelectorAll('.boton-compra');

// Agrega un evento de clic a cada botón
botones.forEach(boton => {
    boton.addEventListener('click', function() {
        // Agrega una clase de animación al botón
        this.classList.add('animacion-clic');

        // Elimina la clase de animación después de un tiempo
        setTimeout(() => {
            this.classList.remove('animacion-clic');
        }, 300);
    });
});

