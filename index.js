global.debug = require('debug')('moa2');

var app = require('moa2')(__dirname + '/config')

debug($config)
debug($global_middlewares)
debug($middlewares)
debug($controllers)
debug($models)


var mount_uploadify = require('koa-uploadify')

mount_uploadify (app, {
  debug:true,
  path:'/fileupload',
  fileKey:'myfile',
  multer:{ dest: 'uploads/' }
  
});


// app.start(4000);
module.exports = app