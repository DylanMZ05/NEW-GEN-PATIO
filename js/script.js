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
// const a = document.getElementById('a'); // Primer paso
// const pergola = document.getElementById('pergola');
// const subOptionContainer = document.getElementById('sub-option-container'); // Segundo paso
// const subOptionContainer2 = document.getElementById('sub-option-container2'); // Segundo paso 2
// const stepContainer = document.getElementById('step-container'); // Tercer paso
// const lastStep = document.getElementById('last-step'); // Último paso
// const btns = document.getElementById('continue-btn'); // Botón de continuar
// const backBtn = document.getElementById('back-btn'); // Botón de regresar
// const titleTemplate = document.getElementById('title-template');
// const textTemplate = document.getElementById('text-template-1');
// const textTemplate2 = document.getElementById('text-template-2');
// const img1Template = document.getElementById('img-template-1');
// const img2Template = document.getElementById('img-template-2');

// let currentStep = 1;

// pergola.addEventListener('click', showSubOptions)
// backBtn.addEventListener('click', goBack);

// function showSubOptions() {
//     a.style.display = 'none';
//     subOptionContainer.style.display = 'flex';
//     btns.style.display = 'flex';
//     currentStep = 2;
// }

// function showSubOptions() {
//     a.style.display = 'none';
//     subOptionContainer.style.display = 'flex';
//     btns.style.display = 'flex';
//     currentStep = 2;
// }

// function goNextStep() {
//     if (currentStep === 2) {
//         subOptionContainer.style.display = 'none';
//         stepContainer.style.display = 'flex';
//         btns.style.display = 'none';
//         currentStep = 3;
//     }
// }

// function goBack() {
//     if (currentStep === 2) {
//         subOptionContainer.style.display = 'none';
//         a.style.display = 'flex';
//         btns.style.display = 'none';
//         currentStep = 1;
//     }
//     else if (currentStep === 3) {
//         subOptionContainer.style.display = 'flex';
//         btns.style.display = 'flex';
//         currentStep = 2;
//     }

//     console.log(goBack)
// }

// // RAMA 1

// document.querySelector('.next-btn').addEventListener('click', goNextStep);
// img1Template.addEventListener('click', () => changeSteps());

// const steps = {
//     1: {
//         title: 'FOUNDATION',
//         img: 'media/Bradon-Rose/Newgenpatio_1-4.jpg',
//         text: 'GLASS',
//         img2: 'media/Bradon-Rose/Newgenpatio_1-5.jpg',
//         text2: 'CONCRETE',
//     }

// };
// let numberStep = 0;

// function changeSteps(){
//     numberStep += 1;
//     const beforeStep = steps[numberStep];
//     titleTemplate.innerHTML = beforeStep.title;
//     img1Template.src = beforeStep.img;
//     textTemplate.innerHTML = beforeStep.text;
//     img2Template.src = beforeStep.img2;
//     textTemplate2.innerHTML = beforeStep.text2;

//     if (numberStep === 1) {
//         document.getElementById('img-template-1').onclick = showNextContainer;
//         document.getElementById('text-template-1').onclick = showNextContainer;
//         document.getElementById('img-template-2').onclick = showNextContainer;
//         document.getElementById('text-template-2').onclick = showNextContainer;
//     }
// };

// // RAMA 2

// img2Template.addEventListener('click', () => changeSteps2());

// const steps2 = {
//     1: {
//         title: 'FREESTANDING',
//         img: 'media/Bradon-Rose/Newgenpatio_1-4.jpg',
//         text: 'RESOLAR',
//         img2: 'media/Bradon-Rose/Newgenpatio_1-5.jpg',
//         text2: 'CANTILEVER',
//     },
//     2: {
//         title: 'FUNDATION',
//         img: 'media/Bradon-Rose/Newgenpatio_1-3.jpg',
//         text: 'GLASS',
//         img2: 'media/Bradon-Rose/Newgenpatio_1-3.jpg',
//         text2: 'CONCRETE',
//     }

// };
// let numberStep2 = 0;

// function changeSteps2(){
//     numberStep += 1;
//     const beforeStep2 = steps2[numberStep];
//     titleTemplate.innerHTML = beforeStep2.title;
//     img1Template.src = beforeStep2.img;
//     textTemplate.innerHTML = beforeStep2.text;
//     img2Template.src = beforeStep2.img2;
//     textTemplate2.innerHTML = beforeStep2.text2;

//     if (numberStep === 2) {
//         document.getElementById('img-template-1').onclick = showNextContainer;
//         document.getElementById('text-template-1').onclick = showNextContainer;
//         document.getElementById('img-template-2').onclick = showNextContainer;
//         document.getElementById('text-template-2').onclick = showNextContainer;
//     }
// };

// function showNextContainer() {
//     document.getElementById('step-container').style.display = 'none';
//     document.getElementById('last-step').style.display = 'flex';
// }

// Definir los pasos con sus detalles
const steps = {
    1: {
        title: '¿Qué estás buscando?',
        progress: 0,
        options: [
            { text: 'Pergola/Patio', nextStep: 2 },
            { text: 'Outdoor Kitchen', nextStep: 10 }
        ]
    },
    2: {
        title: 'Ingrese las dimensiones',
        fields: [
            { label: 'Width', id: 'width' },
            { label: 'Length', id: 'length' },
            { label: 'Height', id: 'height' }
        ],
        nextStep: 3,
        previousStep: 1
    },
    3: {
        title: '¿Cómo prefieres tu proyecto?',
        options: [
            { img: 'media/Bradon-Rose/Newgenpatio_1-4.jpg', text: 'ATTACHED', nextStep: 5 },
            { img: 'media/Bradon-Rose/Newgenpatio_1-5.jpg', text: 'FREESTANDING', nextStep: 4 }
        ],
        previousStep: 2
    },
    4: {
        title: 'Tipo de Fundación',
        options: [
            { img: 'media/Bradon-Rose/Newgenpatio_1-3.jpg', text: 'REGULAR', nextStep: 5 },
            { img: 'media/Bradon-Rose/Newgenpatio_1-5.jpg', text: 'CANTILEVER', nextStep: 5 }
        ],
        previousStep: 3
    },
    5: {
        title: 'Tipo de Material para la Fundación',
        options: [
            { img: 'media/Bradon-Rose/Newgenpatio_1-3.jpg', text: 'GLASS', nextStep: 'final' },
            { img: 'media/Bradon-Rose/Newgenpatio_1-5.jpg', text: 'CONCRETE', nextStep: 'final' }
        ],
        previousStep: 4
    },
    10: {
        title: 'Estilo',
        options: [
            { img: 'media/Bradon-Rose/Newgenpatio_1-3.jpg', text: 'MODERN', nextStep: 11 },
            { img: 'media/Bradon-Rose/Newgenpatio_1-5.jpg', text: 'TRADITIONAL', nextStep: 12 }
        ],
        previousStep: 1
    },
    11: {
        title: 'Estilo',
        fields: [
            { label: 'Linear Feet', id: 'linear-feet' },
        ],
        nextStep: 13,
        previousStep: 10
    },
    12: {
        title: 'Estilo',
        fields: [
            { label: 'Linear Feet', id: 'linear-feet' },
        ],
        nextStep: 14,
        previousStep: 10
    },
    13: {
        title: 'Estilo',
        options: [
            { img: 'media/Bradon-Rose/Newgenpatio_1-3.jpg', text: 'COMPOSITE', nextStep: 'final' },
            { img: 'media/Bradon-Rose/Newgenpatio_1-5.jpg', text: 'THERMO WOOD', nextStep: 'final' }
        ],
        nextStep: 12,
        previousStep: 11
    },
    14: {
        title: 'Estilo',
        options: [
            { img: 'media/Bradon-Rose/Newgenpatio_1-3.jpg', text: 'COMPOSITE', nextStep: 'final' },
            { img: 'media/Bradon-Rose/Newgenpatio_1-5.jpg', text: 'THERMO WOOD', nextStep: 'final' },
            { img: 'media/Bradon-Rose/Newgenpatio_1-5.jpg', text: 'TRADITIONAL', nextStep: 'final' }
        ],
        nextStep: 12,
        previousStep: 12
    },
};

let currentStep = 1;
let userSelections = { options: [] };

function renderStep(stepNumber) {
    const step = steps[stepNumber];
    const container = document.querySelector('.fq__form-container');

    // Limpiar el contenedor
    container.innerHTML = '';

    // Título del paso
    const title = document.createElement('h4');
    title.textContent = step.title;
    container.appendChild(title);

    // Verificar si el paso tiene opciones con imágenes o campos de entrada
    if (step.options) {
        const optionsContainer = document.createElement('div');
        optionsContainer.classList.add('image-options-container');

        if (stepNumber === 14) {
            optionsContainer.classList.add('step-14');
        }

        step.options.forEach(option => {
            if (option.img) {
                const optionContainer = document.createElement('div');
                optionContainer.classList.add('image-option');

                const img = document.createElement('img');
                img.src = option.img;
                img.alt = option.text;
                img.classList.add('option-image');
                img.onclick = () => goToNextStep(option.nextStep, option.text);

                const text = document.createElement('p');
                text.textContent = option.text;
                text.classList.add('option-text');

                optionContainer.appendChild(img);
                optionContainer.appendChild(text);
                optionsContainer.appendChild(optionContainer);
            } else {
                const button = document.createElement('button');
                button.classList.add('option');
                button.textContent = option.text;
                button.onclick = () => goToNextStep(option.nextStep, option.text);
                container.appendChild(button);
            }
        });
        container.appendChild(optionsContainer);
    } else if (step.fields) {
        step.fields.forEach(field => {
            const inputContainer = document.createElement('div');
            inputContainer.classList.add('option-container-2', 'form');

            const input = document.createElement('input');
            input.type = 'text';
            input.id = field.id;
            input.required = true;
            input.classList.add('sub-option-input');

            const label = document.createElement('label');
            label.htmlFor = field.id;
            label.classList.add('label-name');
            label.innerHTML = `<span class="content-name">${field.label}<span class="red-dot">*</span></span>`;

            inputContainer.appendChild(input);
            inputContainer.appendChild(label);
            container.appendChild(inputContainer);
        });
    }

    // Crear un contenedor para los botones
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    // Botón "Regresar" si no es el primer paso
    if (step.previousStep) {
        const backButton = document.createElement('button');
        backButton.classList.add('back-btn');
        backButton.textContent = 'Regresar';
        backButton.onclick = () => goToPreviousStep(step.previousStep);
        buttonContainer.appendChild(backButton);
    }

    // Botón "Siguiente" si hay un próximo paso (sólo para campos de entrada)
    if (step.fields && step.nextStep) {
        const nextButton = document.createElement('button');
        nextButton.classList.add('next-btn');
        nextButton.textContent = 'Siguiente';
        nextButton.onclick = () => goToNextStep(step.nextStep);
        buttonContainer.appendChild(nextButton);
    }

    container.appendChild(buttonContainer);
}

function goToNextStep(nextStep, optionText = null) {
    if (optionText) {
        userSelections.options.push(optionText);
    }
    if (nextStep === 'final') {
        showFinalStep();
    } else {
        currentStep = nextStep;
        renderStep(currentStep);
    }
}

function goToPreviousStep(previousStep) {
    currentStep = previousStep;
    userSelections.options.pop(); // Elimina la última selección al regresar
    renderStep(currentStep);
}

function showFinalStep() {
    const container = document.querySelector('.fq__form-container');
    container.innerHTML = `
        <h4>Último paso! Completa el formulario para recibir tu quote.</h4>
        <p>Estás a punto de pedir quote sobre: <strong>${userSelections.options.join(', ')}</strong></p>
        <form id="quoteForm">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>

            <label for="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="zip">Zip Code:</label>
            <input type="text" id="zip" name="zip" required>

            <label for="notes">Notes (optional):</label>
            <textarea id="notes" name="notes"></textarea>

            <label for="file">Attached File:</label>
            <input type="file" id="file" name="file">

            <button type="submit">Enviar</button>
        </form>
    `;

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    const backButton = document.createElement('button');
    backButton.classList.add('back-btn');
    backButton.textContent = 'Regresar';
    backButton.onclick = () => goToPreviousStep(currentStep - 1);
    buttonContainer.appendChild(backButton);

    container.appendChild(buttonContainer);
}

// Iniciar en el primer paso
renderStep(currentStep);