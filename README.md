![logo](http://i.imgur.com/r8IegDK.jpg)
![dependencies](https://img.shields.io/david/luandro/hapi-universal-redux.svg?style=flat-square)
![devDependencies](https://img.shields.io/david/dev/luandro/hapi-universal-redux.svg?style=flat-square)

Isomorphic starterkit with server-side React rendering using
[npm](https://www.npmjs.com/),
[webpack](https://webpack.github.io/),
[webpack-dev-server](https://github.com/webpack/webpack-dev-server),
[react-transform-hmr](https://github.com/danmartinez101/babel-preset-react-hmre),
[hapi](http://www.hapijs.com/),
[babel](http://babeljs.io/),
[react](https://facebook.github.io/react),
[react-router](https://github.com/rackt/react-router)
[redux](https://github.com/gaearon/redux),
[redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension),
[simple-redux-router](https://github.com/rackt/redux-simple-router),
[react-router](https://github.com/rackt/react-router),
[radium](https://github.com/FormidableLabs/radium).


![screenshot](http://i.imgur.com/AQXi84d.jpg)

## Features

- Fully automated with npm run scripts
- Server hot reloads with webpack hmr
- Webpack for watch + production builds
- React + Router on the client and server
- React-Transform for instant client updates
- Babel automatically compiles ES6 + ES7
- React Transmit to preload on server to client
- Redux and Redux-DevTools-Extension for managing app state
- Radium for advanced inline styling

It just works out-of-the-box.

## Installation

Make sure you're using Node >= 4.0.0.

```bash
	git clone https://github.com/luandro/hapi-universal-redux.git
	cd hapi-universal-redux

	npm install
	npm run dev     # start Hapi server and webpack-dev-server hot server

	# production build and run
	npm run production
	# or
	NODE_ENV=production npm run build
	NODE_ENV=production npm run start
```

## Usage

Run `npm run dev` in your terminal and play with `views/Main.js` to get a feel of
the server-side rendering and client-side hot updates.


## License

BSD 3-Clause license. Copyright © 2015, Luandro. All rights reserved.
