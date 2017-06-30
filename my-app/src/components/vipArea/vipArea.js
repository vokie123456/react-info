import React , { Component } from 'react';
import VipNav from './vipNav';
import VipBody from './vipBody';
import $ from 'jquery';
import './index.css';

class VipArea extends Component {

	constructor() {
		super();
		/**
		 * [state 所需数据]
		 * @nav {Array 导航数组里面有导航的数据}
		 * @body {Object 显示的数据根据(小类) 根据nav切换}
		 * @bodyAll {Object 显示数据集合 初始化后数据不变}
		 * @tpl {String 当前body在 bodyAll 所在的类别 根据nav切换}
		 */
		this.state = {
			nav: [],
			body: {},
			bodyAll: {},
			tpl: ''
		}
		this.changeVipBody = this.changeVipBody.bind(this);
	}

	componentWillMount() {
		$.getJSON('./vipArea.json', '',(data) => {
			// 初始化
			this.setState({
				 nav: data.nav,
				 tpl: data.nav[0].code,
				 body: data.body[data.nav[0].code],
				 bodyAll: data.body
			});
		})
	}
	// 
	changeVipBody(tpl) {
		this.setState({ tpl: tpl });
		this.setState({ body: this.state.bodyAll[tpl]});
	}

	render() {
		return(
			<div className='vipArea'>
				<h2><span className='f60'>VIP</span>专区</h2>
				<div className='vipAreaBody clearfix'>
					<div className='left'>
						<VipNav nav={this.state.nav} changeVipBody={this.changeVipBody} tpl={this.state.tpl}/>
					</div>
					<div className='right'>
						<VipBody body={this.state.body}/>
					</div>
				</div>
			</div>
		)
	}

}

export default VipArea;