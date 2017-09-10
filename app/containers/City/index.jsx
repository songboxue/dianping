import React from 'react'
import { render } from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as myActions from '../../actions'
import CommonHeader from '../../components/CommonHeader'
import CurrentCity from '../../components/CurrentCity'
import CityList from '../../components/CityList'

class City extends React.Component{
	constructor(props,context){
		super(props,context);
	}



	render(){
		return(
			<div>
				<CommonHeader title="选择城市"/>
				<CurrentCity/>
				<CityList changeCityFn={this.changeCity.bind(this)}/>
			</div>

		)
	}
	
	//修改城市的方法
	changeCity(name){
		var newCity = name || '北京';

		//修改redux，取出现有的userinfo，通过绑定的update这个action更新store
		var userinfo = this.props.userinfo;
		userinfo.cityName = newCity;
		this.props.userInfoActions.update(userinfo);
		
		//修改localStorage
		localStorage.setItem('CURRENT_CITY',newCity);

		//完成后跳转到首页
	}

	
}

function mapStateToProps(state){
	return{
		userinfo : state.userinfo
	}
}

function mapDispatchToProps(dispatch){
	return{
		userInfoActions : bindActionCreators(myActions, dispatch)
	}
}

export default connect(
	mapStateToProps,
  	mapDispatchToProps
)(City)