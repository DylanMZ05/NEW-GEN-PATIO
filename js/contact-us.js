window.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('header');
    header.classList.add('scrolled'); // Aseguramos que tenga la clase al cargar la página
});

document.addEventListener("DOMContentLoaded", function() {
    const input = document.querySelector("#phone");
    window.intlTelInput(input, {
      initialCountry: "us", // País inicial (EE.UU.)
      separateDialCode: true, // Muestra el código de país separado
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js" // Opcional, mejora el manejo de números
    });
});