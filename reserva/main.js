document.addEventListener("DOMContentLoaded", function () {
  const tecnologias = ["HTML", "CSS", "Javascript", "Selenium"];
  const listaTecnologias = document.createElement("ul");

  for (let i = 0; i < tecnologias.length; i++) {
    const itemTecnologia = document.createElement("li");
    itemTecnologia.innerHTML = tecnologias[i];
    listaTecnologias.appendChild(itemTecnologia);
  }

  document.getElementById("tecnologias").appendChild(listaTecnologias);

  let pie = document.getElementById("footer");
  pie.addEventListener("click", function () {
    console.log("Se ha hecho clic en el footer.");
  });
});
