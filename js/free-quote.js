window.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('header');
    header.classList.add('scrolled'); // Aseguramos que tenga la clase al cargar la página
});

const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Activa o desactiva la clase `active` en el menú
    hamburger.classList.toggle('open'); // Cambia el ícono de hamburguesa a una "X"
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
            { label: 'Width (cm)', id: 'width', required: true },
            { label: 'Length (cm)', id: 'length', required: true },
            { label: 'Height (cm)', id: 'height', required: true }
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
            { img: 'media/Pictures-WEB-1/Free-QUOTE/Patios-&-Pergolas/Foundation/Travertine.jpg', text: 'Travertine & Pavers', nextStep: 'final' }
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
            { label: 'Linear Feet', id: 'linear-feet', required: true },
        ],
        nextStep: 13,
        previousStep: 10
    },
    12: {
        title: 'Measurement',
        fields: [
            { label: 'Linear Feet', id: 'linear-feet', required: true },
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
            { img: 'media/Pictures-WEB-1/Free-QUOTE/Outdoor-Kitchen/Traditional/Brick.jpg', text: 'Brick', nextStep: 'final' },
            { img: 'media/Pictures-WEB-1/Free-QUOTE/Outdoor-Kitchen/Traditional/Stone.jpg', text: 'Stone', nextStep: 'final' },
            { img: 'media/Pictures-WEB-1/Free-QUOTE/Outdoor-Kitchen/Traditional/Stucco.jpg', text: 'Stucco', nextStep: 'final' }
        ],
        nextStep: 12,
        previousStep: 12
    },
};

let currentStep = 1;
let userSelections = { 
    options: [],
    inputValues: {} // Objeto para almacenar los valores ingresados
};

let inputs = [];

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
            input.type = 'number';
            input.id = field.id;
            input.required = true;
            input.classList.add('sub-option-input');

            input.addEventListener('input', checkInputsValue);

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

        let stepsRequired = false;

        step.fields.forEach(field => {
            if(stepsRequired) return;
            stepsRequired = field.required;
        });

        nextButton.disabled = stepsRequired;
        buttonContainer.appendChild(nextButton);

        const width = document.getElementById('width');
        const height = document.getElementById('height');
        const length = document.getElementById('length');
        const linearFeet = document.getElementById('linear-feet');

        inputs = [width, height, length, linearFeet];
    }

    container.appendChild(buttonContainer);
}

function checkInputsValue(){
    const nextButton = document.querySelector('.next-btn');
    const inputsFiltered = inputs.filter(input => input);
    const allFilled = Array.from(inputsFiltered).every(input => input.value.trim() !== '');
    nextButton.disabled = !allFilled;
}

function goToNextStep(nextStep, optionText = null) {
    // Guardar las opciones seleccionadas
    if (optionText) {
        userSelections.options.push(optionText);
    }

    // Capturar los valores de los inputs actuales (asegúrate de que estén en el DOM)
    const inputs = document.querySelectorAll('.sub-option-input'); // Seleccionar todos los inputs visibles
    inputs.forEach(input => {
        const value = input.value.trim();
        if (value) {
            console.log(`Capturando input: ${input.id} = ${value}`); // Depuración
            userSelections.inputValues[input.id] = value; // Guardar en el objeto
        }
    });

    // Mostrar el contenido actual de inputValues para verificar
    console.log('Valores actuales capturados:', userSelections.inputValues);

    // Ir al siguiente paso o mostrar el paso final
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
    console.log('Valores finales capturados:', userSelections.inputValues);
    const stepContainer = document.querySelector('.fq__form-container'); // Contenedor de pasos anteriores
    const formContainer = document.getElementById('quoteFormContainer'); // Contenedor del formulario final
    

    // Ocultar el contenedor de los pasos
    stepContainer.style.display = 'none';

    // Mostrar el formulario final
    formContainer.style.display = 'block';

    // Crear el mensaje final con las opciones y los inputs ingresados
    const userSelectionsText = formContainer.querySelector('p'); // Selecciona el párrafo donde se muestran las selecciones

    // Formatear los inputs ingresados como texto
    const inputValuesText = Object.entries(userSelections.inputValues)
        .map(([key, value]) => `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`)
        .join(', ');

    console.log('Final step input values:', userSelections.inputValues); // Depuración

    // Mostrar el mensaje con las selecciones y las dimensiones
    userSelectionsText.innerHTML = `
        You're about to request a quote for: <br>
        <strong>${userSelections.options.join(', ')}</strong> <br>
        <em>Measurements: ${inputValuesText || 'None provided'}</em>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('quoteFormContainer').style.display = 'none';
});





// function showFinalStep() {
//     const container = document.querySelector('.fq__form-container');
//     container.innerHTML = `
//         <h4>Final step! Complete the form to receive your quote.</h4>
//         <p>You're about to request a quote for: <br><strong>${userSelections.options.join(', ')}</strong></p>
//         <form id="quoteForm">
//             <label for="name">Name:</label>
//             <input type="text" id="name" name="to_name" required>

//             <label for="phone">Phone:</label>
//             <input type="tel" id="phone" name="from_phone" required>

//             <label for="email">Email:</label>
//             <input type="email" id="email" name="from_email" required>

//             <label for="zip">Zip Code:</label>
//             <input type="text" id="zip" name="zip_code" required>

//             <label for="notes">Notes (optional):</label>
//             <textarea id="notes" name="message"></textarea>

//             <label for="file">Attached File:</label>
//             <input type="file" id="file" name="attachment">

//             <button id="button" type="submit">Submit</button>
//         </form>
//     `;

//     const buttonContainer = document.createElement('div');
//     buttonContainer.classList.add('button-container');

//     const backButton = document.createElement('button');
//     backButton.classList.add('back-btn');
//     backButton.textContent = 'Go back';
//     backButton.onclick = () => goToPreviousStep(currentStep);
//     buttonContainer.appendChild(backButton);

//     container.appendChild(buttonContainer);
// }

// Iniciar en el primer paso
renderStep(currentStep);







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





const btn2 = document.getElementById('button');

document.getElementById('quoteForm')
    .addEventListener('submit', function(event) {
    event.preventDefault();

    btn2.value = 'Sending...';

    const serviceID = 'service_ddj4p3g';
    const templateID = 'template_mtk77tn';

    // Recopilar los datos adicionales
    const formData = new FormData(this);
    const userOptions = userSelections.options.join(', '); // Opciones seleccionadas

    // Formatear las medidas ingresadas por el usuario
    const measurements = Object.entries(userSelections.inputValues)
        .map(([key, value]) => `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`)
        .join(', ');

    // Crear un objeto con los parámetros para EmailJS
    const emailParams = {
        to_name: formData.get('to_name'),
        from_phone: formData.get('from_phone'),
        from_email: formData.get('from_email'),
        zip_code: formData.get('zip_code'),
        message: formData.get('message'),
        user_options: userOptions,
        measurements: measurements, // Agregar las medidas
    };

    // Verificar si el input de archivo existe
    const fileInput = document.getElementById('file');
    if (fileInput && fileInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = function () {
            emailParams.attachment = reader.result; // Convertir archivo a base64
            sendEmail(emailParams); // Enviar email con archivo
        };
        reader.readAsDataURL(fileInput.files[0]); // Leer archivo como base64
    } else {
        sendEmail(emailParams); // Enviar email sin archivo
    }

    function sendEmail(params) {
        emailjs.send(serviceID, templateID, params)
            .then(() => {
                btn2.value = 'Submit';
                alert('Message sent successfully!');
            }, (err) => {
                btn2.value = 'Submit';
                alert('An error occurred while sending the message: ' + JSON.stringify(err));
            });
    }
});

