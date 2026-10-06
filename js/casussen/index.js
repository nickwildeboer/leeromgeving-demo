// Alle uitgewerkte casussen. Elk bestand in deze map is één module.
// Het formaat staat in js/casussen/FORMAAT.md.
import rapporteren from './rapporteren.js';

export const NORM = 0.8;

export const CASUSSEN = Object.fromEntries([rapporteren].map((c) => [c.id, c]));
