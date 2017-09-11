import React from 'react'
import { render } from 'react-dom'
import CommentComponent from '../../../components/Comment'
import LoadMore from '../../../components/LoadMore'
import { getCommentData } from '../../../fetch/detail'

class Comment extends React.Component{
	constructor(props, context) {
        super(props, context); 
        this.state = {
        	data : [],
        	hasMore : false,
        	page : 1,
        	isLoading : false,
        	isError : false
        }
    }

	
	render(){
 		
		return(
			<div>				
				{
					this.state.data.length?<CommentComponent data={this.state.data}/>:'加载中。。。'
				}
				{
					this.state.hasMore
					?<LoadMore isLoading={this.state.isLoading} LoadMoreFn={this.LoadMore.bind(this)} isError={this.state.isError}/>
					:''
				}
			</div>
		)

	}

	componentDidMount(){
		this.initData();
	}
	
	initData(){
		var id = this.props.id
		getCommentData(0,id).then((resp)=>{
			return resp.json()
		}).then((json)=>{
			
			this.setState({
				data : json.data,
				hasMore : json.hasMore
			})
		})
	}

	LoadMore(){
		var id = this.props.id,
			page = this.state.page;

		this.setState({
			isLoading:true,
			isError:false
		})
		getCommentData(page,id).then(function(response) {
			if(response){
				return response.json();
			}else{
				throw new Error() //抛出异常，直接执行catch
			}
		}).then((json)=>{
			this.setState({
				data : this.state.data.concat(json.data),
				hasMore : json.hasMore,
				page : page + 1,
				isLoading : false
			})
		}).catch(e=>{
			this.setState({
				isLoading : false,  //加载中置为false，不然后面都无法加载了
				isError : true      //将加载中和网络错误两种情况分开
			})
		})
	}

}

export default Comment