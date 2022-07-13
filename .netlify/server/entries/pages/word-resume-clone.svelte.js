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
  default: () => Word_resume_clone
});
module.exports = __toCommonJS(stdin_exports);
var import_index_4384d251 = require("../../immutable/chunks/index-4384d251.js");
var import_countStore_39c8aeeb = require("../../immutable/chunks/countStore-39c8aeeb.js");
var import_resume_3fe092a9 = require("../../immutable/chunks/resume-3fe092a9.js");
var wordResumeClone_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container-for-everything.svelte-af7r64{background:rgba(37, 70, 125, var(--opacity));font-size:var(--font-size)}a.svelte-af7r64:hover{font-size:larger}img.svelte-af7r64{float:right;margin:5px}li.svelte-af7r64{padding:2px}",
  map: null
};
const Word_resume_clone = (0, import_index_4384d251.c)(($$result, $$props, $$bindings, slots) => {
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
  return `<div class="${"container-for-everything svelte-af7r64"}" style="${"color: " + (0, import_index_4384d251.e)(color, true) + "; --opacity: " + (0, import_index_4384d251.e)(bgOpacity, true) + "; --font-size:" + (0, import_index_4384d251.e)(countValue + "px", true) + ";"}"><article><h1>Word Resume Clone</h1>
		<p>While realizing an online resume is critical for obtaining employment these days I decided I
			wanted to to have a webpage that would serve as a resume - but was also a challenge to build.
			I decided on trying to make a web page that looks like a Word Document.
		</p>

		<img${(0, import_index_4384d251.a)("src", import_resume_3fe092a9.W, 0)} alt="${"word Clone"}" width="${"40%"}" class="${"svelte-af7r64"}">
		<p>My goals were simple:</p>
		<ul><li class="${"svelte-af7r64"}">It should look as close to a Word Document as possible.</li>
			<li class="${"svelte-af7r64"}">The HTML should be semantically correct.</li>
			<li class="${"svelte-af7r64"}">It should meet all requirements for a11y.</li>
			<li class="${"svelte-af7r64"}">It should also have all the information a potential employer might need. i.e. it needs to be
				a current and functional resume.
			</li></ul>

		<p>I started by researching what hex values Office 365 Word used which was fairly easy to find.
			(Firefox dev tools color grab tool made this very easy) Then I started laying out the HTML and
			CSS to make the document look as close to a screenshot of Word in the web as I could. The only
			JavaScript I added was a little date function to update the &quot;Last Saved&#39; bit in the very top.
			The downside to doing this is that there is a bit of a flash when moving between pages as it
			updates. Since I used only HTML (and not a component based framework - although I really wish
			I had) each page is a separate file with LOADS of repeated code. I had a ton of fun creating
			the little AutoSave toggle, sourcing the icons, and even creating the Nav menu. I figured
			since Word has a &quot;references&quot; menu option I might as well make that a page.... and it just
			kind of grew from there.
		</p>
		<p>I attempted to the make the ribbon that sits below the menu but man oh man was that tough! I
			think if subgrid was supported across all modern browsers it might be an easier task. I
			snagged a screenshot of the ribbon and loaded it in as an image but felt like that was
			cheating. I have not given up on the ribbon.... but we&#39;ll see. Things left to do as of this
			writing: - Make the document responsive. It look awful on mobile. - Make the ribbon for below
			the menu. - Consider refactoring into a React or Svelte app to take advantage of components
			UPDATE: Did refactor to Svelte. Took about 2 1/2 hours and wow was it worth it!
		</p>
		<p>Please feel free to view my resume or even hire me. Details can be found \u{1F449}
			<a href="${"https://resume.jonellwood.dev"}" target="${"_blank"}" class="${"svelte-af7r64"}">here</a></p></article>
</div>`;
});
