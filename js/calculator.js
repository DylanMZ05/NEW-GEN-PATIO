window.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('header');
    header.classList.add('scrolled'); // Aseguramos que tenga la clase al cargar la página
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
    document.getElementById('termValue').innerText = `${term} years`;

    // Cálculo del pago mensual
    const monthlyRate = apr / 12;
    const numberOfPayments = term * 12;
    const monthlyPayment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));

    // Asegúrate de que los valores estén correctamente formateados y dentro del rango
    document.getElementById('payment').innerText = `$${monthlyPayment.toFixed(2)}`;
    document.getElementById('totalAmount').innerText = `$${amount.toLocaleString()}`;
    document.getElementById('monthlyPayment').innerText = `$${monthlyPayment.toFixed(2)}`;
}