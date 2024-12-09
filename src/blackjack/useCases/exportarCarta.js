/**
 * Función para agregar imágenes al html
 * @param {Array<String>}
 * @returns {HTMLImageElement} imgCarta imagen de la carta
 */

export const exportarCarta = (carta) => {
  if (!carta) throw new Error("La carta es obligatoria");

  const imgCarta = document.createElement('img');
  imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
  imgCarta.classList.add('carta');

  return imgCarta;

}