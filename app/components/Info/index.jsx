import React from 'react'
import { render } from 'react-dom'
import Star from '../Star'
import './style.less'

class InfoComponent extends React.Component{
	constructor(props, context) {
        super(props, context);
    }


	render(){
		var data = this.props.data;
		return(
			<div className="info-wrap">
				<div className="clear-fix info-brief">
					<div className="float-left info-img">
						<img src={data.img} alt={data.title}/>
					</div>
					<div className="info-content">
						<h1>{data.title}</h1>
						<div className="info-score"> 
							<Star level={data.star}/>							
							<span>￥{data.price}</span>
						</div>
						<div className="info-tag">
							<span>{data.subTitle}</span>
						</div>
					</div>
				</div>
				<div className="info-desc">
					<p dangerouslySetInnerHTML={{__html: data.desc}}></p>
				</div>
			</div>
			
		)
	}

}

export default InfoComponent