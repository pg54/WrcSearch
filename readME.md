##启动步骤：
1. `npm install`
2.  `npm start`启动
3. 访问 `http://localhost:8080/123`，可以在`scripts/config.js`中修改使用的端口

##组件配置
```bash
<WrcSearch list={this.state.cities.hotCityList} searchData={searchData} />

// 搜索的字段名
const searchData = {
    chinese: 'cityName',
    letter: '',
    code: 'cityCode'
}
```

## 开发注意事项
* searchData中value值为搜索字段，为空则不进行搜索
* list为搜索的数据