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

window.addEventListener('scroll', function() {
    let scrollPosition = window.pageYOffset;
    document.querySelector('.third-section').style.backgroundPositionY = -(scrollPosition * 0.2) + 'px';
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

