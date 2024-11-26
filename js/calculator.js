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

function updateValues() {
    const amountSlider = document.getElementById('amount');
    const aprSlider = document.getElementById('apr');
    const termSlider = document.getElementById('term');

    const amount = parseInt(amountSlider.value);
    const apr = parseFloat(aprSlider.value) / 100;
    const term = parseInt(termSlider.value);

    // Actualizar valores visibles en la UI
    document.getElementById('amountValue').innerText = `$${amount.toLocaleString()}`;
    document.getElementById('aprValue').innerText = `${(apr * 100).toFixed(1)}%`;
    document.getElementById('termValue').innerText = `${term} months`;

    // Cálculo del pago mensual
    const monthlyRate = apr / 12;
    const numberOfPayments = term * 12;
    const monthlyPayment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));

    // Asegúrate de que los valores estén correctamente formateados y dentro del rango
    document.getElementById('payment').innerText = `$${monthlyPayment.toFixed(2)}`;
    document.getElementById('totalAmount').innerText = `$${amount.toLocaleString()}`;
    document.getElementById('monthlyPayment').innerText = `$${monthlyPayment.toFixed(2)}`;
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