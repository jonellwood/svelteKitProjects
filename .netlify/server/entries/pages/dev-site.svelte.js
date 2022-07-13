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
  default: () => Dev_site
});
module.exports = __toCommonJS(stdin_exports);
var import_index_4384d251 = require("../../immutable/chunks/index-4384d251.js");
var import_countStore_39c8aeeb = require("../../immutable/chunks/countStore-39c8aeeb.js");
var chat = "/_app/immutable/assets/pokemonGame-96346be7.png";
var devSite_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container-for-everything.svelte-1eqbez5{background:rgba(37, 70, 125, var(--opacity));font-size:var(--font-size)}img.svelte-1eqbez5{float:left;margin-top:40px;margin-right:15px;margin-bottom:10px}a.svelte-1eqbez5:hover{font-size:larger}",
  map: null
};
const Dev_site = (0, import_index_4384d251.c)(($$result, $$props, $$bindings, slots) => {
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
  return `<div class="${"container-for-everything svelte-1eqbez5"}" style="${"color: " + (0, import_index_4384d251.e)(color, true) + "; --opacity: " + (0, import_index_4384d251.e)(bgOpacity, true) + "; --font-size:" + (0, import_index_4384d251.e)(countValue + "px", true) + ";"}"><article><h1>Pokemon Style Game based Dev Site</h1>
		<p>I generally use my personal
			<a href="${"https://jonellwood.dev"}" target="${"_blank"}" class="${"svelte-1eqbez5"}"><b>website </b></a>
			as a bit of a playground to try out new things I am learning.
		</p>

		<p>Now that I am actively looking for employment I knew that I needed to have some kind of
			portfolio site. Since I am &quot;self-taught&quot; when it comes to web development I know my resume and
			portfolio is not going to look as nice and polished as someone who just graduated from college
			or finished a nice boot camp. I did a good bit of looking around and there are some VERY
			impressive sites out there! Quite intimidating in fact. I also noticed there seemed to be kind
			of a pattern to them. Mostly goes like this: Hey! I am this person. I make websites. Here are
			a few sites I built on nice cards with hover effects and cool shadowing. And below that here
			is a bar chart with different tech stacks (React, Svelte, NodeJS, Angular, etc.) with some
			numbers next to them that quite frankly I don&#39;t understand what they mean. And again they look
			amazing! So I know I wanted to do something a little different.
		</p>
		<img${(0, import_index_4384d251.a)("src", chat, 0)} alt="${"two game chacters talking"}" width="${"350px"}" class="${"svelte-1eqbez5"}">
		<p>After taking a course from Chris Course
			<a href="${"https://chriscourses.com"}" class="${"svelte-1eqbez5"}">Chris Courses</a>
			on making a Pokemon style game I decided that I wanted to use that as a starting point for my dev
			site. So I made a little world and make little monsters that will pop up and all the fun stuff.
		</p>
		<p>My 5 year old often sits in my office and asked &quot;Where am I going to be?&quot; which gave me a
			great idea of adding NPC&#39;s that could could provide information - just like in the real game.
			So I added my 5-year-old son, my two-year-old daughter, and my wife into the world. And I
			added a few other little sprites in there just for fun. It occurred to me though that we have
			enough fighting in the world right now. So I changed the mechanics of the game so that the
			monsters have to boost each other up to win instead of fight. The &quot;attacks&quot; became &quot;respects&quot;
			and they healed instead of hurt.
		</p>

		<p>There is still quite a bit of work to do on it and I squash bugs as quick as I can. My hope is
			that it will be taken for what it is intended to be - something a little different to
			highlight some creativity and positivity; but also help me get a job! \u{1F601} Please take a minute
			to swing by
			<a href="${"https://jonellwood.dev"}" target="${"_blank"}" class="${"svelte-1eqbez5"}"><b>jonellwood.dev</b></a>
			and check it out!
		</p></article>
</div>`;
});
