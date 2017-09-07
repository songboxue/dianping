import React from 'react'
import { render } from 'react-dom'
import './style.less'

class CityList extends React.Component{
	constructor(props, context) {
        super(props, context);
    }


	render(){
		return(
			<div className="city-list clear-fix">
				<h2>城市列表</h2>
				<ul>
					<li>
						<span onClick={this.changeCity.bind(this,"北京")}>北京</span>
					</li>
					<li>
						<span onClick={this.changeCity.bind(this,"上海")}>上海</span>
					</li>
					<li>
						<span onClick={this.changeCity.bind(this,"广州")}>广州</span>
					</li>
					<li>
						<span onClick={this.changeCity.bind(this,"深圳")}>深圳</span>
					</li>
					<li>
						<span onClick={this.changeCity.bind(this,"南京")}>南京</span>
					</li>
					<li>
						<span onClick={this.changeCity.bind(this,"杭州")}>杭州</span>
					</li>
					<li>
						<span onClick={this.changeCity.bind(this,"重庆")}>重庆</span>
					</li>
					<li>
						<span onClick={this.changeCity.bind(this,"成都")}>成都</span>
					</li>
				</ul>
			</div>
			
		)
	}

	changeCity(name){
		var changeCityFn = this.props.changeCityFn;
		changeCityFn(name);
	}
	
}

export default CityList