//Selección de elementos con DOM

const previewContainer = document.querySelector('.products-preview');
const previewBoxes = document.querySelectorAll('.products-preview .preview');  //Nodelist, funciona como arreglo
const productColumns = document.querySelectorAll('.column');   //Nodelist, funciona como arreglo

const productImages = document.querySelectorAll('.img-modal');   //Nodelist, funciona como arreglo

//Estructura forEach//
productColumns.forEach(product => {   //recorre cada columna
  product.addEventListener('click', () => {  //al hacer click ejecuta el código que esta dentro 
    const target = product.getAttribute('data-name');  //se identifica el valor del atributo
    previewContainer.style.display = 'flex';  
    previewBoxes.forEach(preview => {   
      if (preview.getAttribute('data-target') === target) {  //si el atributo coincide se ejecuta el código (siempre va a ser si)
        preview.classList.add('active');
      } else {
        preview.classList.remove('active');
      }
    });
  });
});
previewContainer.addEventListener('click', event => {   //cierra la vista previa al hacer click fuera del recuadro
  if (event.target.classList.contains('close-btn') || event.target === previewContainer) {
    previewContainer.style.display = 'none';
    previewBoxes.forEach(preview => preview.classList.remove('active'));
  }
});



