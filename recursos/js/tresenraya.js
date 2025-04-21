const celdas = document.querySelectorAll(".celda");
const mensaje = document.getElementById("mensaje");
const botonReiniciar = document.getElementById("botonReiniciar");
const marcadorX = document.getElementById("marcadorX");
const marcadorO = document.getElementById("marcadorO");
const modoIA = document.getElementById("modoIA");

let turno = "X";
let tablero = ["", "", "", "", "", "", "", "", ""];
let juegoActivo = true;
let victoriasX = 0;
let victoriasO = 0;
let contraIA = false;


const imagenX = "../../html/imagenX.jpg";
const imagenO = "../../html/imagenO.jpg";


const sonidoX = new Audio("../../html/clickX.mp3"); 
const sonidoO = new Audio("../../html/clickO.mp3");

const combinacionesGanadoras = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function manejarClick(evento) {
    const index = evento.target.dataset.index;
    if (tablero[index] === "" && juegoActivo) {
        tablero[index] = turno;
        
        const img = document.createElement("img"); 
        img.src = turno === "X" ? imagenX : imagenO; 
        img.alt = turno;
        evento.target.appendChild(img); 
        evento.target.classList.add("marcado");
        
        
        if (turno === "X") {
            sonidoX.play();
        } else {
            sonidoO.play();
        }

        if (verificarGanador()) {
            mensaje.textContent = `¡${turno} gana!`;
            actualizarMarcador(turno);
            sonidoVictoria();
            juegoActivo = false;
            return;
        }

        if (tablero.every(celda => celda !== "")) {
            mensaje.textContent = "¡Empate!";
            juegoActivo = false;
            return;
        }

        turno = turno === "X" ? "O" : "X";
        mensaje.textContent = `Turno de ${turno}`;

        if (contraIA && turno === "O") {
            setTimeout(turnoIA, 500);
        }
    }
}

function verificarGanador() {
    return combinacionesGanadoras.some(combinacion => {
        return combinacion.every(index => tablero[index] === turno);
    });
}

function actualizarMarcador(ganador) {
    if (ganador === "X") {
        victoriasX++;
        marcadorX.textContent = victoriasX;
    } else {
        victoriasO++;
        marcadorO.textContent = victoriasO;
    }
}

function turnoIA() {
    let movimientosDisponibles = tablero.map((celda, index) => celda === "" ? index : null).filter(index => index !== null);
    let movimientoAleatorio = movimientosDisponibles[Math.floor(Math.random() * movimientosDisponibles.length)];

    if (movimientoAleatorio !== undefined) {
        tablero[movimientoAleatorio] = "O";
        
        const img = document.createElement("img");
        img.src = imagenO;
        img.alt = "O";
        celdas[movimientoAleatorio].appendChild(img);

        celdas[movimientoAleatorio].classList.add("marcado");
        sonidoMovimiento();

        if (verificarGanador()) {
            mensaje.textContent = "¡O gana!";
            actualizarMarcador("O");
            sonidoVictoria();
            juegoActivo = false;
            return;
        }

        if (tablero.every(celda => celda !== "")) {
            mensaje.textContent = "¡Empate!";
            juegoActivo = false;
            return;
        }

        turno = "X";
        mensaje.textContent = "Turno de X";
    }
}

function reiniciarJuego() {
    turno = "X";
    tablero = ["", "", "", "", "", "", "", "", ""];
    juegoActivo = true;
    mensaje.textContent = "Turno de X";
    celdas.forEach(celda => {
        celda.textContent = "";
        celda.classList.remove("marcado");
    });
}

function sonidoMovimiento() {
    let audio = new Audio("move.mp3");
    audio.play();
}

function sonidoVictoria() {
    let audio = new Audio("win.mp3");
    audio.play();
}

modoIA.addEventListener("change", () => contraIA = modoIA.checked);
celdas.forEach(celda => celda.addEventListener("click", manejarClick));
botonReiniciar.addEventListener("click", reiniciarJuego);
mensaje.textContent = "Turno de X";
