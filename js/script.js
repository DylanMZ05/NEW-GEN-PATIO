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

    targetProgress = 50;
    animateProgressBar();
}

function showThirdStep() {
    const subOptionContainer = document.getElementById("sub-option-container");
    const thirdStepContainer = document.getElementById("third-step-container");

    subOptionContainer.style.display = "none";
    thirdStepContainer.style.display = "block";

    targetProgress = 75;
    animateProgressBar();
}

function showContinue() {
    const finalStepContainer = document.getElementById("continue-btn");
    hideAllSteps();  // Oculta todos los pasos previos
    finalStepContainer.style.display = "block";

    targetProgress = 100;
    animateProgressBar();
}

function checkInputs() {
    const width = document.getElementById("width").value;
    const length = document.getElementById("length").value;
    const height = document.getElementById("height").value;
    const continueBtn = document.getElementById("continue-btn");

    if (width && length && height) {
        continueBtn.style.display = "block";
        targetProgress = 100;
    } else {
        continueBtn.style.display = "none";
        targetProgress = 50;
    }
    animateProgressBar();
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

// Función para manejar la elección en el tercer paso 
function chooseOption(option) {
    const thirdStepContainer = document.getElementById("third-step-container");
    const step4_1Container = document.getElementById("step-4-1-container");
    const step4_2Container = document.getElementById("step-4-2-container");

    thirdStepContainer.style.display = "none";

    if (option === "Option A") { // ATTACHED
        step4_1Container.style.display = "block";
    } else if (option === "Option B") { // FREESTANDING
        step4_2Container.style.display = "block";
    }

    targetProgress = 85;
    animateProgressBar();
}

// Función para regresar al tercer paso desde el paso 4
function goBackToThirdStep() {
    const thirdStepContainer = document.getElementById("third-step-container");
    const step4_1Container = document.getElementById("step-4-1-container");
    const step4_2Container = document.getElementById("step-4-2-container");

    step4_1Container.style.display = "none";
    step4_2Container.style.display = "none";
    thirdStepContainer.style.display = "block";

    targetProgress = 75;
    animateProgressBar();
}



// Función para ocultar todas las secciones antes de mostrar la final
function hideAllSteps() {
    document.querySelector(".option-container").style.display = "none";
    document.getElementById("sub-option-container").style.display = "none";
    document.getElementById("third-step-container").style.display = "none";
    document.getElementById("step-4-1-container").style.display = "none";
    document.getElementById("step-4-2-container").style.display = "none";
}

// Función para manejar el siguiente paso en 4.1 y 4.2 hacia el paso final
function goToFinalStepFromStep4() {
    hideAllSteps();
    document.getElementById("continue-btn").style.display = "block";

    targetProgress = 100;
    animateProgressBar();
}

// Escuchar cambios en los campos de entrada
document.getElementById("width").addEventListener("input", checkInputs);
document.getElementById("length").addEventListener("input", checkInputs);
document.getElementById("height").addEventListener("input", checkInputs);