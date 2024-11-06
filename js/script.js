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





/* FREE QUOTE */

let progress = 0;
let targetProgress = 0; // Progreso objetivo al cual queremos llegar

function showSubOptions(option) {
    const optionContainer = document.querySelector(".option-container");
    const subOptionContainer = document.getElementById("sub-option-container");
    const backBtn = document.getElementById("back-btn");

    optionContainer.style.display = "none";
    subOptionContainer.style.display = "block";
    backBtn.style.display = "block";

    // Establecer el progreso objetivo al 50%
    targetProgress = 50;
    animateProgressBar();
}

function showContinue() {
    const subOptionContainer = document.getElementById("sub-option-container");
    const continueBtn = document.getElementById("continue-btn");

    subOptionContainer.style.display = "none";
    continueBtn.style.display = "block";

    // Establecer el progreso objetivo al 100%
    targetProgress = 100;
    animateProgressBar();
}

function continueAction() {
    alert("Continuando a la siguiente sección...");
}

function goBack() {
    const optionContainer = document.querySelector(".option-container");
    const subOptionContainer = document.getElementById("sub-option-container");
    const continueBtn = document.getElementById("continue-btn");
    const backBtn = document.getElementById("back-btn");

    if (continueBtn.style.display === "block") {
        // Retroceder de continuar a sub-opciones
        continueBtn.style.display = "none";
        subOptionContainer.style.display = "block";
        targetProgress = 50;
    } else if (subOptionContainer.style.display === "block") {
        // Retroceder de sub-opciones a opciones principales
        subOptionContainer.style.display = "none";
        optionContainer.style.display = "block";
        backBtn.style.display = "none";
        targetProgress = 0;
    }
    animateProgressBar();
}

function animateProgressBar() {
    const progressBar = document.getElementById("progress-bar");

    // Intervalo para incrementar la barra de progreso gradualmente
    const interval = setInterval(() => {
        if (progress < targetProgress) {
            progress += 1; // Incrementa el progreso
            progressBar.style.width = progress + "%";
        } else if (progress > targetProgress) {
            progress -= 1; // Decrementa el progreso si retrocede
            progressBar.style.width = progress + "%";
        } else {
            clearInterval(interval); // Detener el intervalo al llegar al progreso objetivo
        }
    }, 10); // La velocidad de la animación se controla con el valor en milisegundos
}