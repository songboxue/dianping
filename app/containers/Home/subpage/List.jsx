import React from 'react'
import { render } from 'react-dom'
import './style.less'
import ListComponent from '../../../components/List'
import {getList} from '../../../fetch/home.js'
import LoadMore from '../../../components/LoadMore'

class List extends React.Component{
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
					this.state.data.length?<ListComponent data={this.state.data}/>:'加载中。。。'
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
		var city = this.props.cityName
		getList(city,0).then((resp)=>{
			return resp.json()
		}).then((json)=>{
			this.setState({
				data : json.data,
				hasMore : json.hasMore
			})
		})
	}

	LoadMore(){
		var city = this.props.cityName,
			page = this.state.page;

		this.setState({
			isLoading:true,
			isError:false
		})
		getList(city,page).then(function(response) {
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

export default List