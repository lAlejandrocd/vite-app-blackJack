import { pedirCarta, valorCarta, exportarCarta } from "./";
// turno de la computadora
/**
 * @param {Number} puntosMínimos puntos Mínimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML elementos html
 * @param {Array<String>} deck[] arreglo de cartas
 * @param {HTMLElement} divCartasComputadora
 */
export const turnoComputadora = (puntosMinimos, puntosHTML, deck = [], divCartasComputadora) => {

  if (!puntosMinimos) throw new Error("Puntos Mínimos necesarios");
  if (!puntosHTML) throw new Error("Argumento puntosHTML es necesarios");

  let puntosComputadora = 0;

  do {
    const carta = pedirCarta(deck);

    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHTML.innerText = puntosComputadora;

    const imgCarta = exportarCarta(carta);
    divCartasComputadora.append(imgCarta);
    if (puntosMinimos > 21) {
      break;
    }

  } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert('Nadie gana :(');
    } else if (puntosMinimos > 21) {
      alert('Computadora gana')
    } else if (puntosComputadora > 21) {
      alert('Jugador Gana');
    } else {
      alert('Computadora Gana')
    }
  }, 100);
}
