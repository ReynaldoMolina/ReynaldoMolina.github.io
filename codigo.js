//1 es piedra, 2 es papel y 3 es tijera
let jugador = 0
let puntosJugador = 0
let seleccionJugador = ""
let pc = 0
let puntosPc = 0
let seleccionPc = ""
let resultado = ""
let partida = 0

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function seleccionarJugada() {
    let botonPiedra = document.getElementById("boton-piedra")
    botonPiedra.addEventListener("click", piedra)
    let botonPapel = document.getElementById("boton-papel")
    botonPapel.addEventListener("click", papel)
    let botonTijera = document.getElementById("boton-tijera")
    botonTijera.addEventListener("click", tijera)
    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.disabled = true
}

function piedra() {
    jugador = 1
    combate()
}

function papel() {
    jugador = 2
    combate()
}

function tijera() {
    jugador = 3
    combate()
}

function combate() {
    pc = aleatorio(1, 3)
    let spanPuntosJugador = document.getElementById("puntos-jugador")
    let spanPuntosPc = document.getElementById("puntos-pc")
    let spanResultado = document.getElementById("resultado")

    //combate
    if (pc == jugador) {
        nombreJugada()
        spanResultado.innerHTML = "Empate"
    }
    else if (jugador == 1 && pc == 3 || jugador == 2 && pc == 1 || jugador == 3 && pc == 2){
        nombreJugada()
        spanResultado.innerHTML = "Ganaste"
        puntosJugador++
        spanPuntosJugador.innerHTML = puntosJugador
    }
    else {
        nombreJugada()
        spanResultado.innerHTML = "Perdiste"
        puntosPc++
        spanPuntosPc.innerHTML = puntosPc
    }
    partida++
    verificarPartida()
}

function nombreJugada() {
    let spanJugador = document.getElementById("seleccion-jugador")
    let spanPc = document.getElementById("seleccion-pc")

    if (jugador == 1) {
        spanJugador.innerHTML = "Piedra"
    }
    else if (jugador == 2) {
        spanJugador.innerHTML = "Papel"
    }
    else {
        spanJugador.innerHTML = "Tijera"
    }

    if (pc == 1) {
        spanPc.innerHTML = "Piedra"
    }
    else if (pc == 2) {
        spanPc.innerHTML = "Papel"
    }
    else {
        spanPc.innerHTML = "Tijera"
    }
}

function verificarPartida() {
    if (partida == 5) {
        let spanResultado = document.getElementById("resultado")

        if (puntosJugador > puntosPc) {
            spanResultado.innerHTML = "Game Over: GANASTE"
        }
        else if (puntosJugador < puntosPc) {
            spanResultado.innerHTML = "Game Over: PERDISTE"
        }
        else {
            spanResultado.innerHTML = "Game Over: EMPATE"
        }
        let botonPiedra = document.getElementById("boton-piedra")
        botonPiedra.disabled = true
        let botonPapel = document.getElementById("boton-papel")
        botonPapel.disabled = true
        let botonTijera = document.getElementById("boton-tijera")
        botonTijera.disabled = true
        let botonReiniciar = document.getElementById("boton-reiniciar")
        botonReiniciar.disabled = false
        botonReiniciar.addEventListener("click", reiniciarJuego)
    }
}

function reiniciarJuego() {
    location.reload()
}

window.addEventListener("load", seleccionarJugada)