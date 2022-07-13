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
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_4384d251 = require("../../immutable/chunks/index-4384d251.js");
var import_countStore_39c8aeeb = require("../../immutable/chunks/countStore-39c8aeeb.js");
var import_resume_3fe092a9 = require("../../immutable/chunks/resume-3fe092a9.js");
const Incrementer = (0, import_index_4384d251.c)(($$result, $$props, $$bindings, slots) => {
  return `<button>+ </button>`;
});
var decrementer_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: "button.svelte-xwmt9c{margin-left:2px;margin-right:2px}",
  map: null
};
const Decrementer = (0, import_index_4384d251.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$7);
  return `<button class="${"svelte-xwmt9c"}">- </button>`;
});
const Resetter = (0, import_index_4384d251.c)(($$result, $$props, $$bindings, slots) => {
  return `<button>reset </button>`;
});
var app = "";
var hr_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".hr-just-for-funsies.svelte-abrvi4{margin-top:30px;margin-bottom:30px;color:#185abd}",
  map: null
};
const Hr = (0, import_index_4384d251.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$6);
  return `<div><hr class="${"hr-just-for-funsies svelte-abrvi4"}">
</div>`;
});
var footer_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".footer.svelte-v4wcmn.svelte-v4wcmn{color:#fff;font-weight:500;text-align:center}.footer.svelte-v4wcmn a.svelte-v4wcmn{padding-left:10px}",
  map: null
};
const Footer = (0, import_index_4384d251.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<footer>${(0, import_index_4384d251.v)(Hr, "Hr").$$render($$result, {}, {}, {})}
	<p class="${"footer svelte-v4wcmn"}"><a href="${"https://jonellwood.dev"}" target="${"_blank"}" class="${"svelte-v4wcmn"}">My Site</a>
		<a href="${"https://github.com/jonellwood"}" target="${"_blank"}" class="${"svelte-v4wcmn"}">Github</a>
		<a href="${"https://contact.jonellwood.dev"}" target="${"_blank"}" class="${"svelte-v4wcmn"}">Contact</a>
		<a href="${"https://resume.jonellwood.dev"}" target="${"_blank"}" class="${"svelte-v4wcmn"}">Resume</a>
		<a href="${"https://twitter.com/thejonellwood"}" target="${"_blank"}" class="${"svelte-v4wcmn"}">Twitter</a></p>
</footer>`;
});
const screenW = (0, import_countStore_39c8aeeb.w)(900);
const mobileThreshold = (0, import_countStore_39c8aeeb.w)(900);
(0, import_countStore_39c8aeeb.d)([screenW, mobileThreshold], ([$screenW, $mobileThreshold]) => $screenW < $mobileThreshold);
const setAsync = async (key, value) => {
  return;
};
const localStorageStore = (key, value) => {
  const { set: setStore, ...readableStore } = (0, import_countStore_39c8aeeb.w)(value, () => {
    return;
  });
  const set = async (value2) => {
    setStore(value2);
    try {
      await setAsync(key, value2);
    } catch (error) {
      console.error(`the \`${key}\` store's new value \`${value2}\` could not be persisted to localStorage because of ${error}`);
    }
  };
  return { ...readableStore, set };
};
var MacScrollbar_svelte_svelte_type_style_lang = "";
var ThemeToggle_svelte_svelte_type_style_lang = "";
const OnMount = (0, import_index_4384d251.c)(($$result, $$props, $$bindings, slots) => {
  return `${``}`;
});
const initialTheme = "dark";
localStorageStore("theme", initialTheme);
var salary = "/_app/immutable/assets/salary-b5d7c1da.png";
var pokeidex = "/_app/immutable/assets/pokidex-f3370099.png";
var license = "/_app/immutable/assets/license-dc576810.png";
var pokemonGame = "/_app/immutable/assets/pokemonStart-58dd9fbe.png";
var postCarousel_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "a.svelte-1kcz0vm.svelte-1kcz0vm{text-decoration:none;color:inherit;cursor:pointer}.card-holder.svelte-1kcz0vm.svelte-1kcz0vm{display:flex;justify-content:center}.card.svelte-1kcz0vm.svelte-1kcz0vm{background-color:#ffffff;width:250px;display:grid;grid-template-rows:1fr;margin-left:10px;margin-right:10px;border:3px solid black;text-align:center;border-radius:25px;text-shadow:5px 10px 10px #a0a0a0;-webkit-box-shadow:0px 10px 13px -7px #000000, 0px 0px 21px 10px rgba(0, 0, 0, 0);box-shadow:0px 10px 13px -7px #000000, 0px 0px 21px 10px rgba(0, 0, 0, 0);transition:0.5s all ease}.card.svelte-1kcz0vm.svelte-1kcz0vm:hover{transform:rotate(-3deg);-webkit-box-shadow:5px 5px 5px 0px #a0a0a0, inset 4px 4px 15px 0px #a0a0a0,\n			0px 0px 13px 10px rgba(0, 0, 0, 0);box-shadow:5px 5px 5px 0px #a0a0a0, inset 4px 4px 15px 0px #a0a0a0,\n			0px 0px 13px 10px rgba(0, 0, 0, 0)}.card.svelte-1kcz0vm h2.svelte-1kcz0vm{font-size:medium;text-align:center;margin-top:20px}.card.svelte-1kcz0vm img.svelte-1kcz0vm{margin-left:auto;margin-right:auto;margin-bottom:20px}.exerpt.svelte-1kcz0vm.svelte-1kcz0vm{display:none;width:50%;text-align:left;margin-left:30px}.date-text.svelte-1kcz0vm.svelte-1kcz0vm{font-size:smaller;font-weight:100;text-align:end;margin-right:30px;margin-top:0;margin-bottom:0}.stack-text.svelte-1kcz0vm.svelte-1kcz0vm{font-size:smaller;color:dimgrey;text-align:end;margin-right:30px}@media(max-width: 1275px){.card-holder.svelte-1kcz0vm.svelte-1kcz0vm{display:grid;grid-template-columns:1fr 1fr 1fr}}@media(max-width: 900px){.card-holder.svelte-1kcz0vm.svelte-1kcz0vm{grid-template-columns:1fr 1fr}.card.svelte-1kcz0vm.svelte-1kcz0vm:hover{transform:perspective(700px) translateZ(90px)}}@media(max-width: 537px){.card-holder.svelte-1kcz0vm.svelte-1kcz0vm{grid-template-columns:1fr}.card.svelte-1kcz0vm img.svelte-1kcz0vm{display:none}}",
  map: null
};
let height = "75px";
const PostCarousel = (0, import_index_4384d251.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `${(0, import_index_4384d251.v)(OnMount, "OnMount").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"container"}"><div class="${"card-holder svelte-1kcz0vm"}"><div class="${"card svelte-1kcz0vm"}"><a href="${"/dev-site"}" class="${"svelte-1kcz0vm"}"><h2 class="${"svelte-1kcz0vm"}">Pokemon Style Dev Site</h2>
					<img class="${"card-image svelte-1kcz0vm"}"${(0, import_index_4384d251.a)("src", pokemonGame, 0)} alt="${"pokemon style game screenshot"}"${(0, import_index_4384d251.a)("height", height, 0)}>
					<p class="${"exerpt svelte-1kcz0vm"}">A different take on a dev site using a Pokemon style game in canvas.</p>
					<p class="${"date-text svelte-1kcz0vm"}">July 1, 2022</p>
					<p class="${"stack-text svelte-1kcz0vm"}">HTML, Javascript, Canvas</p></a></div>
			<div class="${"card svelte-1kcz0vm"}"><a href="${"/word-resume-clone"}" class="${"svelte-1kcz0vm"}"><h2 class="${"svelte-1kcz0vm"}">Resume Word Clone attempt</h2>
					<img class="${"card-image svelte-1kcz0vm"}"${(0, import_index_4384d251.a)("src", import_resume_3fe092a9.W, 0)} alt="${"Word clone screenshot"}"${(0, import_index_4384d251.a)("height", height, 0)}>
					<p class="${"exerpt svelte-1kcz0vm"}">My attempt to clone the look of Microsoft Word for my resume</p>
					<p class="${"date-text svelte-1kcz0vm"}">June 22, 2022</p>
					<p class="${"stack-text svelte-1kcz0vm"}">HTML. CSS, Javascript</p></a></div>
			<div class="${"card svelte-1kcz0vm"}"><a href="${"/pokedex-app"}" class="${"svelte-1kcz0vm"}"><h2 class="${"svelte-1kcz0vm"}">PokeDex Site</h2>
					<img class="${"card-image svelte-1kcz0vm"}"${(0, import_index_4384d251.a)("src", pokeidex, 0)} alt="${"Pokdex App screenshot"}"${(0, import_index_4384d251.a)("height", height, 0)}>
					<p class="${"exerpt svelte-1kcz0vm"}">Everyone has to make this app at least once right? Here&#39;s mine</p>
					<p class="${"date-text svelte-1kcz0vm"}">June 13, 2021</p>
					<p class="${"stack-text svelte-1kcz0vm"}">React, Redux</p></a></div>
			<div class="${"card svelte-1kcz0vm"}"><a href="${"/salary-calc-app"}" class="${"svelte-1kcz0vm"}"><h2 class="${"svelte-1kcz0vm"}">Salary Calcualtor App</h2>
					<img class="${"card-image svelte-1kcz0vm"}"${(0, import_index_4384d251.a)("src", salary, 0)} alt="${"Salary Calculator App screenshot"}"${(0, import_index_4384d251.a)("height", height, 0)}>
					<p class="${"exerpt svelte-1kcz0vm"}">Using Javascript instead of printed sheets of paper?</p>
					<p class="${"date-text svelte-1kcz0vm"}">March 21, 2022</p>
					<p class="${"stack-text svelte-1kcz0vm"}">HTML, CSS, Javascript</p></a></div>
			<div class="${"card svelte-1kcz0vm"}"><a href="${"/fee-calc-app"}" class="${"svelte-1kcz0vm"}"><h2 class="${"svelte-1kcz0vm"}">Business Fee Calculator App</h2>
					<img class="${"card-image svelte-1kcz0vm"}"${(0, import_index_4384d251.a)("src", license, 0)} alt="${"Business Fee License Calculator App screenshot"}"${(0, import_index_4384d251.a)("height", height, 0)}>
					<p class="${"exerpt svelte-1kcz0vm"}">A tool I built that is in production using Raw HTML &amp; Javascript blocks in Wordpress
					</p>
					<p class="${"date-text svelte-1kcz0vm"}">July 5, 2021</p>
					<p class="${"stack-text svelte-1kcz0vm"}">HTML, Javascript, Wordpress</p></a></div>
			</div></div>`;
    }
  })}`;
});
var bottomHr_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".hr-just-for-funsies.svelte-1jssa5l{margin-top:30px;margin-bottom:30px;color:#185abd;box-shadow:3px 15px 20px 8px #00008b50}",
  map: null
};
const BottomHr = (0, import_index_4384d251.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<div><hr class="${"hr-just-for-funsies svelte-1jssa5l"}">
</div>`;
});
var topHr_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".hr-just-for-funsies.svelte-lb3hsd{margin-top:30px;margin-bottom:30px;color:#185abd;box-shadow:-3px -15px 20px 8px #00008b50}",
  map: null
};
const TopHr = (0, import_index_4384d251.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div><hr class="${"hr-just-for-funsies svelte-lb3hsd"}">
</div>`;
});
var middleHr_svelte_svelte_type_style_lang = "";
const OpacityIncrementer = (0, import_index_4384d251.c)(($$result, $$props, $$bindings, slots) => {
  return `<button>+ </button>`;
});
var opacityDecrementer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "button.svelte-xwmt9c{margin-left:2px;margin-right:2px}",
  map: null
};
const OpacityDecrementer = (0, import_index_4384d251.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<button class="${"svelte-xwmt9c"}">- </button>`;
});
const OpacityResetter = (0, import_index_4384d251.c)(($$result, $$props, $$bindings, slots) => {
  return `<button>reset </button>`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-1m2tdzs{text-align:center}.control-buttons.svelte-1m2tdzs{display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr;margin-left:3rem;margin-right:3rem}.hide-button.svelte-1m2tdzs,.font-button.svelte-1m2tdzs,.opacity-button.svelte-1m2tdzs{display:flex;margin-left:5px;align-items:center}.right-text.svelte-1m2tdzs{text-align:right}@media(max-width: 900px){.font-button.svelte-1m2tdzs{display:none}.opacity-button.svelte-1m2tdzs{display:none}}@media(max-width: 500px){h1.svelte-1m2tdzs{font-size:large}}",
  map: null
};
const _layout = (0, import_index_4384d251.c)(($$result, $$props, $$bindings, slots) => {
  let countValue;
  import_countStore_39c8aeeb.c.subscribe((value) => {
    console.log(value);
    countValue = value;
  });
  import_countStore_39c8aeeb.o.subscribe((value) => {
  });
  $$result.css.add(css);
  return `<h1 class="${"svelte-1m2tdzs"}">Jon Ellwood Projects Page</h1>

<div class="${"control-buttons svelte-1m2tdzs"}"><p class="${"right-text svelte-1m2tdzs"}">Adjust font size</p>
	<p class="${"font-button svelte-1m2tdzs"}">${(0, import_index_4384d251.v)(Incrementer, "Incrementer").$$render($$result, {}, {}, {})}
		${(0, import_index_4384d251.v)(Decrementer, "Decrementer").$$render($$result, {}, {}, {})}
		${(0, import_index_4384d251.v)(Resetter, "Resetter").$$render($$result, {}, {}, {})}</p>
	<p>The font size is ${(0, import_index_4384d251.e)(countValue)}px</p>
	<p class="${"right-text svelte-1m2tdzs"}">Adjust Opacity</p>
	<p class="${"opacity-button svelte-1m2tdzs"}">${(0, import_index_4384d251.v)(OpacityIncrementer, "OpacityIncrementer").$$render($$result, {}, {}, {})}
		${(0, import_index_4384d251.v)(OpacityDecrementer, "Opacitydecrementer").$$render($$result, {}, {}, {})}
		${(0, import_index_4384d251.v)(OpacityResetter, "OpacityResetter").$$render($$result, {}, {}, {})}</p>

	<p class="${"hide-button svelte-1m2tdzs"}">${`<button${(0, import_index_4384d251.b)("".trim())}>Hide List</button>`}</p></div>

${`${(0, import_index_4384d251.v)(TopHr, "TopHr").$$render($$result, {}, {}, {})}
	${(0, import_index_4384d251.v)(PostCarousel, "PostCarousel").$$render($$result, {}, {}, {})}
	${(0, import_index_4384d251.v)(BottomHr, "BottomHr").$$render($$result, {}, {}, {})}`}
${``}
${slots.default ? slots.default({}) : ``}
${(0, import_index_4384d251.v)(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
