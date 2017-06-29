import React , { Component } from 'react';
import Gift from './gift';
import $ from 'jquery';
import './index.css'

class HotGift extends Component {

	constructor() {
		super();
		this.state = {
			hotGift:[]
		}
	}

	componentWillMount(){
		$.getJSON('./hotGift.JSON','',(hotGift) => {
			this.setState({ hotGift });
		});
	}

	render() {
		const hotGift = this.state.hotGift;
		return (
			<div className="hotGift">
				<h2>
					<span className='f60'>热门</span>礼包
					<a href='http://www.baidu.com' target="_blank" rel="noopener noreferrer">&gt;&gt;</a>
				</h2>
				<ul className='clearfix'>
					{
						hotGift.length > 0 ? 
						hotGift.map((item, index) => 
							<Gift gift={item} key={index}/>
						)
						: ''
					}
				</ul>
			</div>
		)
	}

}

export default HotGift;