import React from 'react'
import { render } from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import Carousel from '../../components/Carousel'
import Ad from './subpage/Ad'
import List from './subpage/List'

class Home extends React.Component{
	constructor(props, context) {
        super(props, context);
    }

	render(){
		return(
			<div>
				<Header cityName={this.props.userinfo.cityName}/>
				<Carousel/>
				<Ad/>
				<h2 className="list-title">猜你喜欢</h2>
				<List cityName={this.props.userinfo.cityName}/>
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
)(Home)