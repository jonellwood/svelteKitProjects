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
  default: () => Salary_calc_app
});
module.exports = __toCommonJS(stdin_exports);
var import_index_4384d251 = require("../../immutable/chunks/index-4384d251.js");
var import_countStore_39c8aeeb = require("../../immutable/chunks/countStore-39c8aeeb.js");
var gist_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "iframe.svelte-1xzba9{border:0;width:100%}",
  map: null
};
const Gist = (0, import_index_4384d251.c)(($$result, $$props, $$bindings, slots) => {
  let { src = "" } = $$props;
  let { title = "" } = $$props;
  src = src.slice(src.length - 3) === ".js" ? src : src + ".js";
  title = title === "" ? src : title;
  let frame;
  let height = "30px";
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css$1);
  return `<iframe src="${"about:blank"}"${(0, import_index_4384d251.a)("title", title, 0)}${(0, import_index_4384d251.a)("height", height, 0)} class="${"svelte-1xzba9"}"${(0, import_index_4384d251.a)("this", frame, 0)}></iframe>`;
});
var salaryCalcApp_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container-for-everything.svelte-yrgalf{background:rgba(37, 70, 125, var(--opacity));font-size:var(--font-size)}a.svelte-yrgalf:hover{font-size:larger}",
  map: null
};
const Salary_calc_app = (0, import_index_4384d251.c)(($$result, $$props, $$bindings, slots) => {
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
  return `<div class="${"container-for-everything svelte-yrgalf"}" style="${"color: " + (0, import_index_4384d251.e)(color, true) + "; --opacity: " + (0, import_index_4384d251.e)(bgOpacity, true) + "; --font-size:" + (0, import_index_4384d251.e)(countValue + "px", true) + ";"}"><article><h1>Salary Comparison App</h1>
		<p>One day while installing a printer at a new workstation I watched a conversation between two
			managers discussing a coming years budget and salary increases for employees. The pay scale
			has 13 pay grades and each grade has 13 steps.
		</p>
		<p>The discussion involved a lot of &quot;move them up this step means &quot;X&quot; increase&quot; or &quot;what if we
			move them up one step but down two grades?&quot; - stuff like that. And each and every time they
			would then consult a printed spreadsheet with the hourly rate for each grade and step and
			calculate out what the annual amount would be and then compare it to the current grade.
		</p>
		<p>Using JavaScript, HTML, and CSS I built a small calculator application that allows the
			selection of a grade and step for salaries 1 &amp; 2 and then just return the rates, the annual
			amounts for each as well as the difference. It is essentially two long switch statements:

			${(0, import_index_4384d251.v)(Gist, "Gist").$$render($$result, {
    src: "https://gist.github.com/jonellwood/c5ed3039a3076d1df20bc3d0643935aa.js"
  }, {}, {})}

			I am sure there is a much better way to accomplish this but it works! Maybe one day with some
			more experience under my belt I will look at it again. Any suggestions are welcome at
			<a href="${"mailto:jonellwood@gmail.com"}" class="${"svelte-yrgalf"}"><b>jonellwood@gmail.com</b></a></p>
		<p>The reduction in errors as well as time savings it provides I can only imagine. You can see a
			demo version of the project
			<a href="${"https://wynettedegroot.com"}" target="${"_blank"}" class="${"svelte-yrgalf"}"><b>here.</b></a></p></article>
</div>`;
});
