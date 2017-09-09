import React from 'react'
import { render } from 'react-dom'
import { hashHistory } from 'react-router'
import './style.less'

class SearchInput extends React.Component{
	constructor(props, context) {
        super(props, context);
        this.state = ({
        	value : ''
        })
    }


	render(){
		return(
			<div className="search-area">
				<div className="float-left icon-div" onClick={this.doSearch.bind(this)}>
					<i className="icon-search"></i>
				</div>
				
				<div className="input-div">
					<input type="text" placeholder="请输入关键字"
						onChange={this.changeValue.bind(this)}
						value={this.state.value}
						onKeyDown={this.doSearch.bind(this)}
					/>
				</div>									
			</div>			
		)
	}
	
	changeValue(e){
		this.setState({
			value : e.target.value
		})
	}
	
	doSearch(e){
		switch(e.target.tagName)
		{
		case 'I':
			this.doSearchService();
			break;
		case 'INPUT':
			if(e.keyCode=='13'){
				this.doSearchService();
			}else{
				return
			}
			break;
		default:
			return
		}
	}		

	doSearchService(){
		let val = this.state.value.trim(),
			uri = '/search/all/'+encodeURIComponent(val);

		if(val == ''){
			return
		}
		hashHistory.push(uri)
	}
		


}

export default SearchInput