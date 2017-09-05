import React from 'react'
import { render } from 'react-dom'
import './style.less'
import ListComponent from '../../../components/List'
import {getList} from '../../../fetch/home.js'

class List extends React.Component{
	constructor(props, context) {
        super(props, context); 
        this.state = {
        	data : [],
        	hasMore : false
        }
    }

	
	render(){
 		
		return(
			<div>
				<h2 className="list-title">猜你喜欢</h2>
				<ListComponent data={this.state.data}/>
			</div>
		)

	}

	componentDidMount(){
		var city = this.props.cityName
		getList(city,0).then((resp)=>{
			return resp.json()
		}).then((json)=>{
			this.setState({
				data : json.data,
				hasMore : json.hasMore
			})
		})
	}


}

export default List