// Copies the card that ships inside this integration (custom_components/recipe_manager/www)
// and the Material Design Icons font into the demo folder, and writes the current version.
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const site = resolve(here, '..');
const root = resolve(site, '..');
const demo = resolve(site, 'public/sandbox');
const www = resolve(root, 'custom_components/recipe_manager/www');

if (!existsSync(resolve(www, 'recipe-manager-card.js'))) {
  console.error(`${www}/recipe-manager-card.js is missing.`);
  process.exit(1);
}
// The card loads its language files and shared chunk from next to itself
for (const name of ['chunks', 'locales']) {
  rmSync(resolve(demo, name), { recursive: true, force: true });
  if (existsSync(resolve(www, name))) cpSync(resolve(www, name), resolve(demo, name), { recursive: true });
}
cpSync(resolve(www, 'recipe-manager-card.js'), resolve(demo, 'recipe-manager-card.js'));

// Material Design Icons: the font plus a name -> character map (the card asks for icons by name)
const mdi = resolve(site, 'node_modules/@mdi/font');
mkdirSync(resolve(demo, 'mdi'), { recursive: true });
cpSync(resolve(mdi, 'fonts/materialdesignicons-webfont.woff2'), resolve(demo, 'mdi/mdi.woff2'));
const css = readFileSync(resolve(mdi, 'css/materialdesignicons.css'), 'utf8');
const map = {};
for (const m of css.matchAll(/\.mdi-([a-z0-9-]+)::before\s*{\s*content:\s*"\\([0-9A-Fa-f]+)"/g)) {
  map[m[1]] = parseInt(m[2], 16);
}
writeFileSync(resolve(demo, 'mdi/icons.json'), JSON.stringify(map));

const manifest = JSON.parse(readFileSync(resolve(root, 'custom_components/recipe_manager/manifest.json'), 'utf8'));
writeFileSync(resolve(site, 'public/version.json'), JSON.stringify({ version: manifest.version }));
console.log(`demo ready: Recipe Manager ${manifest.version}, ${Object.keys(map).length} icons`);
