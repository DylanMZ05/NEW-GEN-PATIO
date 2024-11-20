function openModal(img) {
    const modal = document.getElementById('imgModal');
    const modalImg = document.getElementById('imgModalContent');
    modal.style.display = 'flex';
    modalImg.src = img.src; // Establece la fuente de la imagen al modal
}

// Cierra el modal
function closeModal() {
    const modal = document.getElementById('imgModal');
    modal.style.display = 'none';
}