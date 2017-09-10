import React from 'react'
import { render } from 'react-dom'
import CommentComponent from '../../../components/Comment'
import { getCommentData } from '../../../fetch/detail'

class Comment extends React.Component{
	constructor(props,context){
		super(props,context);
		this.state = {
			data : []
		}
	}

	render(){
		return(
			<div>
				<CommentComponent data={this.state.data}/>
			</div>
		)
	}

	componentDidMount(){
		var id = this.props.id;
		getCommentData(0,id).then(resp => {
			return resp.json()
		}).then(json => {
			
			this.setState({
				data : json
			})
		})
	}
}

export default Comment