var Metalsmith  = require('metalsmith');
var assets = require('metalsmith-static');
var markdown    = require('metalsmith-markdown');
var layouts     = require('metalsmith-layouts');
var permalinks  = require('metalsmith-permalinks');
var helpers = require('metalsmith-register-helpers');

Metalsmith(__dirname)
  .metadata({
    title: "Chamber of Legal Students",
    description: "It's about saying »Hello« to the World.",
    generator: "Metalsmith",
    url: "http://www.metalsmith.io/"
  })
  .source('./src')
  .destination('./build')
  .clean(false)
  .use(assets({
    "src": "./assets",
    "dest": "."}))
  .use(markdown())
  .use(permalinks())
  .use(helpers({
    "directory": "./helpers"
  }))
  .use(layouts({
    engine: 'handlebars'
  }))
  .build(function(err, files) {
    if (err) { throw err; }
  });
