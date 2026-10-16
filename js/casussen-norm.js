export const NORM = 0.8;

const shuffle = (items, random) => {
  const resultaat = [...items];
  for (let i = resultaat.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [resultaat[i], resultaat[j]] = [resultaat[j], resultaat[i]];
  }
  return resultaat;
};

// Selecteert zonder terugleggen en husselt zowel vragen als antwoordopties.
// De zorginhoud zelf blijft in de casusbestanden staan.
export function maakToetsPoging(vragenbank = [], aantal = 5, random = Math.random) {
  if (!Array.isArray(vragenbank)) throw new TypeError('De vragenbank moet een lijst zijn.');
  if (!Number.isInteger(aantal) || aantal < 1) throw new RangeError('Het aantal vragen moet minimaal één zijn.');
  if (typeof random !== 'function') throw new TypeError('De toevalsgenerator moet een functie zijn.');

  return shuffle(vragenbank, random).slice(0, Math.min(aantal, vragenbank.length)).map((vraag) => {
    const opties = shuffle(vraag.opties.map((tekst, index) => ({ tekst, goed: index === vraag.goed })), random);
    return {
      vraag: vraag.vraag,
      opties: opties.map((optie) => optie.tekst),
      goed: opties.findIndex((optie) => optie.goed),
    };
  });
}
