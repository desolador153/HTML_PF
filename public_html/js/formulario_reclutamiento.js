// Obtener parámetros de la URL
function getParameterByName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Lógica para mostrar el mensaje en la página de confirmación
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.endsWith('confirmation.html')) {
        let genero = getParameterByName('genero');
        let mensajeGenero = "";

        // Usar un switch para mostrar el mensaje basado en el género
        switch (genero) {
            case 'masculino':
                mensajeGenero = "Gracias por postular, estimado caballero!";
                break;
            case 'femenino':
                mensajeGenero = "Gracias por postular, estimada dama!";
                break;
            case 'otro':
                mensajeGenero = "Gracias por postular, estamos felices de contar con todos!";
                break;
            default:
                mensajeGenero = "Gracias por postular!";
                break;
        }

        // Mostrar el mensaje en la página de confirmación
        const mensajeElemento = document.getElementById('mensaje-genero');
        if (mensajeElemento) {
            mensajeElemento.textContent = mensajeGenero;
            mensajeElemento.style.display = 'block';  // Asegurarse de mostrar el mensaje
        }
    }
});
