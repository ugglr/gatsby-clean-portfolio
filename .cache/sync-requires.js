const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Code\\Projects\\gatsby-clean-portfolio\\src\\pages\\404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("C:\\Code\\Projects\\gatsby-clean-portfolio\\src\\pages\\about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Code\\Projects\\gatsby-clean-portfolio\\src\\pages\\index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("C:\\Code\\Projects\\gatsby-clean-portfolio\\src\\pages\\projects.js")))
}

