import React from 'react'
import { render } from 'react-dom'
import { hashHistory } from 'react-router'
import RouteMap from './router/routeMap'
import { Provider } from 'react-redux'
import configureStore from './store'

import './static/css/common.less'
import './static/css/font.less'

let store = configureStore();

render(
	<Provider store={store}>
		<RouteMap history={hashHistory}/>
	</Provider>,
	document.getElementById('root')
	
)