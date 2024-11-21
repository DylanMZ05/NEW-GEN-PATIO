window.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('header');
    header.classList.add('scrolled'); // Aseguramos que tenga la clase al cargar la página
});

/* FREE QUOTE */

const steps = {
    1: {
        title: '¿What are you looking for?',
        progress: 0,
        options: [
            { img: 'media/Pictures-WEB-1/Fotos-para-Fondos/Cover Patios & Pergolas.jpg', text: 'Patios & Pergolas', nextStep: 2 },
            { img: 'media/Pictures-WEB-1/Fotos-para-Fondos/Outdoor Kitchens.jpg', text: 'Outdoor Kitchens', nextStep: 10 }
        ],
    },
    2: {
        title: 'Measurement',
        fields: [
            { label: 'Width', id: 'width' },
            { label: 'Length', id: 'length' },
            { label: 'Height', id: 'height' }
        ],
        nextStep: 3,
        previousStep: 1
    },
    3: {
        title: 'Type',
        options: [
            { img: 'media/Pictures-WEB-1/Free-QUOTE/Patios-&-Pergolas/Attached.jpg', text: 'Attached', nextStep: 5 },
            { img: 'media/Pictures-WEB-1/Free-QUOTE/Patios-&-Pergolas/Freestanding.jpg', text: 'Freestanding', nextStep: 4 }
        ],
        previousStep: 2
    },
    4: {
        title: 'Style',
        options: [
            { img: 'media/Pictures-WEB-1/Free-QUOTE/Patios-&-Pergolas/Fresstanding/Regular.jpg', text: 'Regular', nextStep: 5 },
            { img: 'media/Pictures-WEB-1/Free-QUOTE/Patios-&-Pergolas/Fresstanding/Cantilever.jpg', text: 'Cantilever', nextStep: 5 }
        ],
        previousStep: 3
    },
    5: {
        title: 'Foundation',
        options: [
            { img: 'media/Pictures-WEB-1/Free-QUOTE/Patios-&-Pergolas/Foundation/Concrete.jpg', text: 'Concrete', nextStep: 'final' },
            { img: 'media/Pictures-WEB-1/Free-QUOTE/Patios-&-Pergolas/Foundation/Grass & Dirt.jpg', text: 'Grass & Dirt', nextStep: 'final' },
            { img: 'media/Pictures-WEB-1/Free-QUOTE/Patios-&-Pergolas/Foundation/Travertine.jpg', text: 'Travertine', nextStep: 'final' }
        ],
        previousStep: 4
    },
    10: {
        title: 'Style',
        options: [
            { img: 'media/Pictures-WEB-1/Free-QUOTE/Outdoor-Kitchen/Modern.jpg', text: 'Modern', nextStep: 11 },
            { img: 'media/Pictures-WEB-1/Free-QUOTE/Outdoor-Kitchen/Traditional.jpg', text: 'Traditional', nextStep: 12 }
        ],
        previousStep: 1
    },
    11: {
        title: 'Measurement',
        fields: [
            { label: 'Linear Feet', id: 'linear-feet' },
        ],
        nextStep: 13,
        previousStep: 10
    },
    12: {
        title: 'Measurement',
        fields: [
            { label: 'Linear Feet', id: 'linear-feet' },
        ],
        nextStep: 14,
        previousStep: 10
    },
    13: {
        title: 'Exterior Material',
        options: [
            { img: 'media/Pictures-WEB-1/Free-QUOTE/Outdoor-Kitchen/Modern/Composite.jpg', text: 'Composite', nextStep: 'final' },
            { img: 'media/Pictures-WEB-1/Free-QUOTE/Outdoor-Kitchen/Modern/Thermo Wood.jpg', text: 'Thermo Wood', nextStep: 'final' }
        ],
        nextStep: 12,
        previousStep: 11
    },
    14: {
        title: 'Exterior Material',
        options: [
            { img: 'media/Pictures-WEB-1/Free-QUOTE/Outdoor-Kitchen/Traditional/Brick.jpg', text: 'COMPOSITE', nextStep: 'final' },
            { img: 'media/Pictures-WEB-1/Free-QUOTE/Outdoor-Kitchen/Traditional/Stone.jpg', text: 'THERMO WOOD', nextStep: 'final' },
            { img: 'media/Pictures-WEB-1/Free-QUOTE/Outdoor-Kitchen/Traditional/Stucco.jpg', text: 'TRADITIONAL', nextStep: 'final' }
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

        if (stepNumber === 14 || stepNumber === 5) {
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
        backButton.textContent = 'Back';
        backButton.onclick = () => goToPreviousStep(step.previousStep);
        buttonContainer.appendChild(backButton);
    }

    // Botón "Siguiente" si hay un próximo paso (sólo para campos de entrada)
    if (step.fields && step.nextStep) {
        const nextButton = document.createElement('button');
        nextButton.classList.add('next-btn');
        nextButton.textContent = 'Continue';
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
        <p>Estás a punto de pedir quote sobre: <br><strong>${userSelections.options.join(', ')}</strong></p>
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
    backButton.onclick = () => goToPreviousStep(currentStep);
    buttonContainer.appendChild(backButton);

    container.appendChild(buttonContainer);
}

// Iniciar en el primer paso
renderStep(currentStep);