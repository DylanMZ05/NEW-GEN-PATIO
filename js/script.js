window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

window.addEventListener('scroll', function() {
    let scrollPosition = window.pageYOffset;
    document.querySelector('.third-section').style.backgroundPositionY = -(scrollPosition * 0.2) + 'px';
});

const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Activa o desactiva la clase `active` en el menú
    hamburger.classList.toggle('open'); // Cambia el ícono de hamburguesa a una "X"
});



const scrollingText = document.getElementById('scrollingText');

function stopAnimation() {
    scrollingText.style.animationPlayState = 'paused';
}

function resumeAnimation() {
    scrollingText.style.animationPlayState = 'running';
}

// Para escritorio: detener y reanudar con el mouse
scrollingText.addEventListener('mouseenter', stopAnimation);
scrollingText.addEventListener('mouseleave', resumeAnimation);

// Para dispositivos móviles: detener y reanudar al tocar
scrollingText.addEventListener('touchstart', stopAnimation);
scrollingText.addEventListener('touchend', resumeAnimation);



function toggleFaq(element) {
    const faq = element.parentElement;

    const allFaqs = document.querySelectorAll('.faq');
    allFaqs.forEach(f => {
        if (f !== faq && f.classList.contains('open')) {
            f.classList.remove('open');
            f.querySelector('.arrow').innerHTML = "&#9654;"; // Restablecer la flecha
        }
    });

    // Alternar el FAQ actual
    faq.classList.toggle('open');
    const arrow = element.querySelector('.arrow');

    if (faq.classList.contains('open')) {
        arrow.innerHTML = "&#9660;"; // Cambiar la flecha hacia abajo
    } else {
        arrow.innerHTML = "&#9654;"; // Cambiar la flecha hacia la derecha
    }
}





const btn = document.getElementById('button');

// Agrega un listener al formulario
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir envío predeterminado

    btn.value = 'Sending...'; // Cambiar el texto del botón mientras se envía

    const serviceID = 'default_service'; // ID del servicio de EmailJS
    const templateID = 'template_01v4ztg'; // ID de tu plantilla en EmailJS

    // Enviar los datos del formulario con EmailJS
    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Send Email'; // Volver a texto inicial
            alert('Email sent successfully!'); // Notificar al usuario
        })
        .catch((err) => {
            btn.value = 'Send Email'; // Volver a texto inicial
            console.error('Error:', err);
            alert('Failed to send email. Please try again later.'); // Mostrar error
        });
});