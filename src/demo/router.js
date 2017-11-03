const router = require('koa-router')()

router.get('/bootstraptable', (ctx, bootstraptable) => {
  return ctx.render('src/demo/bootstraptable', {
    title: 'bootstraptable'
  });
});

router.get('/bootstrap_table', (ctx, bootstraptable) => {
  return ctx.render('src/demo/bootstrap_table', {
    title: 'bootstrap_table'
  });
});


router.get('/cronJobQueue', (ctx, next) => {
  return ctx.render('src/demo/cronJobQueue', {
    title: 'cronJobQueue'
  });
});


router.get('/executableJobQueue', (ctx, next) => {
  return ctx.render('src/demo/executableJobQueue', {
    title: 'executableJobQueue'
  });
});

router.get('/executingJobQueue', (ctx, next) => {
  return ctx.render('src/demo/executingJobQueue', {
    title: 'executingJobQueue'
  });
});

router.get('/jobAdd', (ctx, next) => {
  return ctx.render('src/demo/jobAdd', {
    title: 'jobAdd'
  });
});


router.get('/jobLogger', (ctx, next) => {
  return ctx.render('src/demo/jobLogger', {
    title: 'jobLogger'
  });
});

router.get('/jobtrackerMonitor', (ctx, next) => {
  return ctx.render('src/demo/jobtrackerMonitor', {
    title: 'jobtrackerMonitor'
  });
});

router.get('/loadJob', (ctx, next) => {
  return ctx.render('src/demo/LoadJob', {
    title: 'loadJob'
  });
});

router.get('/nodeGroupManager', (ctx, next) => {
  return ctx.render('src/demo/nodeGroupManager', {
    title: 'nodeGroupManager'
  });
});

router.get('/nodeJvmInfo', (ctx, next) => {
  return ctx.render('src/demo/nodeJvmInfo', {
    title: 'nodeJvmInfo'
  });
});

router.get('/nodeManager', (ctx, next) => {
  return ctx.render('src/demo/nodeManager', {
    title: 'nodeManager'
  });
});

router.get('/nodeOnOfflineLog', (ctx, next) => {
  return ctx.render('src/demo/nodeOnOfflineLog', {
    title: 'nodeOnOfflineLog'
  });
});

router.get('/tasktrackerMonitor', (ctx, next) => {
  return ctx.render('src/demo/tasktrackerMonitor', {
    title: 'tasktrackerMonitor'
  });
});

/* GET home page. */
router.get('/uploadify', (ctx, next) => {
  return ctx.render('src/demo/uploadify', {
    title: 'uploadify'
  });
});

var simditor_qn_config = require('../../config/simditor_qn')


/* GET home page. */
router.get('/simditor', (ctx, next) => {
  var qn = require('qn');

  var client = qn.create(simditor_qn_config.qn);
  
  var token = client.uploadToken();
  console.log(token)
  
  return ctx.render('src/demo/simditor', {
    title: 'index',
    token : token
  });
});

module.exports = router
