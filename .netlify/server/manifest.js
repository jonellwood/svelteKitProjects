var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  manifest: () => manifest
});
module.exports = __toCommonJS(stdin_exports);
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["favicon.png"]),
  mimeTypes: { ".png": "image/png" },
  _: {
    entry: { "file": "immutable/start-26787c01.js", "imports": ["immutable/start-26787c01.js", "immutable/chunks/index-64a710e1.js", "immutable/chunks/index-f9cae57c.js"], "stylesheets": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/5.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/6.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/7.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/8.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/9.js")))
    ],
    routes: [
      {
        type: "page",
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      },
      {
        type: "page",
        id: "dev-site",
        pattern: /^\/dev-site\/?$/,
        names: [],
        types: [],
        path: "/dev-site",
        shadow: null,
        a: [0, 3],
        b: [1]
      },
      {
        type: "page",
        id: "fee-calc-app",
        pattern: /^\/fee-calc-app\/?$/,
        names: [],
        types: [],
        path: "/fee-calc-app",
        shadow: null,
        a: [0, 4],
        b: [1]
      },
      {
        type: "page",
        id: "gatsby-blog",
        pattern: /^\/gatsby-blog\/?$/,
        names: [],
        types: [],
        path: "/gatsby-blog",
        shadow: null,
        a: [0, 5],
        b: [1]
      },
      {
        type: "page",
        id: "p",
        pattern: /^\/p\/?$/,
        names: [],
        types: [],
        path: "/p",
        shadow: null,
        a: [0, 6],
        b: [1]
      },
      {
        type: "page",
        id: "pokedex-app",
        pattern: /^\/pokedex-app\/?$/,
        names: [],
        types: [],
        path: "/pokedex-app",
        shadow: null,
        a: [0, 7],
        b: [1]
      },
      {
        type: "page",
        id: "salary-calc-app",
        pattern: /^\/salary-calc-app\/?$/,
        names: [],
        types: [],
        path: "/salary-calc-app",
        shadow: null,
        a: [0, 8],
        b: [1]
      },
      {
        type: "page",
        id: "word-resume-clone",
        pattern: /^\/word-resume-clone\/?$/,
        names: [],
        types: [],
        path: "/word-resume-clone",
        shadow: null,
        a: [0, 9],
        b: [1]
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
