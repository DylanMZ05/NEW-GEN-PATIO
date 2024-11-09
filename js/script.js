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

let targetProgress = 0;
let progress = 0;

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

function showThirdStep() {
    const subOptionContainer = document.getElementById("sub-option-container");
    const thirdStepContainer = document.getElementById("third-step-container");

    subOptionContainer.style.display = "none";
    thirdStepContainer.style.display = "block";

    // Establecer el progreso objetivo al 75%
    targetProgress = 75;
    animateProgressBar();
}

function showContinue() {
    const thirdStepContainer = document.getElementById("third-step-container");
    const continueBtn = document.getElementById("continue-btn");

    thirdStepContainer.style.display = "none";
    continueBtn.style.display = "block";

    // Establecer el progreso objetivo al 100%
    targetProgress = 100;
    animateProgressBar();
}

function checkInputs() {
    const width = document.getElementById("width").value;
    const length = document.getElementById("length").value;
    const height = document.getElementById("height").value;
    const continueBtn = document.getElementById("continue-btn");

    // Mostrar el botón de continuar solo si todos los campos están completos
    if (width && length && height) {
        continueBtn.style.display = "block";
        targetProgress = 100;
    } else {
        continueBtn.style.display = "none";
        targetProgress = 50;
    }
    animateProgressBar();
}

function continueAction() {
    alert("Continuando a la siguiente sección...");
}

function goBack() {
    const optionContainer = document.querySelector(".option-container");
    const subOptionContainer = document.getElementById("sub-option-container");
    const thirdStepContainer = document.getElementById("third-step-container");
    const continueBtn = document.getElementById("continue-btn");
    const backBtn = document.getElementById("back-btn");

    if (continueBtn.style.display === "block") {
        continueBtn.style.display = "none";
        thirdStepContainer.style.display = "block";
        targetProgress = 75;
    } else if (thirdStepContainer.style.display === "block") {
        thirdStepContainer.style.display = "none";
        subOptionContainer.style.display = "block";
        targetProgress = 50;
    } else if (subOptionContainer.style.display === "block") {
        subOptionContainer.style.display = "none";
        optionContainer.style.display = "block";
        backBtn.style.display = "none";
        targetProgress = 0;
    }
    animateProgressBar();
}

function animateProgressBar() {
    const progressBar = document.getElementById("progress-bar");
    const interval = setInterval(() => {
        if (progress < targetProgress) {
            progress += 1;
            progressBar.value = progress;
        } else if (progress > targetProgress) {
            progress -= 1;
            progressBar.value = progress;
        } else {
            clearInterval(interval);
        }
    }, 10);
}

function chooseOption(option) {
    alert(`You chose ${option}`);
}

// Escuchar cambios en los campos de entrada
document.getElementById("width").addEventListener("input", checkInputs);
document.getElementById("length").addEventListener("input", checkInputs);
document.getElementById("height").addEventListener("input", checkInputs);

function chooseOption(option) {
    const thirdStepContainer = document.getElementById("third-step-container");
    const step4_1Container = document.getElementById("step-4-1-container");
    const step4_2Container = document.getElementById("step-4-2-container");

    thirdStepContainer.style.display = "none"; // Oculta el tercer paso

    if (option === "Option A") { // ATTACHED
        step4_1Container.style.display = "block"; // Muestra el paso 4.1
    } else if (option === "Option B") { // FREESTANDING
        step4_2Container.style.display = "block"; // Muestra el paso 4.2
    }
}

function goBackToThirdStep() {
    const thirdStepContainer = document.getElementById("third-step-container");
    const step4_1Container = document.getElementById("step-4-1-container");
    const step4_2Container = document.getElementById("step-4-2-container");

    // Oculta ambos caminos y muestra el tercer paso
    step4_1Container.style.display = "none";
    step4_2Container.style.display = "none";
    thirdStepContainer.style.display = "block";
}