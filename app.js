const path = require('path')
const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const render = require('koa-art-template')
const mount = require('mount2')

// global.$middlewares = require('mount-middlewares')(__dirname);
// console.log($middlewares);

require('./menu')()

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

render(app, {
  root: path.join(__dirname, '.'),
  extname: '.art',
  debug: process.env.NODE_ENV !== 'production'
});

// config
var simditor_qn_config = require('./config/simditor_qn')

var mount_simditor_qn = require('koa-simditor-qn');

// mount 
mount_simditor_qn(app, simditor_qn_config);

// mount_uploadify
var mount_uploadify = require('koa-uploadify')

mount_uploadify (app, {
  debug:true,
  path:'/fileupload',
  fileKey:'myfile',
  multer:{ dest: 'uploads/' }
  
});

// simple
// mount(app);
// with path
mount(app, __dirname + '/src', true);

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});


// app.start(4000);
module.exports = app