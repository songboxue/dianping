import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import SearchInput from '../SearchInput'
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
					<Link to='/login'>
						<i className="icon-user"></i>
					</Link>					
				</div>
				<SearchInput/>
				
			</div>
		)
	}
}

export default Header