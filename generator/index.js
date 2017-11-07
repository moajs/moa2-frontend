
var tpl = require('tpl_apply');


var source = process.cwd() + '/tpl.js'
var dest = process.cwd() + '/test/tpl.generate.js'


// tpl.tpl_apply_art(source, {
// 	title: "My New Post", body: "This is my first post!"
// }, dest);


// var  model = {
//     api_name: "user",
//     api_name_zh: "用户",
//     items: [{
//         zh_name: "名称",
//         en_name: "name",
//         type: "String"
//     },{
//         zh_name: "年龄",
//         en_name: "age",
//         type: "String"
//     },{
//         zh_name: "性别",
//         en_name: "sex",
//         type: "String"
//     },{
//         zh_name: "简介",
//         en_name: "intro",
//         type: "String"
//     }]
// }

const CONFIG = {
    // ------------ JavaScript ------------
    // ├── router.js
    // ├── model.js
    // -------------- Template ------------
    // ├── _form.art
    // ├── edit.art
    // ├── index.art
    // ├── new.art
    // └── show.art
    // -------------- Configure ------------
    // ├── menu.art
}

module.exports = function (model, dest) {
    console.log(dest)

    var _dest = dest + '/' + model.api_name

    create_folder(_dest)

    // init
    var _model = init(model)

    // generate
    var arr = ['_form.art', 'edit.art', 'index.art', 'menu.json', 'model.js', 'new.art', 'router.js', 'show.art']
    // arr = ['edit.art', 'index.art']
    for (var i = 0; i < arr.length; i++) {
        var file = arr[i]
        console.log(file)
        generate(file, _model, _dest)
    }
}
function create_folder(dest) {
    var mkdirp = require('mkdirp');

    mkdirp.sync(dest);
}
function generate(file, model, dest) {

    var source = __dirname + '/tpl/' + file
    tpl.tpl_apply(source, model, dest + '/' + file)
}

function init(model) {
    return model
}
