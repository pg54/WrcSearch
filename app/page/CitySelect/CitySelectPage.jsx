/**
 * @file
 * @author
 */
import React, {Component} from 'react';
import browserHistory from 'react-router/lib/browserHistory';

import DuWrap from 'react-deltaui/src/components/DuWrap';

import WrcSearch from '../../components/WrcSearch/index.jsx';

const GET_CITY_URL = '/ebbp/city';
// 搜索的字段名
const searchData = {
    chinese: 'cityName',
    letter: '',
    code: 'cityCode'
}

export default class CitySelectPage extends Component {

    constructor() {
        super();
        this.state = {
            cities: null
        };
    }

    componentDidMount() {
        let self = this;
        $.ajax({
            url: GET_CITY_URL,
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                console.log(data)
                if (data && data.ret === '0') {
                    self.setState({
                        cities: data.content
                    });
                }
                else {
                }
            },
            error: function () {
            },
            complete: function () {
            }
        });
    }

    render() {
        let mainContent = null;
        if (this.state.cities !== null) {
            mainContent = (
                <div className="du-page-home">
                    <DuWrap>
                        <div className="city-select">
                            <WrcSearch list={this.state.cities.hotCityList} searchData={searchData} />
                        </div>
                    </DuWrap>
                </div>
            );
        }
        return mainContent;
    }
}

