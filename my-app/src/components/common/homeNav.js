import React , { Component } from 'react';
import { Link } from 'react-router';
const logo  = require('../../images/logo.jpg');

class HomeNav extends Component {

	render() {
		return (
			<div className='homeNav'>
				<div className="container">
					<img src={logo} alt='logo'/>
					<ul>
						<li><Link to="/home" activeClassName="active">首页</Link></li>
						<li><Link to="/game/list" activeClassName="active">游戏列表</Link></li>
						<li><Link to="/user/list" activeClassName="active">用户列表</Link></li>
						<li><Link to="/opinion" activeClassName="active">反馈中心</Link></li>
						<li><Link to="/about" activeClassName="active" >关于我们</Link></li>
					</ul>
				</div>
			</div>
		)
	}

}

export default HomeNav;