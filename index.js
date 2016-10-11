global.debug = require('debug')('moa2');

var app = require('moa2')(__dirname + '/config')

debug($config)
debug($global_middlewares)
debug($middlewares)
debug($controllers)
debug($models)

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

// app.start(4000);
module.exports = app