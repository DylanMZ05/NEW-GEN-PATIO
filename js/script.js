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

// // Para escritorio: detener y reanudar con el mouse
// scrollingText.addEventListener('mouseenter', stopAnimation);
// scrollingText.addEventListener('mouseleave', resumeAnimation);

// // Para dispositivos móviles: detener y reanudar al tocar
// scrollingText.addEventListener('touchstart', stopAnimation);
// scrollingText.addEventListener('touchend', resumeAnimation);



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

//References
const a = document.getElementById('a'); // Primer paso
const pergola = document.getElementById('pergola');
const subOptionContainer = document.getElementById('sub-option-container'); // Segundo paso
const subOptionContainer2 = document.getElementById('sub-option-container2'); // Segundo paso 2
const stepContainer = document.getElementById('step-container'); // Tercer paso
const lastStep = document.getElementById('last-step') // Último paso
const btns = document.getElementById('continue-btn'); // Botón de continuar
const backBtn = document.getElementById('back-btn'); // Botón de regresar
const titleTemplate = document.getElementById('title-template');
const textTemplate = document.getElementById('text-template-1');
const textTemplate2 = document.getElementById('text-template-2');
const img1Template = document.getElementById('img-template-1');
const img2Template = document.getElementById('img-template-2');

let currentStep = 1;

pergola.addEventListener('click', showSubOptions)
backBtn.addEventListener('click', goBack);

function showSubOptions() {
    a.style.display = 'none';
    subOptionContainer.style.display = 'flex';
    btns.style.display = 'flex';
    currentStep = 2;
}

function showSubOptions() {
    a.style.display = 'none';
    subOptionContainer.style.display = 'flex';
    btns.style.display = 'flex';
    currentStep = 2;
}

function goNextStep() {
    if (currentStep === 2) {
        subOptionContainer.style.display = 'none';
        stepContainer.style.display = 'flex';
        btns.style.display = 'none';
        currentStep = 3;
    }
}

function goBack() {
    if (currentStep === 3) {
        stepContainer.style.display = 'none';
        subOptionContainer.style.display = 'block';
        btns.style.display = 'flex';
        currentStep = 2;
    } else if (currentStep === 2) {
        subOptionContainer.style.display = 'none';
        a.style.display = 'flex';
        btns.style.display = 'none';
        currentStep = 1;
    }

    console.log(goBack)
}

// RAMA 1

document.querySelector('.next-btn').addEventListener('click', goNextStep);
img1Template.addEventListener('click', () => changeSteps());

const steps = {
    1: {
        title: 'FOUNDATION',
        img: 'media/Bradon-Rose/Newgenpatio_1-4.jpg',
        text: 'GLASS',
        img2: 'media/Bradon-Rose/Newgenpatio_1-5.jpg',
        text2: 'CONCRETE',
    }

};
let numberStep = 0;

function changeSteps(){
    numberStep += 1;
    const beforeStep = steps[numberStep];
    titleTemplate.innerHTML = beforeStep.title;
    img1Template.src = beforeStep.img;
    textTemplate.innerHTML = beforeStep.text;
    img2Template.src = beforeStep.img2;
    textTemplate2.innerHTML = beforeStep.text2;

    if (numberStep === 1) {
        document.getElementById('img-template-1').onclick = showNextContainer;
        document.getElementById('text-template-1').onclick = showNextContainer;
        document.getElementById('img-template-2').onclick = showNextContainer;
        document.getElementById('text-template-2').onclick = showNextContainer;
    }
};

// RAMA 2

img2Template.addEventListener('click', () => changeSteps2());

const steps2 = {
    1: {
        title: 'FREESTANDING',
        img: 'media/Bradon-Rose/Newgenpatio_1-4.jpg',
        text: 'RESOLAR',
        img2: 'media/Bradon-Rose/Newgenpatio_1-5.jpg',
        text2: 'CANTILEVER',
    },
    2: {
        title: 'FUNDATION',
        img: 'media/Bradon-Rose/Newgenpatio_1-3.jpg',
        text: 'GLASS',
        img2: 'media/Bradon-Rose/Newgenpatio_1-3.jpg',
        text2: 'CONCRETE',
    }

};
let numberStep2 = 0;

function changeSteps2(){
    numberStep += 1;
    const beforeStep2 = steps2[numberStep];
    titleTemplate.innerHTML = beforeStep2.title;
    img1Template.src = beforeStep2.img;
    textTemplate.innerHTML = beforeStep2.text;
    img2Template.src = beforeStep2.img2;
    textTemplate2.innerHTML = beforeStep2.text2;

    if (numberStep === 2) {
        document.getElementById('img-template-1').onclick = showNextContainer;
        document.getElementById('text-template-1').onclick = showNextContainer;
        document.getElementById('img-template-2').onclick = showNextContainer;
        document.getElementById('text-template-2').onclick = showNextContainer;
    }
};

function showNextContainer() {
    document.getElementById('step-container').style.display = 'none';
    document.getElementById('last-step').style.display = 'flex';
}