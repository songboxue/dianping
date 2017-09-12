import React from 'react'
import { render } from 'react-dom'
import {Link} from 'react-router'
import './style.less'

class LoginComponent extends React.Component{
	constructor(props, context) {
        super(props, context);
        this.state = {
			username : '',
			passwd : ''
        }
    }


	render(){
		
		return(
			<div>
				<form action="" method="POST" className='login-form'>
					<input type="text" name="username" placeholder="用户名"
						onChange = {this.handleUsername.bind(this)}
						value = {this.state.username}
					/>
					<input type="text" name="passwd" placeholder="密码"
						onChange = {this.handlePasswd.bind(this)}
						value = {this.state.passwd}
					/>
					<input type="submit" value="Submit" 
						onClick = {this.doLogin.bind(this)}
					/>
				</form>
			</div>
			
		)
	}

	//监听输入框变化
	handleUsername(e){
		let val = e.target.value;
		this.setState({
			username : val
		})
	}
	handlePasswd(e){
		let val = e.target.value;
		this.setState({
			passwd : val
		})
	}

	//处理登陆
	doLogin(e){
		e.preventDefault();
		let doLoginFn = this.props.doLoginFn,
			username = this.state.username;
		doLoginFn(username)
	}
}

export default LoginComponent