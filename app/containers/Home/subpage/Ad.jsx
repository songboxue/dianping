import React from 'react'
import { render } from 'react-dom'
import HomeAd from '../../../components/HomeAd'
import {getAd} from '../../../fetch/home.js'

class Ad extends React.Component{
	constructor(props, context) {
        super(props, context);
        this.state = {
        	data : []
        }
       
    }

	
	render(){
 		
		return(
			<div>
				<HomeAd data={this.state.data}/>
			</div>
		)

	}

	componentDidMount(){
		
		getAd().then((resp)=>{
			return resp.json()
		}).then((json)=>{
			this.setState({
				data : json
			})
		})

	}


}

export default Ad