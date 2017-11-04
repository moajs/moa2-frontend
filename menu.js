// 
var fs = require('fs')
var art = require('art-template')

function getFileContent(file) {
    return fs.readFileSync(file).toString()
}

var folder_arr = fs.readdirSync(__dirname + '/src')

module.exports = function () {
    var menu_tpl = __dirname + '/layout/templates/menu.art'
    var dest_tpl = __dirname + '/layout/menu.art'
    if (fs.existsSync(menu_tpl)) {
        var tpl = getFileContent(menu_tpl)

        var html_arr = []
        folder_arr.forEach(function (folder) {
            if (fs.existsSync(__dirname + '/src/' + folder + '/menu.art')){
                console.log(folder + " = " + __dirname + '/src/' + folder + '/menu.art')

                var tpl = getFileContent(__dirname + '/src/' + folder + '/menu.art')
                var render =  art.compile(tpl, {
                    escape: false
                });
                var one_html = render({folder: folder});
                // console.log("one_html")
                // console.log(one_html)
                html_arr.push(one_html)
            }
        }, this);

        var render = art.compile(tpl, {
            escape: false
        });

        var html = render({
            name: "Moajs管理后台",
            menus: [

            ],
            new_menu: html_arr.join("")
        });

        fs.writeFileSync(dest_tpl, html)
    }
}