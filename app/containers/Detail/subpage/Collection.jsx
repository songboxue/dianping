import React from 'react'
import { render } from 'react-dom'
import CollectionComponent from '../../../components/Collection'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as myActions from '../../../actions'
import { hashHistory } from 'react-router'



class Collection extends React.Component{
	constructor(props,context){
		super(props,context);
		this.state = {
			collected : false
		}

	}
	render(){
		return(
			<div>
				<CollectionComponent collected={this.state.collected} addCollFn={this.addColl.bind(this)}/>
			</div>
		)
	}
	
	componentDidMount(){
		//如果id在redux的collection中有数据，则重置state		
		this.checkColl();
	}

	// 加入收藏fn
	addColl(){
		var flag = false;
		flag = this.checkLogin();
		if(!flag){
			return
		}		
		var collection = this.props.collection,
			userInfoActions = this.props.userInfoActions;
		var id = this.props.id;
		console.log(id);
		userInfoActions.add(id);
		this.setState({
			collected : true
		})

	}

	checkColl(){
		var id = this.props.id;
		var collection = this.props.collection;			
		if(collection.indexOf(id)>-1){
			this.setState({
				collected : true
			})
			return true
		}
		return false
	}

	checkLogin(){
		var id = this.props.id
        var userinfo = this.props.userinfo
        if (!userinfo.username) {
            // 跳转到登录页面的时候，要传入目标router，以便登录完了可以自己跳转回来
            hashHistory.push('/Login/' + encodeURIComponent('/detail/' + id))
            return false
        }
        return true
	}

}
function mapStateToProps(state){
	return{
		userinfo :state.userinfo,
		collection : state.collection
	}
}

function mapDispatchToProps(dispatch){
	return{
		userInfoActions : bindActionCreators(myActions, dispatch)
	}
}

export default connect(
	mapStateToProps,
  	mapDispatchToProps
)(Collection)