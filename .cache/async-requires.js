// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": () => import("C:\\Code\\Projects\\gatsby-clean-portfolio\\src\\pages\\404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-js": () => import("C:\\Code\\Projects\\gatsby-clean-portfolio\\src\\pages\\about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-index-js": () => import("C:\\Code\\Projects\\gatsby-clean-portfolio\\src\\pages\\index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-projects-js": () => import("C:\\Code\\Projects\\gatsby-clean-portfolio\\src\\pages\\projects.js" /* webpackChunkName: "component---src-pages-projects-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "C:\\Code\\Projects\\gatsby-clean-portfolio\\.cache\\data.json")

