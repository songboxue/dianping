import React from 'react'
import { render } from 'react-dom'
import {Link} from 'react-router'
import './style.less'

class List extends React.Component{
	constructor(props, context) {
        super(props, context);
    }


	render(){
		
		return(
			<div>
				<ul>
					{this.props.data.map((item,index)=>{
						return (<Link to={'/detail/'+item.id} key={index} > 
						<li className="rec-list">
							<div className="float-left list-img">
								<img src={item.img} alt={item.title}/>
							</div>
							<div className="list-content">
								<p className="first-line">
									<span className="float-left sell-title">{item.title}</span>
									<span className="float-right list-range">{item.distance}</span>
								</p>
								<p className="list-desc">{item.subTitle}</p>
								<p className="last-line">
									<span className="price">￥<span>{item.price}</span></span>
									<span className="float-right sold-num">已售{item.mumber}</span>
								</p>
							</div>					
						</li>
						</Link>
						)
								
						
					})}
				</ul>
			</div>
			
		)
	}
}

export default List