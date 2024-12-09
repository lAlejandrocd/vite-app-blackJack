import _ from 'underscore';

/**
 * Función que crea un nuevo deck
 * @param{Array<String>} tiposDeCarta Ejemplo: ['C', 'D', 'H', 'S']
 * @param{Array<String>} tiposEspeciales Ejemplo: ['A', 'J', 'Q', 'K']
 * @param returns{Array<String>} Devuelve un deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

  //negamos usando el signo de exclamación para validar si no viene ningún dato en el tipoDeCarta
  if (!tiposDeCarta || tiposDeCarta.length === 0) throw new Error("Tipos de carta obligatorios");
  if (!tiposEspeciales || tiposEspeciales.length === 0) throw new Error("Tipos de carta especiales obligatorios");

  let deck = [];
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCarta) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDeCarta) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }
  // console.log( deck );
  deck = _.shuffle(deck);
  return deck;
}