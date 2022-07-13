const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"immutable/start-26787c01.js","imports":["immutable/start-26787c01.js","immutable/chunks/index-64a710e1.js","immutable/chunks/index-f9cae57c.js"],"stylesheets":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js')),
			() => Promise.resolve().then(() => require('../server/nodes/7.js')),
			() => Promise.resolve().then(() => require('../server/nodes/8.js')),
			() => Promise.resolve().then(() => require('../server/nodes/9.js'))
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "dev-site",
				pattern: /^\/dev-site\/?$/,
				names: [],
				types: [],
				path: "/dev-site",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "fee-calc-app",
				pattern: /^\/fee-calc-app\/?$/,
				names: [],
				types: [],
				path: "/fee-calc-app",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "gatsby-blog",
				pattern: /^\/gatsby-blog\/?$/,
				names: [],
				types: [],
				path: "/gatsby-blog",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "p",
				pattern: /^\/p\/?$/,
				names: [],
				types: [],
				path: "/p",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "pokedex-app",
				pattern: /^\/pokedex-app\/?$/,
				names: [],
				types: [],
				path: "/pokedex-app",
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				id: "salary-calc-app",
				pattern: /^\/salary-calc-app\/?$/,
				names: [],
				types: [],
				path: "/salary-calc-app",
				shadow: null,
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				id: "word-resume-clone",
				pattern: /^\/word-resume-clone\/?$/,
				names: [],
				types: [],
				path: "/word-resume-clone",
				shadow: null,
				a: [0,9],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
