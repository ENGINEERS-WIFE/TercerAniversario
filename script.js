const btnAbrir = document.getElementById("btnAbrirCarta");
const modal = document.getElementById("cartaModal");
const sobre = document.querySelector(".sobre");
const cerrar = document.getElementById("cerrarCarta");

btnAbrir.addEventListener("click", () => {
  modal.style.display = "flex";
  setTimeout(() => {
    sobre.classList.add("abierto");
  }, 200);
});

cerrar.addEventListener("click", () => {
  sobre.classList.remove("abierto");
  setTimeout(() => {
    modal.style.display = "none";
  }, 500);
});

/* ========================= */
/*    CORAZONES FLOTANDO    */
/* ========================= */

function crearCorazon() {
  const hearts = document.getElementById("hearts");
  const heart = document.createElement("span");
  heart.classList.add("heart");
  heart.innerHTML = "♥";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";
  hearts.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}
setInterval(crearCorazon, 700);

/* ========================= */
/*     MENSAJES SECRETOS     */
/* ========================= */

// Seleccionar los botones secretos correctamente
const botonesSecretos = document.querySelectorAll(".secret-btn");

botonesSecretos.forEach(btn => {
    btn.addEventListener("click", () => {
        const id = btn.classList.contains("s1") ? 1 :
                   btn.classList.contains("s2") ? 2 : 3;

        const modal = document.getElementById("msj" + id);
        modal.style.display = "flex";
    });
});

// Cerrar mensajes secretos
const cierresSecretos = document.querySelectorAll(".cerrar-secreto");
cierresSecretos.forEach(cerrar => {
    cerrar.addEventListener("click", () => {
        cerrar.parentElement.parentElement.style.display = "none";
    });
});

// Cerrar al hacer clic fuera
const modalesSecretos = document.querySelectorAll(".modal-secreto");
modalesSecretos.forEach(modal => {
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});

/* ========================================= */
/*      POSICIONES ALEATORIAS DE BOTONES     */
/* ========================================= */

function posicionesAleatorias() {
    document.documentElement.style.setProperty('--rand1', Math.random() * 150);
    document.documentElement.style.setProperty('--rand2', Math.random() * 150);
    document.documentElement.style.setProperty('--rand3', Math.random() * 150);
    document.documentElement.style.setProperty('--rand4', Math.random() * 150);
    document.documentElement.style.setProperty('--rand5', Math.random() * 150);
    document.documentElement.style.setProperty('--rand6', Math.random() * 150);
}

posicionesAleatorias();

/* ========================= */
/*  FOTO QUE SE REVELA       */
/* ========================= */

const foto = document.querySelector(".img-revelar");

if (foto) {
  foto.addEventListener("click", () => {
    foto.classList.add("visible");
  });
}

/* ========================= */
/*      FOTO POLAROID        */
/* ========================= */

const polaroids = document.querySelectorAll(".polaroid");

polaroids.forEach(pol => {
    pol.addEventListener("click", () => {
        pol.classList.add("visible");
    });
});

/* ========================= */
/*   REVELAR FOTO POLAROID  */
/* ========================= */

window.addEventListener("load", () => {
    const polaroid = document.querySelector(".polaroid");

    setTimeout(() => {
        polaroid.classList.add("visible");
    }, 1200);
});

/* =============================== */
/*         BOTONES SORPRESA        */
/* =============================== */

const botonesSorpresa = document.querySelectorAll(".btn-sorpresa");
const efectoContenedor = document.getElementById("efecto-contenedor");

botonesSorpresa.forEach(btn => {
    btn.addEventListener("click", () => {
        const mensaje = btn.dataset.msg;
        crearEfecto(btn.textContent.includes("Flores") ? "🌸" :
                    btn.textContent.includes("Corazones") ? "💖" :
                    "✨");
       mostrarMensaje(mensaje);
    });
});

function crearEfecto(simbolo) {
    for (let i = 0; i < 10; i++) {
        const elem = document.createElement("div");
        elem.classList.add("efecto-item");
        elem.textContent = simbolo;

        const size = Math.random() * 20 + 20;
        elem.style.fontSize = size + "px";

        elem.style.left = Math.random() * 100 + "%";
        elem.style.top = "70%";

        efectoContenedor.appendChild(elem);

        setTimeout(() => elem.remove(), 2500);
    }
}

/* =============================== */
/*         MENSAJE FLOTANTE        */
/* =============================== */

function mostrarMensaje(texto) {
    const caja = document.getElementById("mensaje-flotante");
    caja.textContent = texto;

    caja.style.display = "block";

    setTimeout(() => {
        caja.style.display = "none";
    }, 2500);
}

/* =============================== */
/*      MÚSICA DE FONDO            */
/* =============================== */

const music = document.getElementById("bg-music");
const btnMusic = document.getElementById("music-btn");
let musicPlaying = false;

btnMusic.addEventListener("click", () => {
   console.log ("Botón clickeado");
    if (!musicPlaying) {
        music.play();
        btnMusic.textContent = "⏸️ Pausar";
        musicPlaying = true;
    } else {
        music.pause();
        btnMusic.textContent = "🎵 Música";
        musicPlaying = false;
    }
});

/* =============================== */
/*      AUDIO DE LA CARTA          */
/* =============================== */

const cartaAudio = document.getElementById("carta-audio"); // Asegurate que exista en el HTML

btnAbrir.addEventListener("click", () => {
    modal.style.display = "flex";

    // Reproducir audio de la carta
    if (cartaAudio) {
        cartaAudio.currentTime = 0; // empieza desde el inicio
        cartaAudio.play();
    }

    setTimeout(() => {
        sobre.classList.add("abierto");
    }, 200);
});

cerrar.addEventListener("click", () => {
    sobre.classList.remove("abierto");

    // Pausar audio de la carta al cerrarla
    if (cartaAudio) cartaAudio.pause();

    setTimeout(() => {
        modal.style.display = "none";
    }, 500);
});

/* =============================== */
/*         GALERÍA DE FOTOS        */
/* =============================== */

const btnGaleria = document.getElementById("btnGaleria");
const galeriaModal = document.getElementById("galeriaModal");
const cerrarGaleria = document.querySelector(".cerrar-galeria");
const slider = document.querySelector(".galeria-slider");
const flechaIzq = document.querySelector(".flecha.izquierda");
const flechaDer = document.querySelector(".flecha.derecha");

let fotos = [];
let indiceActual = 0;

// Cargar las 20 fotos automáticamente
for (let i = 4; i <= 23; i++) {
    fotos.push(`img/fotos${i}.jpg`);
}

// Función para mostrar la foto actual
function mostrarFoto(indice) {
    slider.innerHTML = `<img src="${fotos[indice]}" class="slider-img" />`;
    const img = slider.querySelector(".slider-img");

    // Espera un momento y agrega la clase para hacer el fade in
    setTimeout(() => {
        img.classList.add("mostrar");
    }, 50);
}

// Abrir modal
btnGaleria.addEventListener("click", () => {
    galeriaModal.style.display = "flex";
    mostrarFoto(indiceActual);
});

// Cerrar modal
cerrarGaleria.addEventListener("click", () => {
    galeriaModal.style.display = "none";
});

// Navegación con flechas
flechaIzq.addEventListener("click", () => {
    indiceActual = (indiceActual - 1 + fotos.length) % fotos.length;
    mostrarFoto(indiceActual);
});

flechaDer.addEventListener("click", () => {
    indiceActual = (indiceActual + 1) % fotos.length;
    mostrarFoto(indiceActual);
});

// Cerrar al hacer clic fuera del contenido
galeriaModal.addEventListener("click", (e) => {
    if (e.target === galeriaModal) galeriaModal.style.display = "none";
});

// Swipe para móviles (muy básico)
let startX = 0;
slider.addEventListener("touchstart", e => { startX = e.touches[0].clientX; });
slider.addEventListener("touchend", e => {
    let endX = e.changedTouches[0].clientX;
    if (endX - startX > 50) flechaIzq.click();
    else if (startX - endX > 50) flechaDer.click();
});

/* === GESTIÓN DEL MENÚ DE JUEGOS, SUBMODALES Y JUEGO 1 === */
document.addEventListener('DOMContentLoaded', () => {
  const btnJuegos = document.getElementById('btnJuegos');           // botón que ya tienes en HTML
  const modalJuegos = document.getElementById('modalJuegos');     // modal principal
  const cerrarJuegos = document.getElementById('cerrarJuegos');   // X del modal principal (si existe)
  const botonesJuegos = document.querySelectorAll('.juego-btn');   // botones que abren submodales

  // Seguridad: si no hay modalJuegos ó btnJuegos, no rompemos nada
  if (btnJuegos && modalJuegos) {
    btnJuegos.addEventListener('click', () => {
      modalJuegos.style.display = 'flex';
    });
  }

  // X para cerrar modal principal (si existe)
  if (cerrarJuegos && modalJuegos) {
    cerrarJuegos.addEventListener('click', () => {
      modalJuegos.style.display = 'none';
    });
  }

  // Cerrar modal principal al hacer clic fuera del cuadro (si existe)
  if (modalJuegos) {
    modalJuegos.addEventListener('click', (e) => {
      if (e.target === modalJuegos) modalJuegos.style.display = 'none';
    });
  }

  // Cuando se elige un juego: cerrar modal principal (si está abierto) y abrir submodal correspondiente
  if (botonesJuegos && botonesJuegos.length) {
    botonesJuegos.forEach(btn => {
      btn.addEventListener('click', () => {
        const n = btn.dataset.juego;
        // cerrar modal principal si existe
        if (modalJuegos) modalJuegos.style.display = 'none';

        // abrir submodal
        const submodal = document.getElementById('modalJuego' + n);
        if (submodal) submodal.style.display = 'flex';
      });
    });
  }

  // Cerrar submodales al clicar en la X
  document.querySelectorAll('.cerrar-submodal').forEach(x => {
    x.addEventListener('click', () => {
      const n = x.dataset.juego;
      const idModal = document.getElementById('modalJuego' + n);
      if (idModal) idModal.style.display = 'none';
    });
  });

  // Cerrar submodal al hacer clic fuera del contenido
  document.querySelectorAll('.modal-juego').forEach(m => {
    m.addEventListener('click', (e) => {
      if (e.target === m) m.style.display = 'none';
    });
  });

  /* ===========================
     JUEGO 1: ENCONTRAR EL CORAZÓN
     (aseguramos que los elementos existan)
     =========================== */
  const btnStartJuego1 = document.getElementById('btnStartJuego1');
  const areaJuego1 = document.getElementById('areaJuego1');
  const mensajeJuego1 = document.getElementById('mensajeJuego1');

  if (btnStartJuego1 && areaJuego1 && mensajeJuego1) {
    let corazonesEncontrados = 0;

    function aparecerCorazon() {
      if (corazonesEncontrados >= 5) return;

      const corazon = document.createElement('span');
      corazon.classList.add('corazon-juego1');
      corazon.textContent = '💖';
      corazon.style.position = 'absolute';

      // posición aleatoria dentro del área (con margen para que no salga cortado)
      const maxX = Math.max(0, areaJuego1.clientWidth - 50);
      const maxY = Math.max(0, areaJuego1.clientHeight - 50);
      const x = Math.random() * maxX;
      const y = Math.random() * maxY;

      corazon.style.left = x + 'px';
      corazon.style.top = y + 'px';
      corazon.style.cursor = 'pointer';
      corazon.style.fontSize = '28px';
      corazon.style.transition = 'transform 0.12s ease';

      areaJuego1.appendChild(corazon);

      // animación "pop" al tocar
      corazon.addEventListener('click', () => {
        corazon.style.transform = 'scale(1.6)';
        setTimeout(() => corazon.remove(), 150);
        corazonesEncontrados++;

        mensajeJuego1.style.display = 'block';
        mensajeJuego1.textContent = `💗 ¡Encontraste mi corazón! (${corazonesEncontrados}/5) 💗`;

        if (corazonesEncontrados < 5) {
          setTimeout(aparecerCorazon, 800);
        } else {
          mensajeJuego1.textContent = '💞 ¡Así de rápido me enamoraste! 💞';
          mensajeJuego1.style.display = 'block';
        }
      });
    }

    btnStartJuego1.addEventListener('click', () => {
      corazonesEncontrados = 0;
      areaJuego1.innerHTML = '';
      mensajeJuego1.style.display = 'none';
      // small delay para asegurar render
      setTimeout(aparecerCorazon, 200);
    });
  } // fin juego1 guard

}); // fin DOMContentLoaded

// Juego 2 //
document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("startGame2").addEventListener("click", startGame2);

});

let timerInterval2;
let timeLeft2 = 10;
let juego2Terminado = false; // ← NUEVO

function startGame2() {
    const area = document.getElementById("gameArea2");
    area.innerHTML = "";
    timeLeft2 = 10;
    juego2Terminado = false; // ← reiniciar control
    document.getElementById("timer2").textContent = "⏳ 10";

    // Crear corazones falsos
    for (let i = 0; i < 15; i++) {
        let falso = document.createElement("div");
        falso.classList.add("corazon-falso");
        falso.textContent = "💓";

        falso.style.top = Math.random() * 250 + "px";
        falso.style.left = Math.random() * 300 + "px";

        falso.addEventListener("click", perderJuego2);

        area.appendChild(falso);
    }

    // Crear el corazón verdadero
    let real = document.createElement("div");
    real.classList.add("corazon-real");
    real.textContent = "💓";

    real.style.top = Math.random() * 250 + "px";
    real.style.left = Math.random() * 300 + "px";

    real.addEventListener("click", ganarJuego2);

    area.appendChild(real);

    // Iniciar temporizador
    timerInterval2 = setInterval(() => {
        if (juego2Terminado) return;

        timeLeft2--;
        document.getElementById("timer2").textContent = "⏳ " + timeLeft2;

        if (timeLeft2 <= 0) {
            clearInterval(timerInterval2);
            perderJuego2();
        }
    }, 1000);
}

function ganarJuego2() {
    if (juego2Terminado) return; // ← evita doble ejecución
    juego2Terminado = true;

    clearInterval(timerInterval2);

    // bloquear corazones
    bloquearCorazones2();

    mostrarModal2("💓 Sabía que lo lograrías, mi amor. 💓");
}

function perderJuego2() {
    if (juego2Terminado) return; // ← evita doble ejecución
    juego2Terminado = true;

    clearInterval(timerInterval2);

    // bloquear corazones
    bloquearCorazones2();

    mostrarModal2("No encontraste mi corazón a tiempo… pero igual ya es tuyo. 💕");
}

function bloquearCorazones2() {
    const area = document.getElementById("gameArea2");
    area.querySelectorAll("div").forEach(c => {
        c.replaceWith(c.cloneNode(true)); // ← elimina listeners de un saque
    });
}

function mostrarModal2(msg) {
    document.getElementById("resultMessage2").textContent = msg;
    document.getElementById("modal2").style.display = "flex";
}

document.getElementById("closeModal2").addEventListener("click", () => {
    document.getElementById("modal2").style.display = "none";
});

/* ----------- QUIZ ROMÁNTICO ----------- */

const preguntasQuiz = [
    {
        pregunta: "1. ¿Qué es lo que más te gusta de mí?",
        opciones: [
            { txt: "Mis ojitos.", tipo: "sweet", puntos: 1 },
            { txt: "Todo de mí.", tipo: "love", puntos: 2 },
            { txt: "Yo en el vestidito gris.", tipo: "hot", puntos: 3 }
        ]
    },
    {
        pregunta: "2. ¿Qué te gustaría que pase en nuestro próximo encuentro?",
        opciones: [
            { txt: "Un abrazo de esos que me calman todo.", tipo: "sweet", puntos: 1 },
            { txt: "Que me des besos que me dejen sin aire.", tipo: "love", puntos: 2 },
            { txt: "Videollamada que termine con mis piernas temblando.", tipo: "hot", puntos: 3 }
        ]
    },
    {
        pregunta: "3. ¿Qué tipo de mensajes preferís que te mande?",
        opciones: [
            { txt: "Mensajes tiernos todo el día.", tipo: "sweet", puntos: 1 },
            { txt: "Mensajes románticos intensos.", tipo: "love", puntos: 2 },
            { txt: "Esos que llevan a mandar mensajes con una mano.", tipo: "hot", puntos: 3 }
        ]
    },
    {
        pregunta: "4. ¿Cómo describirías nuestra conexión?",
        opciones: [
            { txt: "Como un cuento dulce.", tipo: "sweet", puntos: 1 },
            { txt: "Una relación que es perfecta.", tipo: "love", puntos: 2 },
            { txt: "Una tensión perfecta entre dulce y hot.", tipo: "hot", puntos: 3 }
        ]
    },
    {
        pregunta: "5. ¿Qué harías si estuviéramos ahora juntos?",
        opciones: [
            { txt: "Acurrucarnos y hablar bajito.", tipo: "sweet", puntos: 1 },
            { txt: "Abrazarte fuerte y besarte lento.", tipo: "love", puntos: 2 },
            { txt: "Perdernos en un beso que no termine ahí.", tipo: "hot", puntos: 3 }
        ]
    },
    {
        pregunta: "6. ¿Cuál de estas citas elegirías?",
        opciones: [
            { txt: "Películas y mimos.", tipo: "sweet", puntos: 1 },
            { txt: "Amanecer juntos abrazados.", tipo: "love", puntos: 2 },
            { txt: "Una noche donde no podamos quitarnos las manos de encima.", tipo: "hot", puntos: 3 }
        ]
    },
    {
        pregunta: "7. ¿Cómo preferís mis mensajes cuando me extrañás?",
        opciones: [
            { txt: "Tiernos, de esos que derriten.", tipo: "sweet", puntos: 1 },
            { txt: "Intensos, profundos, de alma.", tipo: "love", puntos: 2 },
            { txt: "Los que suben la temperatura.", tipo: "hot", puntos: 3 }
        ]
    },
    {
        pregunta: "8. Si hoy nos viéramos…",
        opciones: [
            { txt: "Habría un abrazo eterno.", tipo: "sweet", puntos: 1 },
            { txt: "Nos besaríamos hasta olvidarnos del reloj.", tipo: "love", puntos: 2 },
            { txt: "Nos daríamos mucho amor, que nuestro cuerpo lo exprese.", tipo: "hot", puntos: 3 }
        ]
    }
];

let indiceQuiz = 0;
let puntajeQuiz = 0;

document.querySelector('[data-juego="3"]').addEventListener("click", () => {
    document.getElementById("modalJuego3").style.display = "flex";
    reiniciarQuiz();
    iniciarPregunta();
});

function iniciarPregunta() {
    const cont = document.getElementById("quizContainer");
    const preguntaEl = document.getElementById("quizPregunta");
    const opcionesEl = document.getElementById("quizOpciones");
    const progresoEl = document.getElementById("quizProgreso");

    let p = preguntasQuiz[indiceQuiz];

    cont.classList.add("fadeInRight");

    preguntaEl.textContent = p.pregunta;
    opcionesEl.innerHTML = "";
    progresoEl.textContent = `Pregunta ${indiceQuiz + 1} de 8`;

    p.opciones.forEach((op, i) => {
        let btn = document.createElement("button");
        btn.textContent = op.txt;
        btn.classList.add("opcion-btn", `opcion-${op.tipo}`);

        btn.onclick = () => {
            btn.classList.add("active");

            puntajeQuiz += op.puntos;

            cont.classList.remove("fadeInRight");
            cont.classList.add("fadeOutLeft");

            setTimeout(() => {
                cont.classList.remove("fadeOutLeft");

                indiceQuiz++;

                if (indiceQuiz >= preguntasQuiz.length) {
                    mostrarFinal();
                    return;
                }

                iniciarPregunta();
            }, 500);
        };

        opcionesEl.appendChild(btn);
    });
}

function mostrarFinal() {
    document.getElementById("quizContainer").style.display = "none";
    let final = document.getElementById("quizFinal");
    final.style.display = "block";

    let texto = "";

    if (puntajeQuiz <= 9) {
        texto = `Amor, cada respuesta es un beso a mi corazón. 
Sos tierno sin esfuerzo, dulce sin intentarlo,
Y sin que te des cuenta, haces que todo sea más llevadero. 
Gracias por ser mi lugar seguro incluso en la distancia.`;
    }
    else if (puntajeQuiz <= 15) {
        texto = `Te amo.  
Tus respuestas hablan de un amor profundo, intenso y nuestro. 
Lo que tenemos es hermoso, fuerte y real.`;
    }
    else {
        texto = `Tus respuestas dicen mucho...  
Me quieres cerca y no eres el único.  
Varias veces hemos hablado de cómo sería nuestro primer encuentro…  
Habrían pocas palabras, y dejaríamos que nuestros cuerpos hablen por sí solos. 🔥`;
    }

    document.getElementById("quizResultadoTexto").textContent = texto;

    document.getElementById("btnCerrarQuiz").onclick = () => {
        document.getElementById("modalJuego3").style.display = "none";
        reiniciarQuiz();
    };
}

function reiniciarQuiz() {
    indiceQuiz = 0;
    puntajeQuiz = 0;

    document.getElementById("quizFinal").style.display = "none";
    document.getElementById("quizContainer").style.display = "block";
}

// =======================
// JUEGO 4 - SOPLA LAS ROSAS (cursor)
// =======================
function iniciarJuego4() {
  const area = document.getElementById("areaGame4");
  const restantesSpan = document.getElementById("restantes4");
  const finalMsg = document.getElementById("finalMessage4");

  area.innerHTML = "";
  finalMsg.style.display = "none";

  const totalRosas = 100;
  let rosasRestantes = totalRosas;

  const areaRect = area.getBoundingClientRect();
  const areaW = areaRect.width;
  const areaH = areaRect.height;

  for (let i = 0; i < totalRosas; i++) {
    const rose = document.createElement("div");
    rose.classList.add("rosa-emoji");
    rose.textContent = "🌹";

    const size = 38;
    const maxX = areaW - size;
    const maxY = areaH - size;

    rose.style.left = Math.random() * maxX + "px";
    rose.style.top = Math.random() * maxY + "px";

    area.appendChild(rose);
  }

  restantesSpan.textContent = totalRosas;

  // Soplado al pasar el cursor
  area.onmousemove = e => {
    const rosas = document.querySelectorAll(".rosa-emoji");

    rosas.forEach(rose => {
      const rect = rose.getBoundingClientRect();
      const distancia = Math.hypot(
        e.clientX - (rect.left + rect.width / 2),
        e.clientY - (rect.top + rect.height / 2)
      );

      if (distancia < 60 && rose.style.opacity !== "0") {
        rose.style.opacity = "0";
        rose.style.transform = "scale(0.1) rotate(20deg)";

        rosasRestantes--;
        restantesSpan.textContent = rosasRestantes;

        if (rosasRestantes === 0) {
          document.getElementById("areaGame4").style.display = "none";
          document.getElementById("contador4").style.display = "none";

          setTimeout(() => {
            finalMsg.style.display = "block";
          }, 400);
        }
      }
    });
  };
}

// Escuchador solo una vez
document.getElementById("startGame4").addEventListener("click", iniciarJuego4);

  // Cerrar modal y resetear
document.getElementById("closeGame4").onclick = () => {
    document.getElementById("modalJuego4").style.display = "none";
    resetJuego4();
};

// Función de reset del juego 4
function resetJuego4() {
    document.getElementById("finalMessage4").style.display = "none";
    document.getElementById("areaGame4").style.display = "block";
    document.getElementById("contador4").style.display = "block";

    document.getElementById("areaGame4").innerHTML = "";
    document.getElementById("restantes4").textContent = "100";
}

// =======================
// JUEGO 5 - PUZZLE 5x5 - Click en cuadrícula
// =======================

const startPuzzle5Btn = document.getElementById("startPuzzle5");
const puzzleArea = document.getElementById("puzzle-area");
const finalPuzzleMsg = document.getElementById("puzzle-final-message");
const closePuzzle5Btn = document.getElementById("closePuzzle5");

let piezas = [];
let selectedPiece = null;

startPuzzle5Btn.addEventListener("click", () => {
    finalPuzzleMsg.style.display = "none";
    puzzleArea.innerHTML = "";
    piezas = [];
    selectedPiece = null;

    const filas = 5;
    const cols = 5;
    const imgSrc = "img/fotos7.jpg";
    const pieceSize = puzzleArea.clientWidth / cols;

    // Crear posiciones de la cuadrícula
    const posiciones = [];
    for (let r = 0; r < filas; r++) {
        for (let c = 0; c < cols; c++) {
            posiciones.push({top: r * pieceSize, left: c * pieceSize});
        }
    }

    // Mezclar posiciones
    posiciones.sort(() => Math.random() - 0.5);

    // Crear piezas
    let index = 0;
    for (let r = 0; r < filas; r++) {
        for (let c = 0; c < cols; c++) {
            const pieza = document.createElement("div");
            pieza.classList.add("puzzle-piece");
            pieza.style.backgroundImage = `url(${imgSrc})`;
            pieza.style.backgroundPosition = `${(c * 100)/(cols-1)}% ${(r * 100)/(filas-1)}%`;
            pieza.style.width = `${pieceSize}px`;
            pieza.style.height = `${pieceSize}px`;

            // Asignar posición inicial aleatoria de la cuadrícula
            pieza.style.top = posiciones[index].top + "px";
            pieza.style.left = posiciones[index].left + "px";
            index++;

            pieza.dataset.row = r;
            pieza.dataset.col = c;

            puzzleArea.appendChild(pieza);
            piezas.push(pieza);

            pieza.addEventListener("click", () => handlePieceClick(pieza));
        }
    }
});

// Manejo de clicks para intercambiar
function handlePieceClick(pieza) {
    if (!selectedPiece) {
        selectedPiece = pieza;
        pieza.style.border = "2px solid #ff78d1"; // destacar selección
    } else if (selectedPiece === pieza) {
        selectedPiece.style.border = "none";
        selectedPiece = null;
    } else {
        // Intercambiar posiciones
        const tempTop = pieza.style.top;
        const tempLeft = pieza.style.left;
        pieza.style.top = selectedPiece.style.top;
        pieza.style.left = selectedPiece.style.left;
        selectedPiece.style.top = tempTop;
        selectedPiece.style.left = tempLeft;

        selectedPiece.style.border = "none";
        selectedPiece = null;

        checkPuzzle5();
    }
}

// Revisar si el puzzle está completo
function checkPuzzle5() {
    let correcto = true;
    const pieceSize = puzzleArea.clientWidth / 5;

    piezas.forEach(p => {
        const row = Math.round(parseInt(p.style.top) / pieceSize);
        const col = Math.round(parseInt(p.style.left) / pieceSize);
        if (parseInt(p.dataset.row) !== row || parseInt(p.dataset.col) !== col) correcto = false;
    });

    if (correcto) finalPuzzleMsg.style.display = "block";
}

// Cerrar puzzle
closePuzzle5Btn.addEventListener("click", () => {
    document.getElementById("modalJuego5").style.display = "none";
    puzzleArea.innerHTML = "";
    selectedPiece = null;
});

// =======================
// JUEGO 6 - GIRA LA BOTELLA (mejorado)
// =======================
const bottle = document.getElementById("bottle");
const truthDareModal = document.getElementById("truth-dare-modal");
const questionDareDisplay = document.getElementById("question-dare-display");
const questionDareText = document.getElementById("question-dare-text");
const closeQuestionDareBtn = document.getElementById("closeQuestionDare");

const truths = [
    "¿Qué cosa pequeña que hago te hace más feliz? 🥰",
    "¿Hay algo que siempre hayas querido decirme y nunca dijiste? 🤫",
    "Si pudieras describirme con una sola palabra, ¿cuál sería? 🌟",
    "¿Cuál es tu recuerdo favorito de nuestros momentos juntos? 💌"
];

const dares = [
    "Haz un bailecito corto improvisado frente a la cámara. 💃🕺",
    "Dibuja un corazón con tu nariz en el celular y súbelo a Instagram. 📱💓",
    "Manda una foto tuya con una olla en tu cabeza. 🍲😆",
    "Manda un sticker que represente lo que sentís por mí en este momento. 🫶"
];

let spinning = false;

bottle.addEventListener("click", () => {
    if(spinning) return;
    spinning = true;

    // Reiniciar transición momentáneamente para reiniciar la rotación
    bottle.style.transition = "none";
    bottle.style.transform = "rotate(0deg)";

    // Forzar reflow para que el cambio se aplique
    bottle.offsetWidth; 

    // Ahora sí aplicamos el giro grande
    const baseSpins = 1080 + Math.floor(Math.random() * 1080); 
    const finalOffset = Math.random() * 30 - 15;
    const totalDeg = baseSpins + finalOffset;

    bottle.style.transition = "transform 3s cubic-bezier(0.33, 1, 0.68, 1)";
    bottle.style.transform = `rotate(${totalDeg}deg)`;

    setTimeout(() => {
        spinning = false;

        const finalDeg = totalDeg % 360;
        let direction = finalDeg <= 180 ? "right" : "down";

        truthDareModal.style.display = "block";
        truthDareModal.dataset.direction = direction;
    }, 3000);
});

// VERDAD
document.querySelector(".truth-btn").addEventListener("click", () => {
    truthDareModal.style.display = "none";
    const rand = Math.floor(Math.random() * truths.length);
    questionDareText.innerText = truths[rand];
    questionDareDisplay.style.display = "block";
});

// RETO
document.querySelector(".dare-btn").addEventListener("click", () => {
    truthDareModal.style.display = "none";
    const rand = Math.floor(Math.random() * dares.length);
    questionDareText.innerText = dares[rand];
    questionDareDisplay.style.display = "block";
});

// Cerrar pregunta/reto
closeQuestionDareBtn.addEventListener("click", () => {
    questionDareDisplay.style.display = "none";
});

// =======================
// JUEGO 7 - ADIVINA LA CANCIÓN
// =======================
document.addEventListener("DOMContentLoaded", () => {
    const startJuego7Btn = document.getElementById("startJuego7");
    const audio7 = document.getElementById("audio7");
    const opciones7 = document.querySelectorAll("#opciones7 .opcion7");
    const resultado7 = document.getElementById("resultado7");
    const cerrarJuego7Btn = document.getElementById("cerrarJuego7");

    const canciones7 = [
        {
            archivo: "audio/fragmento1Bibi.mp3",
            correcta: "Scott and Zelda - BIBI",
            opciones: ["Tokyo Night - BIBI", "Scott and Zelda - BIBI", "Firestarter - BIBI"]
        },
        {
            archivo: "audio/fragmento2Gaga.mp3",
            correcta: "Die with a smile - Lady Gaga y Bruno Mars",
            opciones: ["Million Reasons - Lady Gaga", "Shallow - Lady Gaga & Bradley Cooper", "Die with a smile - Lady Gaga y Bruno Mars"]
        },
        {
            archivo: "audio/fragmento3Doit.mp3",
            correcta: "Do it for me - Rosenfeld",
            opciones: ["Do it for me - Rosenfeld", "Be Mine - Rosenfeld", "Stay Close - Rosenfeld"]
        },
        {
            archivo: "audio/fragmento4Love.mp3",
            correcta: "Love Story - Indila",
            opciones: ["Tourner Dans Le Vide - Indila", "Love Story - Indila", "S.O.S Indila"]
        },
        {
            archivo: "audio/fragmento5Espresso.mp3",
            correcta: "Espresso - Sabrina Carpenter",
            opciones: ["Espresso - Sabrina Carpenter", "Please Please Please - Sabrina Carpenter", "Feather - Sabrina Carpenter"]
        }
    ];

    let indiceActual7 = 0;

    function cargarCancion7(indice) {
        const cancion = canciones7[indice];
        audio7.src = cancion.archivo;
        audio7.play();

        opciones7.forEach((btn, i) => {
            btn.textContent = cancion.opciones[i];
            btn.disabled = false;
            btn.style.backgroundColor = "#fff";
            btn.style.color = "#000";
        });
    }

    opciones7.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const cancion = canciones7[indiceActual7];
            if (e.target.textContent === cancion.correcta) {
                e.target.style.backgroundColor = "#78ff9a";
            } else {
                e.target.style.backgroundColor = "#ff6b78";
            }

            opciones7.forEach(b => b.disabled = true);

            setTimeout(() => {
                indiceActual7++;
                if (indiceActual7 < canciones7.length) {
                    cargarCancion7(indiceActual7);
                } else {
                    resultado7.style.display = "block";
                }
            }, 1000);
        });
    });

    startJuego7Btn.addEventListener("click", () => {
        indiceActual7 = 0;
        resultado7.style.display = "none";
        cargarCancion7(indiceActual7);
    });

    cerrarJuego7Btn.addEventListener("click", () => {
        document.getElementById("modalJuego7").style.display = "none";
        audio7.pause();
        audio7.currentTime = 0;
    });

    // Cerrar modal con "×"
    document.querySelector("#modalJuego7 .cerrar-submodal").addEventListener("click", () => {
        document.getElementById("modalJuego7").style.display = "none";
        audio7.pause();
        audio7.currentTime = 0;
    });
});

// =======================
// JUEGO 8 - CAJA FUERTE
// =======================
const codigo8 = document.getElementById("codigo8");
const botonesNum = document.querySelectorAll(".btn-num");
const mensaje8 = document.getElementById("mensaje8");
const cofre8 = document.getElementById("cofre8");
const confirmar8 = document.getElementById("confirmar8");
const modalJuego8 = document.getElementById("modalJuego8");
const cerrarJuego8 = document.getElementById("cerrarJuego8");

let codigoIngresado = "";

// =======================
// TECLADO DIGITAL
// =======================
botonesNum.forEach(btn => {
    btn.addEventListener("click", () => {

        if (btn.classList.contains("borrar")) {
            codigoIngresado = codigoIngresado.slice(0, -1);
        } 
        else if (!btn.classList.contains("ok")) {
            if (codigoIngresado.length < 4) {
                codigoIngresado += btn.dataset.num;
            }
        }

        codigo8.value = codigoIngresado;
    });
});

// =======================
// CONFIRMAR CÓDIGO
// =======================
confirmar8.addEventListener("click", () => {
    if (codigoIngresado === "1712") {

        cofre8.classList.remove("cerrado");
        cofre8.classList.add("abierto", "brillo");

        mensaje8.style.display = "block";
        mensaje8.innerHTML = "La caja se abrió… y yo también cuando escucho tu voz 😏💦";

    } else {

        cofre8.classList.add("temblar");

        mensaje8.style.display = "block";
        mensaje8.innerHTML = "Código incorrecto, mi amor 😕";

        setTimeout(() => {
            mensaje8.style.display = "none";
            cofre8.classList.remove("temblar");
        }, 1200);
    }
});


// =======================
// RESETEAR AL ABRIR EL MODAL
// =======================
document.querySelector('[data-juego="8"]').addEventListener("click", () => {
    resetJuego8();
});

// =======================
// RESETEAR AL CERRAR
// =======================
cerrarJuego8.addEventListener("click", () => {
    resetJuego8();
});

// =======================
// FUNCIÓN DE RESET TOTAL
// =======================
function resetJuego8() {

    codigoIngresado = "";
    codigo8.value = "";

    // Quitar clases
    cofre8.classList.remove("abierto", "brillo", "temblar");
    cofre8.classList.add("cerrado");

    // Ocultar el mensaje
    mensaje8.style.display = "none";
}