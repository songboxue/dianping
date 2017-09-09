import React from 'react'
import { render } from 'react-dom'
import './style.less'

class CommonHeader extends React.Component{
	constructor(props, context) {
        super(props, context);
    }


	render(){
		return(
			<div className="clear-fix common-header">
				<span onClick={this.handleClick} className="back-icon">
					<i className="icon-chevron-left"></i>
				</span>
				<h1 className="header-title">{this.props.title}</h1>
			</div>
			
		)
	}
	handleClick(){
		window.history.back()
	}
}

export default CommonHeader