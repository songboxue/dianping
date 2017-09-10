import React from 'react'
import { render } from 'react-dom'
import SearchInput from '../SearchInput'
import './style.less'

class SearchHeader extends React.Component{
	constructor(props, context) {
        super(props, context);
    }


	render(){
		return(
			<div className="clear-fix common-header">
				<span onClick={this.handleClick} className="back-icon">
					<i className="icon-chevron-left"></i>
				</span>
				<SearchInput keyword={this.props.keyword}/>
			</div>
			
		)
	}
	handleClick(){
		window.history.back()
	}
}

export default SearchHeader