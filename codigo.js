function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function eleccion(jugada) {
    let resultado = ""
    if(jugada == 1) {
        resultado = "Piedra 🪨"
    }
    else if(jugada == 2) {
        resultado = "Papel 🧻"
    }
    else if(jugada == 3) {
        resultado = "Tijera ✂️"
    }
    else {
        resultado = "Mal elegido"
    }
    return resultado
}

alert("¡Bienvenid@! Por ahora solo hay un juego de piedra, papel o tijera 🥲.")
//1 es piedra, 2 es papel y 3 es tijera
let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0

while (triunfos < 3 && perdidas < 3) {
    jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera")
    pc = aleatorio(1, 3)
    alert("Elegiste " + eleccion(jugador))
    alert("PC eligió " + eleccion(pc))

    //combate
    if (pc == jugador) {
        alert("Empate 😡")
    }
    else if (jugador == 1 && pc == 3 || jugador == 2 && pc == 1 || jugador == 3 && pc == 2){
        alert("Ganaste 😎")
        triunfos++
    }
    else {
        alert("Perdiste 🥲")
        perdidas++
    }

    alert("Puntaje: Jugador " + triunfos + " - " + perdidas + " PC")
}

if (triunfos > perdidas) {
    alert("¡Felicidades! ¡Ganaste!")
}
else {
    alert("Sad, perdiste")
}