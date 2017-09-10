import React from 'react'
import { render } from 'react-dom'
import './style.less'

class LoadMore extends React.Component{
	constructor(props, context) {
        super(props, context);
    }


	render(){
		return(
			<div className="grey is-loading" ref="wrap">
				<span>{this.props.isLoading?'加载中':''}</span>
				<span>{this.props.isError?'请检查网络连接':''}</span>
			</div>
			
		)
	}
	
	componentDidMount(){
		var loadMoreFn = this.props.LoadMoreFn,
         	wrap = this.refs.wrap,
        	timeoutId;
        function callback() {
            const top = wrap.getBoundingClientRect().top
            const windowHeight = window.screen.height + 1          
            if (top && top < windowHeight) {
                // 证明 wrapper 已经被滚动到暴露在页面可视范围之内了
                loadMoreFn()
            }
        }
        window.addEventListener('scroll',function(){
        	
        	if(this.props.isLoading){
	        	return
	        }
	        if(timeoutId){
	        	clearTimeout(timeoutId)
	        }
	        timeoutId = setTimeout(callback,50)
        }.bind(this))
        
	}


}

export default LoadMore