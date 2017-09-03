import React from 'react'
import { render } from 'react-dom'
import './style.less'
class Header extends React.Component{
	constructor(props, context) {
        super(props, context);
    }


	render(){
		return(
			<div className="clear-fix home-header">
				<div className="float-left home-location">
					<span>南京</span>
					<i className="icon-angle-down"></i>
				</div>
				<div className="float-right home-user">
					<i className="icon-user"></i>
				</div>
				<div className="search-area">
					<i className="icon-search"></i>
					<input type="text" placeholder="请输入关键字"/>					
				</div>
				
			</div>
		)
	}
}

export default Header