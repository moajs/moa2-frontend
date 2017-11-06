var  model = {
    api_name: "u",
    api_name_zh: "用户",
    items: [{
        zh_name: "名称",
        en_name: "name",
        type: "String"
    },{
        zh_name: "年龄",
        en_name: "age",
        type: "String"
    },{
        zh_name: "性别",
        en_name: "sex",
        type: "String"
    },{
        zh_name: "简介",
        en_name: "intro",
        type: "String"
    }]
}

require('.')(model, process.cwd() + '/src')