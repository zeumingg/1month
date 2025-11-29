// =========================================================================
// GESTIÓN ROBUSTA DEL AUDIO
// =========================================================================

const musicaFondo = document.getElementById('background-music');
const volumenControl = document.getElementById('volume-control');
let audioIniciado = false; 

function iniciarAudio() {
    if (!audioIniciado) {
        musicaFondo.play().then(() => {
            musicaFondo.muted = false; 
            
            volumenControl.addEventListener('input', function() {
                musicaFondo.volume = this.value; 
            });
            musicaFondo.volume = volumenControl.value;
            
            audioIniciado = true;
            console.log("Audio iniciado y desmuteado exitosamente.");
        }).catch(error => {
            console.warn("Error al intentar iniciar la reproducción del audio:", error);
            
            musicaFondo.muted = false; 
            volumenControl.addEventListener('input', function() {
                musicaFondo.volume = this.value; 
            });
            musicaFondo.volume = volumenControl.value;
            audioIniciado = true;
        });
    }
}

// =========================================================================
// CÓDIGO EXISTENTE
// =========================================================================

const secciones = document.querySelectorAll('.proposal-card');
let seccionActual = 0;

function mostrarSiguienteSeccion() {
    iniciarAudio(); 

    secciones[seccionActual].classList.add('hidden');
    seccionActual++;

    if (seccionActual < secciones.length) {
        secciones[seccionActual].classList.remove('hidden');
    } else {
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

    const elemDias = document.getElementById('dias');
    const elemHoras = document.getElementById('horas');
    const elemMinutos = document.getElementById('minutos');
    const elemSegundos = document.getElementById('segundos');

    if (elemDias) elemDias.textContent = dias;
    if (elemHoras) elemHoras.textContent = horas;
    if (elemMinutos) elemMinutos.textContent = minutos;
    if (elemSegundos) elemSegundos.textContent = segundos;
}

setInterval(actualizarContador, 1000);
actualizarContador();
