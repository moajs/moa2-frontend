const router = require('koa-router')()
const request = require('request')
const model = require('./model')

const sleep = ms => new Promise(r => setTimeout(r, ms))

const CONFIG_DEFAULT = {
  api_name_zh: "",
  api_name: "",
  items: []
}


router.get('/', function (ctx, next) {
  if (!ctx.session.config) ctx.session.config = CONFIG_DEFAULT
  ctx.render('src/admin/index', {
    title: "Api列表",
    data: ctx.session.config
  })
})

router.get('/new', function (ctx, next) {
  if (!ctx.session.config) ctx.session.config = CONFIG_DEFAULT
  ctx.render('src/admin/new', {
    title: "新建Api",
    data: ctx.session.config
  })
})

router.get('/:id/edit', function (ctx, next) {
  ctx.render('src/admin/edit', {
    title: "2323"
  })
})

router.get('/list', function (ctx, next) {
  // ctx.session.config = {}
  if (!ctx.session.config) ctx.session.config = CONFIG_DEFAULT
  var config = ctx.session.config
  console.log(config)
  ctx.body = {
    "total": config.items.length,
    "rows": config.items
  }
})
// Api
router.get('/api/list', function (ctx, next) {
  // ctx.session.config = {}
  if (!ctx.session.config) ctx.session.config = CONFIG_DEFAULT
  var config = ctx.session.config
  console.log(config)
  ctx.body = {
    "total": config.items.length,
    "rows": config.items
  }
})

// Api
router.get('/project/list', function (ctx, next) {
  // ctx.session.config = {}
  var apis = db.get('apis').value()
  console.dir(apis)
  console.dir(apis.length)


  ctx.body = {
    "total": apis.length,
    "rows": apis
  }
})

router.post('/project/generate/:api_name', function (ctx, next) {
  let api_name = ctx.params.api_name
  let model = db.get('apis').find({
    api_name: api_name
  }).value()

  console.log(model)

  // generate code
  require('../../generator')(model, process.cwd() + '/src')

  // delay 1 second
  return sleep(1000).then(function () {
    global.menu = require('../../menu')()
    ctx.body = {
      data: {},
      status: {
        code: 0,
        msg: 'sucess'
      }
    }
  })
})
router.delete('/project/remove/:api_name', function (ctx, next) {
  let api_name = ctx.params.api_name
  var rimraf = require('rimraf')

  return new Promise(function (resolve, reject) {
    rimraf(home + '/src/' + api_name, function (err) {
      console.log(err)
      console.log('rm dir = ' + home + '/src/' + api_name)
      resolve()
    })
  }).then(function () {
    return ctx.body = {
      data: {},
      status: {
        code: 0,
        msg: 'sucess'
      }
    }
  })
});

router.delete('/project/:api_name', function (ctx, next) {
  let api_name = ctx.params.api_name

  db.get('apis')
    .remove({ api_name: api_name })
    .write()

  return ctx.body = {
    data: {},
    status: {
      code: 0,
      msg: 'sucess'
    }
  }
});


router.post('/api/save', function (ctx, next) {
  // ctx.session.config = {}
  if (!ctx.session.config) {
    return ctx.body = {
      data: config,
      status: {
        code: -1,
        msg: 'fail'
      }
    }
  }

  // save api to db
  db.get('apis')
    .push(ctx.session.config)
    .write()

  // reset session
  var config = ctx.session.config = CONFIG_DEFAULT
  console.log(config)

  // return api
  ctx.body = {
    data: {},
    status: {
      code: 0,
      msg: 'sucess'
    }
  }
})

router.post('/api/add', function (ctx, next) {
  var body = ctx.request.body

  console.log(body)

  var config = ctx.session.config ? ctx.session.config : {}

  if (body.api_name) config.api_name = body.api_name
  if (body.api_name_zh) config.api_name_zh = body.api_name_zh

  var item = {
    zh_name: body.item_zh_name,
    en_name: body.item_en_name,
    type: body.item_type
  }

  config.items ? config.items.push(item) : config.items = [item]
  console.log(config)
  ctx.body = {
    data: config,
    status: {
      code: 0,
      msg: 'sucess'
    }
  }
})
router.post('/api/reset', function (ctx, next) {
  var config = ctx.session.config = CONFIG_DEFAULT
  console.log(config)
  ctx.body = {
    data: config,
    status: {
      code: 0,
      msg: 'sucess'
    }
  }
})

router.delete('/api/:en_name', function (ctx, next) {
  var en_name = ctx.params.en_name
  var config = ctx.session.config ? ctx.session.config : {}
  var newItems = []

  config.items.map(function (item) {
    console.log(en_name)
    console.log(item.en_name)
    if (item.en_name === en_name) {

    } else {
      newItems.push(item)
    }
  });

  console.log(en_name)
  console.log(newItems)
  config.items = newItems
  ctx.body = config
})

router.delete('/api/:id', function (ctx, next) {
  let id = ctx.params.id
  return new Promise(function (resolve, reject) {
    request.delete({ url: 'http://127.0.0.1:3000/api/courses/' + id, form: {} }, function (error, response, body) {
      console.log('error:', error) // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode) // Print the response status code if a response was received

      var courses = JSON.parse(body)

      console.log(body)
      console.dir(courses)
      resolve(courses)
    })
  }).then(function (courses) {
    ctx.body = courses
  })
})

module.exports = router
