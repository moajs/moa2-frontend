module.exports = {  
  home: __dirname,
  // db_debug: true,

  // middlewares:{
  //
  // },
  
  routes:[{
    path: __dirname,
    folder: 'app/routes'
  }],
  
  database: {
    'host': '127.0.0.1',
    'port': '27017',
    'db': 'moa-api',
    'is_debug': true
  }
}