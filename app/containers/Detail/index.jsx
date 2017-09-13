import React from 'react'
import { render } from 'react-dom'
import CommonHeader from '../../components/CommonHeader'
import Info from './subpage/Info'
import Comment from './subpage/Comment'
import Collection from './subpage/Collection'

class Detail extends React.Component{
	render(){
		return(
			<div>
				<CommonHeader title="商户详情" />
				<Info id={this.props.params.id} />
				<Collection id={this.props.params.id}/>
				<Comment id={this.props.params.id} />
			</div>
		)
	}
}

export default Detail