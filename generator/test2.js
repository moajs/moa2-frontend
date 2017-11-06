{/* <th data-field="id" data-align="center" data-formatter="showSerialNum">　序号</th>
<th data-field="_id" data-align="center" data-formatter="showId">id</th>
<th data-field="name" data-align="center">课程名称</th>
<th data-field="sales_num" data-align="center"> 销量 </th>
<th data-field="price" data-align="center"> 价格</th>
<th data-field="picture" data-align="center" data-formatter="showImage"> 头图</th>
<th data-field="recommend" data-align="center"> 是否推荐</th>
<th data-field="purchase" data-align="center" data-formatter="purchaseFormatter" data-events="operationEvent">操作</th> */}


var  model = {
    api_name: "courses",
    api_name_zh: "用户",
    items: [{
        zh_name: "名称",
        en_name: "name",
        type: "String"
    },{
        zh_name: "年龄",
        en_name: "sales_num",
        type: "String"
    },{
        zh_name: "性别",
        en_name: "price",
        type: "String"
    },{
        zh_name: "简介",
        en_name: "picture",
        type: "String"
    }]
}

require('.')(model, process.cwd() + '/src')