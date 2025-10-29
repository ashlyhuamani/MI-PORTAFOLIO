document.addEventListener('DOMContentLoaded', function() {
    // Función para mostrar los detalles del proyecto en la ventana modal
    function mostrarDetallesProyecto(proyecto) {
        const modal = document.getElementById('modal-proyecto');
        const modalTitulo = document.getElementById('modal-titulo');
        const modalDescripcion = document.getElementById('modal-descripcion');

        // Define los detalles de cada proyecto
        const detallesProyectos = {
            plataforma: {
                titulo: 'Desarrollo de plataforma educativa',
                descripcion: 'Plataforma para alfabetización digital desarrollada con HTML, CSS y JavaScript. Incluye módulos interactivos y seguimiento del progreso del usuario.'
            },
            talleres: {
                titulo: 'Implementación de talleres',
                descripcion: 'Talleres de tecnología impartidos en comunidades rurales, enfocados en el uso de herramientas digitales y programación básica.'
            },
            materiales: {
                titulo: 'Creación de materiales didácticos',
                descripcion: 'Materiales didácticos digitales interactivos diseñados para facilitar el aprendizaje de conceptos tecnológicos clave.'
            }
        };

        // Actualiza el contenido de la ventana modal con los detalles del proyecto seleccionado
        modalTitulo.textContent = detallesProyectos[proyecto].titulo;
        modalDescripcion.textContent = detallesProyectos[proyecto].descripcion;

        // Muestra la ventana modal
        modal.style.display = 'block';
    }

    // Agrega un event listener a cada botón de "Ver Detalles"
    const botonesDetalles = document.querySelectorAll('.btn-detalles');
    botonesDetalles.forEach(boton => {
        boton.addEventListener('click', function() {
            const proyecto = this.dataset.proyecto;
            mostrarDetallesProyecto(proyecto);
        });
    });

    // Agrega funcionalidad para cerrar la ventana modal
    const closeButton = document.querySelector('.close-button');
    closeButton.addEventListener('click', function() {
        const modal = document.getElementById('modal-proyecto');
        modal.style.display = 'none';
    });

    // Cierra la ventana modal si se hace clic fuera del contenido de la ventana
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('modal-proyecto');
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});