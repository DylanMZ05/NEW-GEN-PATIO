window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Activa o desactiva la clase `active` en el menú
    hamburger.classList.toggle('open'); // Cambia el ícono de hamburguesa a una "X"
});

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






const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_01v4ztg';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
        btn.value = 'Send Email';
        alert('Sent!');
        this.reset();
        window.scrollTo(0, 0); 
    }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
    });
});