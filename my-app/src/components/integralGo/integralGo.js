import React , { Component } from 'react';
import InterGral from './interGral';
import $ from 'jquery';
import './index.css';

class IntegralGo extends Component {

	constructor() {
		super();
		this.state = {
			interGralArr:[]
		}
	}

	componentWillMount() {
		$.getJSON('./interGral.json', '', (interGralArr) => {
			this.setState({ interGralArr });
		});
	}

	render() {
		return(
			<div className='integralGo'>
				<h2>
					<span className='f60'>积分</span>兑换
					<a href='http://www.duoqu.com/mall/gift/index' 
					target="_blank"  rel="noopener noreferrer">&gt;&gt;</a>
				</h2>
				{/*积分兑换主体*/}
				<InterGral interGralArr={this.state.interGralArr}/>
			</div>
		)
	}

} 

export default IntegralGo;