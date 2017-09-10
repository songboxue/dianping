import React from 'react'
import { render } from 'react-dom'
import InfoComponent from '../../../components/Info'
import { getInfoData } from '../../../fetch/detail'


class Info extends React.Component{
	constructor(props,context){
		super(props,context);
		this.state = {
			data : []
		}
	}
	render(){
		return(
			<div>
				<InfoComponent data={this.state.data}/>
			</div>
		)
	}

	componentDidMount(){
		var id = this.props.id;
		getInfoData(id).then(resp => {
			return resp.json()
		}).then(json => {
			this.setState({
				data : json
			})
		})
	}
}

export default Info