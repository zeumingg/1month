// Navegación por secciones
const secciones = document.querySelectorAll('.proposal-card');
let seccionActual = 0;

function mostrarSiguienteSeccion() {
  // Oculta la sección actual
  secciones[seccionActual].classList.add('hidden');

  // Avanza a la siguiente sección
  seccionActual++;

  // Muestra la siguiente sección si existe
  if (seccionActual < secciones.length) {
    secciones[seccionActual].classList.remove('hidden');
  } else {
    // Si no hay más secciones, reinicia
    seccionActual = 0;
    secciones[seccionActual].classList.remove('hidden');
  }
}



document.querySelectorAll('#continuar').forEach((boton) => {
  boton.addEventListener('click', mostrarSiguienteSeccion);
});

const fechaInicio = new Date('2025-11-01').getTime();

function actualizarContador() {
  const ahora = new Date().getTime();
  const diferencia = ahora - fechaInicio;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  document.getElementById('dias').textContent = dias;
  document.getElementById('horas').textContent = horas;
  document.getElementById('minutos').textContent = minutos;
  document.getElementById('segundos').textContent = segundos;
}

setInterval(actualizarContador, 1000);
actualizarContador();