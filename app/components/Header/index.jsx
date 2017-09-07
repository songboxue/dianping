import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import './style.less'
class Header extends React.Component{
	constructor(props, context) {
        super(props, context);
    }


	render(){
		return(
			<div className="clear-fix home-header">
				<div className="float-left home-location">
					<Link to='/city'>
						<span>{this.props.cityName}</span>
						<i className="icon-angle-down"></i>
					</Link>
				</div>
				<div className="float-right home-user">
					<i className="icon-user"></i>
				</div>
				<div className="search-area">
					<div className="float-left icon-div">
						<i className="icon-search"></i>
					</div>
					
					<div className="input-div">
						<input type="text" placeholder="请输入关键字"/>
					</div>
										
				</div>
				
			</div>
		)
	}
}

export default Header