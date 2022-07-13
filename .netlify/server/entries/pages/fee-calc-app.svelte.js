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
  default: () => Fee_calc_app
});
module.exports = __toCommonJS(stdin_exports);
var import_index_4384d251 = require("../../immutable/chunks/index-4384d251.js");
var import_countStore_39c8aeeb = require("../../immutable/chunks/countStore-39c8aeeb.js");
var licenseCode = "/_app/immutable/assets/licenseCode-fc3c3d35.png";
var feeCalcApp_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container-for-everything.svelte-1oicm55{background:rgba(37, 70, 125, var(--opacity));font-size:var(--font-size)}img.svelte-1oicm55{margin-top:5px;margin-right:15px;margin-bottom:10px}a.svelte-1oicm55:hover{font-size:larger}li.svelte-1oicm55{padding:2px}",
  map: null
};
const Fee_calc_app = (0, import_index_4384d251.c)(($$result, $$props, $$bindings, slots) => {
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
  return `<div class="${"container-for-everything svelte-1oicm55"}" style="${"color: " + (0, import_index_4384d251.e)(color, true) + "; --opacity: " + (0, import_index_4384d251.e)(bgOpacity, true) + "; --font-size:" + (0, import_index_4384d251.e)(countValue + "px", true) + ";"}"><article><h1>Fee Calculator Site</h1>
		<p>I was approached about adding a Business License Fee calculator to an existing Wordpress Site.
			The request had a few specific requirements.
		</p>
		<ul><li class="${"svelte-1oicm55"}">Every business has a classification and each classification has its own rate</li>
			<li class="${"svelte-1oicm55"}">The fee is calculated based on the annual revenue of the business</li>
			<ul><li class="${"svelte-1oicm55"}">The first million dollars has a base rate based on the classification</li>
				<li class="${"svelte-1oicm55"}">The second million dollars has a lower rate than the preceeding million</li>
				<li class="${"svelte-1oicm55"}">The third million follows the pattern of the second and so on</li></ul>
			<li class="${"svelte-1oicm55"}">The fee is also based on if the business owner is a resident of the City</li></ul>

		<p>I originally reached for Python and worked out most of the logic but found it challenging to
			integrate that into an existing Wordpress site that I had limited access to. By rewriting it
			in JavaScript it was much easier to impliement just using a RawHTML block and Javascript
			block.
		</p>
		<img${(0, import_index_4384d251.a)("src", licenseCode, 0)} alt="${"code showing calculations"}" width="${"40%"}" class="${"svelte-1oicm55"}">

		<p>The calculation logic was by far the most complex part of the project.</p>
		<p>Once that was sorted the rest was easy. You can see the project in production
			<a href="${"https://cityofhanahan.com/business-licenses/business-license-fees/"}" target="${"_blank"}" class="${"svelte-1oicm55"}"><b>here.</b></a></p></article>
</div>`;
});
