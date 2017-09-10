import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'

import ListCompoent from '../../../components/List'
import LoadMore from '../../../components/LoadMore'

import { getSearchData } from '../../../fetch/search'

// 初始化一个组件的 state
const initialState = {
    data: [],
    hasMore: false,
    isLoading: false,
    page: 1
}

class SearchList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = initialState
    }
    render() {
        return (
            <div>
                {
                    this.state.data.length
                    ? <ListCompoent data={this.state.data}/>
                    : <div>加载中</div>
                }
                {
                    this.state.hasMore
                    ? <LoadMore isLoading={this.state.isLoading} LoadMoreFn={this.LoadMore.bind(this)}/>
                    : ''
                }
            </div>
        )
    }
    componentDidMount(){
		this.initData();
	}
	
	initData(){
		var cityName = this.props.userinfo.cityName,
			category = this.props.category,
			keyword = this.props.keyword;
		getSearchData(0, cityName, category, keyword).then((resp)=>{
			return resp.json()
		}).then((json)=>{
			this.setState({
				data : json.data,
				hasMore : json.hasMore
			})
		})
	}

	LoadMore(){
		var cityName = this.props.userinfo.cityName,
			page = this.state.page,
			category = this.props.category,
			keyword = this.props.keyword;

		this.setState({
			isLoading:true,
			isError:false
		})
		getSearchData(page, cityName, category, keyword).then(function(response) {
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
    // 处理重新搜索
    componentDidUpdate(prevProps, prevState) {
        const keyword = this.props.keyword
        const category = this.props.category

        // 搜索条件完全相等时，忽略。重要！！！
        if (keyword === prevProps.keyword && category === prevProps.category) {
            return
        }

        // 重置 state
        this.setState(initialState)

        // 重新加载数据
        this.initData()
    }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchList)