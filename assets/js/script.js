// 8. Los datos del cv deberán ser leidos desde un Json independiente
fetch('./assets/data/data-cv.json')
  .then(response => response.json())
  .then(data => {
    // 21. La información de los diferentes apartados será creada dinámicamente
    cargarDatos(data);

    // 17. Se implementará una galería de imágenes
    cargarGaleria(data);
  });

function cargarDatos(data) {
  // Cargar datos del CV en el DOM
}

function cargarGaleria(data) {
  // Cargar imágenes de la galería en el DOM
}

// 9. Algún módulo deberá estar realizado con Jquery
$(document).ready(function () {
  // Código que utiliza jQuery
});

// 10. Utilización de objeto Date()
const fechaActual = new Date();

// 11. Utilización de objeto Math()
const numeroAleatorio = Math.random();

// 12. Utilización de objeto array
const arrayEjemplo = ['elemento1', 'elemento2', 'elemento3'];

// 14. Validación del formulario desde HTML y desde Javascript de manera nativa y no nativa (regex)
function validarFormulario(event) {
  event.preventDefault();

  // Validación nativa
  const email = document.getElementById('email').value;
  if (!email.includes('@')) {
    alert('Email inválido');
    return;
  }

  // Validación no nativa (regex)
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!regex.test(email)) {
    alert('Email inválido');
    return;
  }

  // Enviar formulario
}

// 15. Utilización de una API externa
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Procesar datos de la API
  });

// 16. Desde la web se podrá descargar un fichero del cv en formato PDF
function descargarCV() {
  // Código para descargar el CV en PDF
}

// 19. Podremos combinar estilo de dia y estilo de noche (manual o automático)
function cambiarModo() {
  // Código para cambiar entre modo día y modo noche
}

// 7. Tiene que tener eventos
function cambiarEstilo() {

  // Código para cambiar el estilo (por ejemplo, cambiar el color de fondo y el color del texto)
  const body = document.body; const colorActual = getComputedStyle(body).getPropertyValue('--color-primario'); const colorNuevo = colorActual === '#3498db' ? '#2c3e50' : '#3498db'; body.style.setProperty('--color-primario', colorNuevo);
}

// 19. Podremos combinar estilo de dia y estilo de noche (manual o automático)
function cambiarModo() {
  const body = document.body; const modoActual = body.getAttribute('data-modo'); const modoNuevo = modoActual === 'dia' ? 'noche' : 'dia'; body.setAttribute('data-modo', modoNuevo);

  // Cambiar estilos según el modo
  if (modoNuevo === 'dia') {
    body.style.setProperty('--color-primario', '#3498db');
    body.style.setProperty('--color-secundario', '#2c3e50');
  } else {
    body.style.setProperty('--color-primario', '#2c3e50');
    body.style.setProperty('--color-secundario', '#3498db');
  }
}

// Cargar datos del CV en el DOM
function cargarDatos(data) {
  const nombre = document.createElement('h1'); nombre.textContent = data.nombre; document.getElementById('contenido').appendChild(nombre);

  const resumen = document.createElement('p');
  resumen.textContent = data.resumen;
  document.getElementById('contenido').appendChild(resumen);

  // Cargar datos de contacto
  const contactos = data.contacto;
  for (const key in contactos) {
    const enlace = document.createElement('a');
    enlace.href = contactos[key];
    enlace.textContent = key;
    document.getElementById('contenido').
      appendChild(enlace);
  }
}

// Populate gallery images
var galleryImages = '';
$.each(data.recursos.apple.libros, function(index, image) {
  galleryImages += '<img src="assets/img/gallery/' + image + '" alt="Gallery Image">';
});
$('#gallery-images').html(galleryImages);
