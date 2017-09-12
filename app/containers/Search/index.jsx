import React from 'react'
import { render } from 'react-dom'
import SearchHeader from '../../components/SearchHeader'
import SearchList from './subpage/List'



class Search extends React.Component{
	constructor(props,context){
		super(props,context);
		this.state = {			
			cityName : '南京'
		}
	}
	render(){
		return(
			<div>
				<SearchHeader keyword={this.props.params.keyword}/>
				<SearchList keyword={this.props.params.keyword} category={this.props.params.category}/>
			</div>
		)
	}
}


export default Search