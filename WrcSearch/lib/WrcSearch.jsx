import React, { Component } from 'react';
import style from './WrcSearch.useable.less';
import toPinyin from './toPinyin.jsx';

const reg = {
    chinese: new RegExp('^[\\u4E00-\\u9FFF]+$'),
    number: /^[-\+]?\d+(\.\d+)?$/,
    letter: /^[A-Za-z]+$/
}

export default class WrcSearch extends Component {
    constructor (props) {
        super(props);
        this.state = {
            hasSearch: false,
            searchResult: []
        }
        // console.log(this.props.searchData.chinese)
    }
    componentWillMount () {
        style.use();
    }
    componentDidMount() {
    }
    componentWillUnmount() {
        style.unuse();
    }

    keyUpFunc (e) {
        let self = this;
        // 如果输入的为数字 && 可匹配数字项存在
        if (e.target.value !== '' && reg.number.test(e.target.value) && self.props.searchData.code !== '') {
            // console.log('数字' + e.target.value)
            self.searchByWay(self.props.searchData.code, e.target.value);
        }
        // 如果输入的为汉字 && 可匹配汉字项存在
        else if (e.target.value !== '' && reg.chinese.test(e.target.value) && self.props.searchData.chinese !== '') {
            // console.log('汉字' + e.target.value);
            // 将汉字处理为中文，目前还不知道怎么用
            // console.log(toPinyin.transToChinese(e.target.value));
            self.searchByWay(self.props.searchData.chinese, e.target.value);
        }
        // 如果输入的为英文/拼音 && 可匹配英文/拼音项存在
        else if (e.target.value !== '' && reg.letter.test(e.target.value)) {
            // console.log('字母' + e.target.value);
            if (self.props.searchData.letter === '') {
                // toPinyin.transToPinyin(e.target.value)
            }
            else {
                self.searchByWay(self.props.searchData.letter, e.target.value.toUpperCase());
            }
        }
        // 匹配不成功如符号等
        else {
            // console.log(e.target.value);
            this.setState({
                hasSearch: false
            })
        }
    }
    searchByWay (type, value) {
        console.log(value)
        let searchResult = [];
        for (let item of this.props.list) {
            if (item[type].indexOf(value) >= 0) {
                console.log(item[type])
                searchResult.push(item);
            }
        }
        this.setState({
            hasSearch: true,
            searchResult: searchResult
        })
    }
    render () {
        let hasSearchContent = null;
        if (this.state.hasSearch) {
            hasSearchContent = (
                <div className="du-panel-bd search-result">
                    <ul className="du-list">
                        {
                            this.state.searchResult.map((item, k) => {
                                return (
                                    <li key={k} className="du-item du-item-link">
                                        <a href="">{item[this.props.searchData.chinese]}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            )
        }
        return (
            <div className="du-panel search-content">
                <input type="text" className="du-panel-hd search-txt" placeholder="search……" onChange={this.keyUpFunc.bind(this)}/>
                {hasSearchContent}
            </div>
        )
    }
}