import React from 'react'
import { render } from 'react-dom'
import Star from '../Star'
import './style.less'

class Comment extends React.Component{
	constructor(props, context) {
        super(props, context);
    }


	render(){
		var dataArr = [];
		if(this.props.data.data){
			dataArr = this.props.data.data
		}
		return(
			<div>
				<div className="separator"></div>
				<div className="comment-list">
					<h2>用户点评</h2>
					<ul>
						{dataArr.map((item,index)=>{
							return <li key={index} className="comment-item">
										<h3><i className="icon-user"></i>{item.username}</h3>
						                <Star level={item.star}/>
						                <p>{item.comment}</p>
									</li>
						})}
						

					</ul>
				</div>
				
			</div>
			
		)
	}

}

export default Comment