import React, {Component} from 'react';
import {render} from 'react-dom';
import Router from 'react-router/lib/Router';
import browserHistory from 'react-router/lib/browserHistory';

import {routes} from './Routes';
import 'react-deltaui/src/components/Delta';

class App extends Component {

    render() {
        return (
            <div className="du-page-outer">
                {this.props.children}
            </div>
        )
    }
}

const rootRoute = {
    childRoutes: [
        {
            path: '/',
            component: App,
            childRoutes: routes
        }
    ]
};

render((
    <Router
        history={browserHistory}
        routes={rootRoute}
    />
), document.getElementById('du-app'));
