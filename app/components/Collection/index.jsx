import React from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import './style.less'

class CollectionComponent extends React.Component{
	constructor(props, context) {
        super(props, context);
    }


	render(){
		return(
			<div>
				{
					this.props.collected
					?<button className="add-coll coll-btn">已收藏</button>
					:<button className="in-coll coll-btn" onClick={this.addColl.bind(this)}>加入收藏</button>
				}
			</div>
			
		)
	}

	addColl(){
		var addCollFn = this.props.addCollFn;
		addCollFn();
	}
	
}

function mapStateToProps(state){
	return{
		userinfo : state.userinfo
	}
}

function mapDispatchToProps(dispatch){
	return{}
}

export default connect(
	mapStateToProps,
  	mapDispatchToProps
)(CollectionComponent)