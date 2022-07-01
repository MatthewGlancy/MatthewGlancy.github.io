
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/matty/code/MatthewGlancy.github.io/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/matty/code/MatthewGlancy.github.io/src/pages/index.js"))
}

