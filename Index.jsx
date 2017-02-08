import React, {Component} from 'react';
import {render} from 'react-dom';
import 'react-deltaui/src/components/Delta';
import './reset.css';
import {static_cities} from './city.js'
import WrcSearch from './WrcSearch/index.jsx';

import DuWrap from 'react-deltaui/src/components/DuWrap';

// 搜索的字段名
const searchData = {
    chinese: 'name',
    letter: 'pinyin',
    code: ''
}

class SearchDemo extends Component{
    constructor() {
        super();
        this.state = {
            cities: null
        };
    }

    render() {
        return (
            <div className="du-page-outer">
                <div className="du-page-home">
                    <DuWrap>
                        <div className="city-select">
                            <WrcSearch list={static_cities} searchData={searchData} />
                        </div>
                    </DuWrap>
                </div>
            </div>
        )
    }
}

render(
    <SearchDemo />,
    document.getElementById('du-app')
);
