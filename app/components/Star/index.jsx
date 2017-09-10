import React from 'react'
import { render } from 'react-dom'
import './style.less'

class Star extends React.Component{
	constructor(props, context) {
        super(props, context);
    }


	render(){
		var starActive = "<i class=\"icon-star light-red\"></i>"
		var starCommon = "<i class=\"icon-star\"></i>"
		var arr = [starActive,starActive,starActive,starActive,starActive,starCommon,starCommon,starCommon,starCommon,starCommon];
		var level = parseInt(this.props.level);
		var starArray = arr.slice(5-level,10-level)
		return(
			<div className="score-star" dangerouslySetInnerHTML={{__html: starArray.join('')}}>				
				
			</div>
			
		)
	}

}

export default Star