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

        const logoElement = document.createElement("img");
        logoElement.src = experiencia.logo;
        experienciaItem.appendChild(logoElement);

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

        const logoElement = document.createElement("img");
        logoElement.src = educacion.logo;
        educacionItem.appendChild(logoElement);

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