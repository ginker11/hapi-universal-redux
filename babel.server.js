require("babel/register")({
	experimental: true
});

/**
 * Define isomorphic constants.
 */
global.__CLIENT__ = false;
global.__SERVER__ = true;

require("./src/server");
