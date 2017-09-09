import React from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import './style.less'

class CurrentCity extends React.Component{
	constructor(props, context) {
        super(props, context);
    }


	render(){
		return(
			<div className="selected-area">
				<span className="city-selected">{this.props.userinfo.cityName}</span>
			</div>
			
		)
	}
	
}

function mapStateToProps(state){
	return{
		userinfo : state.userinfo
	}
}

function mapDispatchToProps(dispatch){
	return{}
}

export default connect(
	mapStateToProps,
  	mapDispatchToProps
)(CurrentCity)