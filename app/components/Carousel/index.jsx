import React from 'react'
import { render } from 'react-dom'
import './style.less'
import ReactSwipe from 'react-swipe'

class Carousel extends React.Component{
	constructor(props, context) {
        super(props, context);
        this.state = {index : 0};        
    }

	
	render(){
 		var opt = {
 			auto : 2000,
 			callback : (index) => {
 				this.setState({
 					index : index
 				}) 				
 			}
 		}

		return(
			<div className="wrap">
				<ReactSwipe className="carousel" swipeOptions={opt}>
	                <div>PANE 1</div>
	                <div>PANE 2</div>
	                <div>PANE 3</div>
	            </ReactSwipe>
	            <ul className="car-ctrl">
	            	<li className={this.state.index==0?'red':''}></li>
	            	<li className={this.state.index==1?'red':''}></li>
	            	<li className={this.state.index==2?'red':''}></li>
	            </ul>
			</div>			
		)

	}

	// componentDidMount(){
	// 	let li = document.getElementsByClassName('car-ctrl')[0].getElementsByTagName('li');
	// 	console.log(this.state.index);
	// 	li[this.state.index].classList.add("red");
	// }
}

export default Carousel