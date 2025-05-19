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
    }, 3000); // 3 segundos
});


