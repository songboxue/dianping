import React from 'react'
import { render } from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as myActions from '../actions'


class App extends React.Component{
	constructor(props,context){
		super(props,context);
		this.state = {
			initDone : false
		}
	}



	render(){
		return(
			<div>
			{
				this.state.initDone?this.props.children:<div>加载中。。。</div>
			}				
			</div>

		)
	}

	componentDidMount(){
		
		let cityName = localStorage.getItem('CURRENT_CITY')||"北京"


		this.props.userInfoActions.update({
			cityName : cityName
		})
		this.setState({
			initDone : true
		})
	}
}

function mapStateToProps(state){
	return{}
}

function mapDispatchToProps(dispatch){
	return{
		userInfoActions : bindActionCreators(myActions, dispatch)
	}
}

export default connect(
	mapStateToProps,
  	mapDispatchToProps
)(App)