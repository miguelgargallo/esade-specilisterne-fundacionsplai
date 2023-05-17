show me how would be a marp presentation of Introducción, Proceso de creación: como me he organizado, Tecnologías que he usado, Herramientas que he usado, Funcionalidades: Demo, Desafios y dificultades: problemas surgidos, como he resulto losproblemas, lineas de futuro: como podría seguir el proyecto, conclusiones, the project to present is:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Website</title>
  <link rel="stylesheet" href="assets/css/styles.css">
  <link rel="stylesheet" href="assets/css/button.css">
  <script src="./assets/js/fetch.js"></script>
  <script src="./assets/js/gallery.js"></script>
  <script src="./assets/js/script.js"></script>
  <script src="./assets/js/button.js"></script>
</head>

<body>
  <div class="container">
    <header>
      <h1>Miguel Gargallo</h1>
      <p>Expert in Artificial Intelligence (AI)</p>
    </header>

    <body>
      <nav class="navbar">
        <nav class="menu">
          <ul class="menu-list">
            <li><a href="/index.html">Home</a></li>
            <li><a href="https://twitter.com/miguelgargallo">Twitter</a></li>
            <li><a href="/form.html">Contact</a></li>
          </ul>
        </nav>
        <div id="cv-data">
          <!-- JSON data will be dynamically populated here -->
        </div>
      </nav>
      <button class="button-scroll">
        <triangle />
      </button>
  </div>
</div>

</body>
<footer class="footer">
  <div class="container">
    <div class="footer-content">
      <div class="footer-logo">
        <img src="assets/img/logo.jpg" alt="Logo">
      </div>
      <div class="footer-links">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="https://twitter.com/miguelgargallo">Twitter</a></li>
          <li><a href="/form.html">Contact</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2023 Your Company. All rights reserved.</p>
    </div>
  </div>
</footer>

</html>
```

index.html

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Form</title>
  <link rel="stylesheet" href="assets/css/form.css">
  <link rel="stylesheet" href="assets/css/styles.css">
  <link rel="stylesheet" href="assets/css/button.css">
  <script src="./assets/js/gallery.js"></script>
  <script src="./assets/js/script.js"></script>
  <script src="./assets/js/button.js"></script>
</head>

<body>
  <div class="container">
    <header>
      <h1>Miguel Gargallo</h1>
      <p>Expert in Artificial Intelligence (AI)</p>
    </header>

    <body>
      <nav class="navbar">
        <nav class="menu">
          <ul class="menu-list">
            <li><a href="/index.html">Home</a></li>
            <li><a href="https://twitter.com/miguelgargallo">Twitter</a></li>
            <li><a href="/form.html">Contact</a></li>
          </ul>
        </nav>
      </nav>
      <button class="button-scroll">
        <triangle />
      </button>
      <div class="container">
        <h1>Contact Us</h1>
        <form id="contact-form">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
          </div>
          <div class="form-group">
            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <div class="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>

      <script src="form.js"></script>
    </body>
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">
            <img src="assets/img/logo.jpg" alt="Logo">
          </div>
          <div class="footer-links">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="https://twitter.com/miguelgargallo">Twitter</a></li>
              <li><a href="/form.html">Contact</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2023 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>

</html>
```

form.html

```css
.button-scroll {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
  display: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: black;
  color: #fff;
  border: none;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.button-scroll.show {
  display: block;
  opacity: 1;
}

@keyframes shadow-animation {
  0% {
    box-shadow: none;
  }

  100% {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2), 0px 0px 10px rgba(0, 0, 0, 0.2) inset;
  }
}

.button-scroll:active {
  animation: shadow-animation 0.4s infinite alternate;
}

triangle {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #fff;
}
```

button.css

```css
.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button[type="submit"] {
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.has-error input,
.has-error textarea {
  border-color: #ff4c4c;
}

.has-error .error-message {
  color: #ff4c4c;
  margin-top: 5px;
  font-size: 14px;
}
```

form.css

```css
body {
  font-family: "Segoe UI", Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

h4 {
  font-size: 16px;
  margin-bottom: 5px;
}

p {
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 10px;
}

a {
  color: #0078d7;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.contacto,
.recursos,
.experiencia,
.educacion {
  margin-bottom: 20px;
}

.contacto h3,
.recursos h3,
.experiencia h3,
.educacion h3 {
  color: #0078d7;
}

.experiencia,
.educacion {
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-column-gap: 20px;
  align-items: center;
}

.experiencia img,
.educacion img {
  width: 80px;
  height: 80px;
  object-fit: contain;
  border-radius: 4px;
}

.experiencia h4,
.educacion h4 {
  margin-top: 0;
}

.gallery-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 10px;
}

.gallery-container img {
  width: 100%;
  height: auto;
}

.footer {
  background-color: #f8f8f8;
  padding: 20px 0;
  color: #555;
  text-align: center;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.footer-logo img {
  height: 40px;
}

.footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links ul li {
  display: inline-block;
  margin-right: 15px;
}

.footer-links ul li a {
  text-decoration: none;
  color: #555;
}

.footer-social ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-social ul li {
  display: inline-block;
  margin-right: 10px;
}

.footer-social ul li a {
  color: #555;
}

.footer-bottom {
  margin-top: 10px;
}

.menu {
  background-color: #fff;
  padding: 10px;
}

.menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}

.menu-list li {
  margin-right: 10px;
}

.menu-list li a {
  text-decoration: none;
  color: #555;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 50px;
  background-color: black;
  color: #fff;
  transition: background-color 0.3s ease;
}

.menu-list li a:hover {
  background-color: #555;
}
```

styles.css

```js
window.addEventListener('DOMContentLoaded', function () {
  const buttonScroll = document.querySelector('.button-scroll');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
      buttonScroll.classList.add('show');
    } else {
      buttonScroll.classList.remove('show');
    }
  });

  buttonScroll.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
```

buttons.js

```js
// script.js
document.addEventListener("DOMContentLoaded", fetchData);

function fetchData() {
    fetch("data-cv.json")
        .then(response => response.json())
        .then(data => {
            // Call a function to render the data in the HTML
            renderData(data);
        })
        .catch(error => console.error("Error fetching data:", error));
}

function renderData(data) {
    const cvDataDiv = document.getElementById("cv-data");

    // Render the nombre and resumen
    const nombreElement = document.createElement("h2");
    nombreElement.textContent = data.nombre;
    cvDataDiv.appendChild(nombreElement);

    const resumenElement = document.createElement("p");
    resumenElement.textContent = data.resumen;
    cvDataDiv.appendChild(resumenElement);

    // Render the contacto information
    const contactoDiv = document.createElement("div");
    const contactoHeading = document.createElement("h3");
    contactoHeading.textContent = "Contacto";
    contactoDiv.appendChild(contactoHeading);

    const calendarioLink = createLinkElement("Calendario", data.contacto.calendario);
    contactoDiv.appendChild(calendarioLink);

    const githubLink = createLinkElement("GitHub", data.contacto.github);
    contactoDiv.appendChild(githubLink);

    const twitterLink = createLinkElement("Twitter", data.contacto.twitter);
    contactoDiv.appendChild(twitterLink);

    // Add more contact links as needed

    cvDataDiv.appendChild(contactoDiv);

    // Render the recursos information
    const recursosDiv = document.createElement("div");
    const recursosHeading = document.createElement("h3");
    recursosHeading.textContent = "Recursos";
    recursosDiv.appendChild(recursosHeading);

    const appleAppsLink = createLinkElement("Apple Apps", data.recursos.apple.apps);
    recursosDiv.appendChild(appleAppsLink);

    const appleLibrosLink = createLinkElement("Apple Libros", data.recursos.apple.libros);
    recursosDiv.appendChild(appleLibrosLink);

    // Add more resource links as needed

    cvDataDiv.appendChild(recursosDiv);

    // Render the experiencia information
    const experienciaDiv = document.createElement("div");
    const experienciaHeading = document.createElement("h3");
    experienciaHeading.textContent = "Experiencia";
    experienciaDiv.appendChild(experienciaHeading);

    data.experiencia.forEach(experiencia => {
        const experienciaItem = document.createElement("div");

        const puestoElement = document.createElement("h4");
        puestoElement.textContent = experiencia.puesto;
        experienciaItem.appendChild(puestoElement);

        const empresaElement = document.createElement("p");
        empresaElement.textContent = experiencia.empresa;
        experienciaItem.appendChild(empresaElement);

        const fechaElement = document.createElement("p");
        fechaElement.textContent = experiencia.fecha;
        experienciaItem.appendChild(fechaElement);

        const descripcionElement = document.createElement("p");
        descripcionElement.textContent = experiencia.descripcion;
        experienciaItem.appendChild(descripcionElement);

        experienciaDiv.appendChild(experienciaItem);

    });

    cvDataDiv.appendChild(experienciaDiv);

    // Render the educacion information
    const educacionDiv = document.createElement("div");
    const educacionHeading = document.createElement("h3");
    educacionHeading.textContent = "Educación";
    educacionDiv.appendChild(educacionHeading);

    data.educacion.forEach(educacion => {
        const educacionItem = document.createElement("div");

        const tituloElement = document.createElement("h4");
        tituloElement.textContent = educacion.titulo;
        educacionItem.appendChild(tituloElement);

        const fechaElement = document.createElement("p");
        fechaElement.textContent = educacion.fecha;
        educacionItem.appendChild(fechaElement);

        const descripcionElement = document.createElement("p");
        descripcionElement.textContent = educacion.descripcion;
        educacionItem.appendChild(descripcionElement);

        educacionDiv.appendChild(educacionItem);

    });

    cvDataDiv.appendChild(educacionDiv);
}

function createLinkElement(label, url) {
    const linkElement = document.createElement("a");
    linkElement.href = url;
    linkElement.textContent = label;
    linkElement.target = "_blank";
    return linkElement;
}
```

fetch.js

```js
window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      submitForm();
      form.reset();
    }
  });

  function validateForm() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    let isValid = true;

    if (name === '') {
      showError(nameInput, 'Please enter your name');
      isValid = false;
    } else {
      hideError(nameInput);
    }

    if (email === '') {
      showError(emailInput, 'Please enter your email');
      isValid = false;
    } else if (!isValidEmail(email)) {
      showError(emailInput, 'Please enter a valid email');
      isValid = false;
    } else {
      hideError(emailInput);
    }

    if (message === '') {
      showError(messageInput, 'Please enter your message');
      isValid = false;
    } else {
      hideError(messageInput);
    }

    return isValid;
  }

  function showError(input, errorMessage) {
    const formGroup = input.parentElement;
    const errorElement = formGroup.querySelector('.error-message');

    if (errorElement) {
      errorElement.textContent = errorMessage;
    } else {
      const errorElement = document.createElement('p');
      errorElement.classList.add('error-message');
      errorElement.textContent = errorMessage;
      formGroup.appendChild(errorElement);
    }

    formGroup.classList.add('has-error');
  }

  function hideError(input) {
    const formGroup = input.parentElement;
    const errorElement = formGroup.querySelector('.error-message');

    if (errorElement) {
      formGroup.removeChild(errorElement);
    }

    formGroup.classList.remove('has-error');
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function submitForm() {
    // Perform form submission logic
    console.log('Form submitted successfully');
  }
});
```

form.js

```js
// 21. La información de los diferentes apartados será creada dinámicamente
// 17. Se implementará una galería de imágenes
window.addEventListener('DOMContentLoaded', function () {
    const galleryContainer = document.createElement('div');
    galleryContainer.classList.add('gallery-container');

    const imagePaths = [
        './assets/js/image1.jpg',
        './assets/js/image2.jpg',
        './assets/js/image3.jpg'
    ];

    imagePaths.forEach(function (path) {
        const image = document.createElement('img');
        image.src = path;
        image.alt = 'Gallery Image';

        galleryContainer.appendChild(image);
    });

    const mainContent = document.querySelector('.main-content');
    mainContent.appendChild(galleryContainer);
});
```

gallery.js

```js
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
```

script.js