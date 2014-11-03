# koaify
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]

Mark all `koa` and `fax` compatible packages as `es6ify` targets to run them in
the browser.

## Installation
```bash
npm install koaify
```

## Usage
```js
var browserify = require('browserify');
var es6ify = require('es6ify');
var koaify = require('koaify');

koaify();

browserify()
  .add(es6ify.runtime)
  .transform(es6ify)
  .require(require.resolve('./index.js'), { entry: true })
  .bundle()
  .pipe(fs.createWriteStream('./build/bundle.js'));
```

## Why?
Because adding a `browserify` clause to the `package.json` of >40 modules would
be too invasive. This solves adding `es6ify` elegantly without really impacting
performance.

## See also
- [playground-fax](https://github.com/yoshuawuyts/playground-fax)
- [es6ify](https://github.com/thlorenz/es6ify)
- [viralify](https://github.com/thlorenz/viralify)

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/koaify.svg?style=flat-square
[npm-url]: https://npmjs.org/package/koaify
[downloads-image]: http://img.shields.io/npm/dm/koaify.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/koaify
