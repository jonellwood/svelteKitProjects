var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Pokedex_app
});
module.exports = __toCommonJS(stdin_exports);
var import_index_4384d251 = require("../../immutable/chunks/index-4384d251.js");
var import_countStore_39c8aeeb = require("../../immutable/chunks/countStore-39c8aeeb.js");
var lighthouse = "/_app/immutable/assets/pokiedexLighthouse-7496077e.png";
var pokedexApp_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container-for-everything.svelte-8usi0h{background:rgba(37, 70, 125, var(--opacity));font-size:var(--font-size)}img.svelte-8usi0h{width:50%}a.svelte-8usi0h:hover{font-size:larger}",
  map: null
};
const Pokedex_app = (0, import_index_4384d251.c)(($$result, $$props, $$bindings, slots) => {
  let color;
  let countValue;
  import_countStore_39c8aeeb.c.subscribe((value) => {
    countValue = value;
  });
  let bgOpacity;
  import_countStore_39c8aeeb.o.subscribe((value) => {
    bgOpacity = value;
  });
  $$result.css.add(css);
  color = bgOpacity < 0.6 ? "#000" : "#fff";
  return `<div class="${"container-for-everything svelte-8usi0h"}" style="${"color: " + (0, import_index_4384d251.e)(color, true) + "; --opacity: " + (0, import_index_4384d251.e)(bgOpacity, true) + "; --font-size:" + (0, import_index_4384d251.e)(countValue + "px", true) + ";"}"><article><h1>Obligitory Pokedex App</h1>
		<p>Why does everyone seem to make a Pokedex app when learning how to interact with API&#39;s? Because
			it is so much fun! My attempt at it can be found
			<a href="${"https://hopeful-shannon-20857d.netlify.app/"}" target="${"_blank"}" class="${"svelte-8usi0h"}"><b>here.</b></a></p>
		<p>This was a great learning experience using the Pokemon API but good exposure to Redux as well.
			And I like the styling I did on it as well.
		</p>
		<p>Shocking to me while I was writing this I decided to check the Lighthouse scores on this page
			and they were all green!
		</p>
		<img${(0, import_index_4384d251.a)("src", lighthouse, 0)} alt="${"lighhouse scores for site - all green smiley face"}" class="${"svelte-8usi0h"}"></article>
</div>`;
});
