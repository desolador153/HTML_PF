document.addEventListener('DOMContentLoaded', function() {
    const quadrados = document.querySelectorAll('.quadrado');
    const paragrafos = document.querySelectorAll('.paragrafos');

   
    quadrados.forEach((quadrado) => {
        quadrado.addEventListener('click', function() {
            const target = this.getAttribute('data-target'); 

            
            quadrados.forEach((item) => {
                item.classList.remove('ativado');
            });

            
            this.classList.add('ativado');

            
            paragrafos.forEach((paragrafo) => {
                paragrafo.classList.remove('ativo');
            });

            
            const paragrafoCorrespondente = document.querySelector(`.paragrafos[data-atribute="${target}"]`);
            if (paragrafoCorrespondente) {
                paragrafoCorrespondente.classList.add('ativo');
            }
        });
    });
});
