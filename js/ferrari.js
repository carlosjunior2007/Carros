document.addEventListener("DOMContentLoaded", function() {
  var audio = document.querySelector(".audio");
  audio.volume -= .7;
  // Mostrar el loader
  document.getElementById("loader").style.display = "block";

  // Definir la duración del fake loading en milisegundos (por ejemplo, 3000ms = 3 segundos)
  var duracionFakeLoading = 4500;

  // Esperar el tiempo definido y luego ocultar el loader
  setTimeout(function () {
    document.getElementById("loader").style.opacity = "1";
    document.getElementById("loader_container").style.display = "none";
  }, duracionFakeLoading);

  const arrow = document.querySelector(".arrow");

  arrow.addEventListener('click', (e) => {
    const parentNav = e.target.closest(".nav");
    if (parentNav) {
      const currentLeft = parseInt(parentNav.style.left) || 0;
      if (currentLeft === 0) {
        parentNav.style.left = "-114px";
      } else {
        parentNav.style.left = "0";
      }
    }
  });
});
