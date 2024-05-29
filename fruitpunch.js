let vidasJugador = 3;
let vidasEnemigo = 3;

function btnfruitJugadorA() {
    alert('SELECCIONASTE TU FRUTA');
    iniciarJuego();
}

function iniciarJuego() {
    let ataqueJugador, ataqueEnemigo;

    function ataqueCitrico() {
        ataqueJugador = "Citrico";
        alert(ataqueJugador);
        ataqueEnemigo = atributoDeAtaqueEnemigo();
    }

    function atributoDeAtaqueEnemigo() {
        let atributo = "";
        let atributoAleatorio = aleatorio(1, 3);

        if (atributoAleatorio == 1) {
            atributo = "Citrico";
        } else if (atributoAleatorio == 2) {
            atributo = "Dulce";
        } else if (atributoAleatorio == 3) {
            atributo = "Tropical";
        }
        return atributo;
    }

    function combate(callback) {
        let spanVidasJugador = document.getElementById("vidas-jugador");
        let spanVidasEnemigo = document.getElementById("vidas-enemigo");

        if (vidasEnemigo > 0 && vidasJugador > 0) {
            if (ataqueJugador == ataqueEnemigo) {
                callback("EMPATE");
            } else if ((ataqueJugador == "Citrico" && ataqueEnemigo == "Secos") ||
                       (ataqueJugador == "Seco" && ataqueEnemigo == "Tropical") ||
                       (ataqueJugador == "Dulce" && ataqueEnemigo == "Seco")) {
                callback("GANASTE");
            } else {
                callback("PERDISTE");
            }
            vidasJugador--;
            spanVidasJugador.innerHTML = vidasJugador;
            vidasEnemigo--;
            spanVidasEnemigo.innerHTML = vidasEnemigo;
        }
    }

    combate(function(resultado) {
        crearMensaje(resultado);
    });
}

function ataque(tipoAtaque) {
    let ataqueJugador = tipoAtaque;
    let ataqueEnemigo = atributoDeAtaqueEnemigo();

    combate(function(resultado) {
        crearMensaje(resultado);
    });

    function atributoDeAtaqueEnemigo() {
        let atributos = ["Rojos", "Dulces", "Secos", "Tropical"];
        let aleatorio = Math.floor(Math.random() * atributos.length);
        return atributos[aleatorio];
    }

    function combate(callback) {
        let spanVidasJugador = document.getElementById("vidas-jugador");
        let spanVidasEnemigo = document.getElementById("vidas-enemigo");

        if (vidasEnemigo > 0 && vidasJugador > 0) {
            if (ataqueJugador == ataqueEnemigo) {
                callback("EMPATE");
            } else if ((ataqueJugador == "Rojos" && ataqueEnemigo == "Tropical") ||
                       (ataqueJugador == "Dulces" && ataqueEnemigo == "Rojos") ||
                       (ataqueJugador == "Secos" && ataqueEnemigo == "Dulces") ||
                       (ataqueJugador == "Tropical" && ataqueEnemigo == "Secos")) {
                callback("GANASTE");
            } else {
                callback("PERDISTE");
            }
            vidasJugador--;
            spanVidasJugador.innerHTML = vidasJugador;
            vidasEnemigo--;
            spanVidasEnemigo.innerHTML = vidasEnemigo;
        }
    }

    function crearMensaje(resultado) {
        let mensaje = document.getElementById("mensaje");
        mensaje.innerHTML = "Tu fruta atacó con " + ataqueJugador + ", la fruta del enemigo atacó con " + ataqueEnemigo + " - " + resultado;
    }
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}