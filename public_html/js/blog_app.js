
//Selección de elementos del DOM

let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');

let slider = document.querySelector('.slider');
let sliderList = slider.querySelector('.slider .list');
let thumbnail = document.querySelector('.slider .thumbnail');
let thumbnailItems = Array.from(thumbnail.querySelectorAll('.item'));

thumbnail.appendChild(thumbnailItems[0]);   //Manipulación Con DOM, Mueve el primer elemento de las miniaturas al final de la lista de miniaturas.

// Función del botón next, verifica su existencia
if (nextBtn) {
    nextBtn.onclick = function () {    //Eventos con DOM
        moveSlider('next');
    };
} else {
    console.warn('Botón "next" no encontrado.');
}

// Función del botón prev
if (prevBtn) {
    prevBtn.onclick = function () {   //Eventos con DOM
        moveSlider('prev');
    };
} else {
    console.warn('Botón "prev" no encontrado.');
}

//funcion que mueve el slider//
function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item');
    let thumbnailItems = Array.from(thumbnail.querySelectorAll('.item')); 

    if (direction === 'next') {
        sliderList.appendChild(sliderItems[0]); //Manipulación Con DOM, Mueve el primer elemento de la lista de items del slider al final.
        thumbnail.appendChild(thumbnailItems[0]);  //Manipulación Con DOM
        slider.classList.add('next');
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1]);   //Manipulación Con DOM, Mueve el último elemento de la lista de items del slider al inicio.
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);    //Manipulación Con DOM, Mueve el último elemento de la lista de items del slider al inicio.
        slider.classList.add('prev');
    }

    // Limpieza después de la animación
    slider.addEventListener('animationend', function () {
        if (direction === 'next') {
            slider.classList.remove('next');
        } else {
            slider.classList.remove('prev');
        }
    }, { once: true });
}
