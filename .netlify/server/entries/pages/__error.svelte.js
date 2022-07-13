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
  default: () => _error,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_4384d251 = require("../../immutable/chunks/index-4384d251.js");
function load({ error, status }) {
  return { props: { error, status } };
}
const _error = (0, import_index_4384d251.c)(($$result, $$props, $$bindings, slots) => {
  let { error, status } = $$props;
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  return `${$$result.head += `${$$result.title = `<title>${(0, import_index_4384d251.e)(status)}</title>`, ""}`, ""}

<h1>${(0, import_index_4384d251.e)(status)}: ${(0, import_index_4384d251.e)(error.message)}</h1>`;
});
