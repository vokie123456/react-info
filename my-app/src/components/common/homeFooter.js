import React , { Component } from 'react';
import { Link } from 'react-router'

class HomeFooter extends Component {

	render() {
		return (
			<div className='footer'>
				<ul>
					<li><Link to='/corporate'>商务合作</Link></li>
					<li><Link to='/author'>关于作者</Link></li>
				</ul>
			</div>
		)
	}
	
}

export default HomeFooter;