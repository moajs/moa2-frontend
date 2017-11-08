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
// for config storage
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
global.db = low(adapter)


global.home = __dirname
// require('./watch')()
// Set some defaults
// db.defaults({ posts: [], user: {} })
// .write()
global.menu = require('./menu')()

const session = require('koa-session');
app.keys = ['some secret hurr'];

const CONFIG = {
  key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 86400000/24/2, //30min
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. default is false **/
};

app.use(session(CONFIG, app));
// or if you prefer all default config, just use => app.use(session(app));

// require('./menu')()

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