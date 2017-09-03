import React from 'react'
import { render } from 'react-dom'
import Header from '../../components/Header'

class Home extends React.Component{
	constructor(props, context) {
        super(props, context);
    }

	render(){
		return(
			<div>
				<Header />
			</div>
		)
	}
}

export default Home