/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
 // Establecer los estilos de la página usando JavaScript
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.backgroundColor = "#f4f4f4";

// Estilos de la galería
const galeria = document.querySelector('.galeria');
galeria.style.display = "grid";
galeria.style.gridTemplateColumns = "repeat(auto-fill, minmax(300px, 1fr))"; // Responsividad
galeria.style.gap = "20px";
galeria.style.padding = "20px";

// Estilos de cada artículo (item)
const items = document.querySelectorAll('.item');
items.forEach(item => {
    item.style.backgroundColor = "#fff";
    item.style.borderRadius = "5px";
    item.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
    item.style.display = "flex";
    item.style.flexDirection = "column";
});

// Estilos de las imágenes dentro de cada artículo
const images = document.querySelectorAll('.item img');
images.forEach(image => {
    image.style.maxWidth = "100%";
    image.style.borderTopLeftRadius = "5px";
    image.style.borderTopRightRadius = "5px";
});

// Estilos de la información de cada artículo
const info = document.querySelectorAll('.info');
info.forEach(element => {
    element.style.padding = "15px";
});

// Estilos del título de la información
const titles = document.querySelectorAll('.info h3');
titles.forEach(title => {
    title.style.margin = "0 0 10px";
});


//Para el slider//
 /*hace que el carrousel ejecute animaciones de maera controlada*/
document.addEventListener('DOMContentLoaded', function() {     // Inicia cuando el contenido HTML ha sido completamente cargado y procesado
    
    var flkty = new Flickity('.carrosselPrimario', {
      autoPlay: false,  // Desactiva la reproducción automática del carrusel
      pauseAutoPlayOnHover: false,  // No pausa la reproducción automática al pasar el ratón sobre el carrusel
      prevNextButtons: false   // Desactiva los botones para ir al siguiente o anterior slide
    });
    });
  
    var hasAnimated = false;  // Variable para asegurarse de que la animación solo se ejecute una vez
  
    flkty.on('change', function(index) {  // Evento 'change' se dispara cada vez que el índice del slide cambia
      var slides = document.querySelectorAll('.carrosselPrimario-celula');  // Se obtienen todos los elementos de las celdas del carrusel
      slides.forEach(function(slide) {   // Se quita la clase 'is-active' de todas las celdas del carrusel
        slide.classList.remove('is-active');
      });
      slides[index].classList.add('is-active');  // Se añade la clase 'is-active' a la celda activa (la que corresponde al índice actual)
  
      
      if (index === 1 && !hasAnimated) {  // Si estamos en el slide con índice 1 y no se ha animado aún
        slides[index].classList.add('animate-once');   // Se agrega la clase 'animate-once' para realizar una animación
        hasAnimated = true;   // Marca que ya se ha ejecutado la animación
      }
    });