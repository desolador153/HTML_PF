/* 
 Oscar
 **/

// Función para manejar la validación con un while
function validarDonacion(event) {
    // Prevenir el envío del formulario
    event.preventDefault();
    
    // Obtener el valor de la donación
    let cantidad = parseFloat(document.getElementById('donation-amount').value);

    // Condición: mientras que la cantidad no sea válida (menor o igual a 0)
    while (cantidad <= 0 || isNaN(cantidad)) {
        alert("Por favor, ingresa un monto válido mayor a 0.");
        // Pedir al usuario que ingrese un valor válido
        document.getElementById('donation-amount').value = "";
        return; // Salir de la función sin enviar el formulario
    }

    // Si la cantidad es válida, se redirige a la página de agradecimiento
    window.location.href = 'gracias.html';
}

