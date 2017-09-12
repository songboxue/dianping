import React from 'react'
import { render } from 'react-dom'
import LoginComponent from '../../components/Login'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import * as myActions from '../../actions'
import CommonHeader from '../../components/CommonHeader'


class Login extends React.Component{
	constructor(props,context){
		super(props,context);
		this.state = {
			isLogin : false
		}
	}

	render(){
		return(
			<div>
				<CommonHeader title='登陆'/>
				{
					this.state.isLogin?<div>aaa</div>:<LoginComponent doLoginFn={this.doLogin.bind(this)}/>
				}
			</div>
		)
	}

	toUser(){
		hashHistory.push('/User')
	}

	componentDidMount(){
		let userinfo = this.props.userinfo;
		if(userinfo.username){
			this.setState({
				isLogin : true
			})
			this.toUser()
		}	
	}
	
	//处理登陆，将username更新到redux并处理页面跳转
	doLogin(username){
		let userinfo = this.props.userinfo,
			userInfoActions = this.props.userInfoActions,
			path = this.props.params.router;
		userinfo.username = username;
		userInfoActions.update(userinfo);
		if(path){
			hashHistory.push(path)
		}else{
			this.toUser()
		}
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
)(Login)