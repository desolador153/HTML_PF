/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

// Datos de las noticias en un arreglo
const newsData = [
  {
    title: "LA ARMADA CHINA LLEGA AL ÁRTICO DE LA MANO DE RUSIA: ",
    description: "el plan de Pekín para crear la Ruta de la Seda Polar, La idea es abrir nuevas rutas para reducir el tiempo del transporte de mercancías, pero también tiene un importante componente energético y geopolítico...",
    url: "https://www.elmundo.es/internacional/2024/10/19/67052e1ae9cf4ad86b8b45a1.html"
  },
  {
    title: "REIKIAVIK (ISLANDIA)",
    description: "Hay muchos motivos para elegir un destino para viajar. Y uno de los cada vez más cotizados está relacionado con el medio ambiente y la calidad del aire...",
    url: "https://www.elmundo.es/album/viajes/europa/2024/10/19/66fa8d08e4d4d8066a8b45b0_1.html"
  },
  {
    title: "UN JUEZ DE GEORGIA ANULA EL CAMBIO DE NORMA QUE QUERÍA FORZAR A UN POLÉMICO RECUENTO MANUAL DE PAPELETAS EN LA NOCHE ELECTORAL",
    description: "'El caos que se produciría es completamente incompatible con las obligaciones de garantizar que nuestras elecciones sean justas, legales y ordenadas' dice el mismo magistrado...",
    url: "https://www.elmundo.es/internacional/2024/10/16/670fddfae4d4d8a92c8b4576.html"
  },
  {
    title: "LA 'BATALLA CULTURAL' DE MILEI DESATA LA IRA DE MADURO: 'CELEBRAMOS LA LLEGADA DE COLÓN A AMÉRICA'",
    description: "De Javier Milei pueden decirse muchas cosas, pero al presidente argentino no se le puede negar su gran audacia: desde una hiperminoría parlamentaria, el líder libertario se está atreviendo a tomar decisiones que Mauricio Macri evitó durante su Presidencia...",
    url: "https://www.elmundo.es/internacional/2024/10/13/670bf095fc6c83a64b8b4597.html"
  },
  {
    title: "EVO MORALES MIRA AL ABISMO",
    description: "Acusado de estupro y trata de personas, el ex mandatario se enfrenta a un auto de detención que sus seguidores están intentando obstaculizar...",
    url: "https://www.elmundo.es/internacional/2024/10/12/670aa5e2e9cf4aa0528b4571.html"
  },
  {
    title: "EL CHAVISMO FUSTIGA AL CENTRO CARTER TRAS PONER AL DESNUDO SU FRAUDE ELECTORAL",
    description: "La exhibición física de las actas por parte de la funcionaria de la organización estadounidense Jennie Lincoln confirma el triunfo de Edmundo González en el 28J...",
    url: "https://www.elmundo.es/internacional/2024/10/03/66fed02be4d4d82a5c8b45d6.html"
  },
  {
    title: "QUÉ ES EL VIRUS DE MARBURGO Y POR QUÉ ES TAN PELIGROSO EL CONOCIDO COMO 'EL OTRO ÉBOLA'",
    description: "Ruanda ha declarado un brote de virus de Marburgo tras registrar varias muertes mientras en Alemania hay dos casos sospechosos...",
    url: "https://www.elmundo.es/ciencia-y-salud/salud/2024/10/04/66ffacdde85eceb7148b4571.html"
  }
];

// Obtención de los elementos del DOM
const gridItems = document.querySelectorAll('.grid .grid-image');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');
const moreInfoBtn = document.getElementById('more-info-btn');
const popupTitle = document.getElementById('popup-title');
const popupDescription = document.getElementById('popup-description');

// Evento de clic en las imágenes
gridItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    // Mostrar la ventana emergente
    popup.style.display = 'flex';

    // Obtener los datos de la noticia seleccionada
    const news = newsData[index];

    // Establecer el contenido del popup
    popupTitle.textContent = news.title;
    popupDescription.textContent = news.description;

    // Establecer el enlace de "Más información"
    moreInfoBtn.onclick = () => {
      window.open(news.url, '_blank');
    };
  });
});

// Evento de cierre del popup
closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Evento para cerrar el popup si se hace clic fuera del contenido
popup.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});


/*Parte de las burbujas*/


function randomNumber(start, end) {
  return Math.random() * (end - start);
}

function bubbler() {   //esta funcion genera las burbujas
  const water = document.body;   //aqui se agregan las burbujas
  let i = 0;

  function generateBubbles() {    //si es menor a 60 crea un nuevo elemento
    if (i < 60) {
      const el = document.createElement('svg');
      const circle = document.createElement('circle');
      const size = randomNumber(10, 100); // Ajusta el tamaño de las burbujas
      const pageHeight = document.documentElement.scrollHeight; // Altura total de la página
      const randomTop = randomNumber(0, pageHeight); // Posición vertical aleatoria

      water.appendChild(el);

      el.appendChild(circle);
      el.setAttribute('viewBox', '0 0 100 100');
      el.setAttribute('class', 'bubble');
      el.setAttribute(
        'style',
        `
          width: ${size}px;
          height: ${size}px;
          left: ${randomNumber(0, 100)}vw;
          top: ${randomTop}px;                
        `
      );

      circle.setAttribute('cx', 50);
      circle.setAttribute('cy', 50);
      circle.setAttribute('r', 50);

      i++;
    } else {
      clearInterval(cycle);
    }
  }

  generateBubbles();
  const cycle = setInterval(generateBubbles, 150);
}

bubbler();   //se ejecuta para comenzar a generar las burbujas

