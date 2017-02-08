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