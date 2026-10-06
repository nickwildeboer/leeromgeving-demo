// Alle uitgewerkte casussen. Elk bestand in deze map is één module.
// Het formaat staat in js/casussen/FORMAAT.md.
import overdracht from './overdracht.js';
import opzoeken from './opzoeken.js';
import rapporteren from './rapporteren.js';
import klinimetrie from './klinimetrie.js';
import zorgplan from './zorgplan.js';
import mikzo from './mikzo.js';
import episodes from './episodes.js';
import escaleren from './escaleren.js';
import familie from './familie.js';
import zp10 from './zp10.js';
import mic from './mic.js';
import authenticator from './authenticator.js';
import wondzorg from './wondzorg.js';
import onsdossier from './onsdossier.js';

export const NORM = 0.8;

export const CASUSSEN = Object.fromEntries([overdracht, opzoeken, rapporteren, klinimetrie, zorgplan, mikzo, episodes, escaleren, familie, zp10, mic, authenticator, wondzorg, onsdossier].map((c) => [c.id, c]));
