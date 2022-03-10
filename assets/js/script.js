// INICIO
//Carousel
let carouselItem = document.getElementsByClassName("carousel-item");
let next = document.getElementsByClassName("control-next")[0];
let prev = document.getElementsByClassName("control-prev")[0];

if (next != undefined && prev != undefined) {
  next.addEventListener("click", cambiarNext);
  prev.addEventListener("click", cambiarPrev);
}

function cambiarNext() {
  for (let i = 0; i < carouselItem.length; i++) {
    let active = carouselItem[i].classList.contains("active");
    let bgColor = "";
    if (active) {
      switch (i) {
        case 0:
          bgColor = "#211261";
          break;
        case 1:
          bgColor = "#7dba00";
          break;
        case 2:
          bgColor = "#800080";
          break;

        default:
          break;
      }
      aplicarCambio(bgColor);
    }
  }
}

function cambiarPrev() {
  for (let i = 0; i < carouselItem.length; i++) {
    let active = carouselItem[i].classList.contains("active");
    let bgColor = "";
    if (active) {
      switch (i) {
        case 0:
          bgColor = "#7dba00";
          break;
        case 1:
          bgColor = "#800080";
          break;
        case 2:
          bgColor = "#211261";
          break;

        default:
          break;
      }
      aplicarCambio(bgColor);
    }
  }
}

function aplicarCambio(bgColor) {
  next.style.color = bgColor;
  let grid = window.matchMedia("(min-width: 992px)");
  if (!grid.matches) {
    prev.style.color = bgColor;
  }
}

// PRODUCTOS
// Lineas de productos
let lineas = document.getElementById("productos-lineas");
let btnLineas = "";

if (lineas != undefined) {
  btnLineas = lineas.getElementsByClassName("btn-secundario");
}

for (let i = 0; i < btnLineas.length; i++) {
  btnLineas[i].addEventListener("click", function () {
    this.classList.toggle("btn-clicked");
  });
}
