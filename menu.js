// 
var fs = require('fs')
var art = require('art-template')

function getFileContent(file) {
    return fs.readFileSync(file).toString()
}

var folder_arr = fs.readdirSync(__dirname + '/src')

module.exports = function () {
    let arr = []
    folder_arr.forEach(function (folder) {
        if (fs.existsSync(__dirname + '/src/' + folder + '/menu.json')){
            console.log(folder + " = " + __dirname + '/src/' + folder + '/menu.json')
            var content = getFileContent(__dirname + '/src/' + folder + '/menu.json')
            if (content) {
                var _menu = JSON.parse(content)
                console.log(_menu)
                arr.push(_menu)
            }

            
        }
    }, this);

    return arr
}