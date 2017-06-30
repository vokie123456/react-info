import React , { Component } from 'react';
import RecSlide from './slide/slide';
import GameInfo from './gameInfo/gameInfo';
import './index.css';
import $ from 'jquery';
const logo  = require('../../images/rec_icon.jpg');
const icon = require('../../images/notice_icon.jpg');
const new_icon = require('../../images/new_icon.png');

class GameRec extends Component {

	constructor(){
		super();
		/**
		 * [state 推荐游戏]
		 * @info {公告栏消息 array}
		 * @time {number 公告栏切换的时间 默认3s}
		 * @pageNow {当前公告栏 页码 number 默认 0}
		 * @gameInfo {游戏推荐相关 array}
		 */
		this.state = {
			info: [],
			time: 3000,
			pageNow: 0,
			gameInfo: []
		}
		this.changePage = this.changePage.bind(this);
		this.upDateChangePage = this.upDateChangePage.bind(this);
		this.removeUpDatePage = this.removeUpDatePage.bind(this);
	}

	componentDidMount(){
		this.upDateChangePage();
	}
	/**
	 * [changePage 公告栏页码]
	 * @param  {[number]} pageNow [目标页码]
	 */
	changePage(pageNow) {
		if (pageNow > this.state.info.length) {
			pageNow = 0;
		}
		this.setState({
			pageNow
		})
	}
	// 定时更新页码
	upDateChangePage(){
		clearInterval(this.timer);
		this.timer = setInterval(() => {
			const pageNow = this.state.pageNow;
			this.changePage(pageNow + 1);
		},this.state.time);
	}
	// 移除更新页码的操作
	removeUpDatePage() {
		clearInterval(this.timer);
	}
	// 移除更新页码的操作
	componentWillUnmount(){
		clearInterval(this.timer);
	}

	componentWillMount() {
		// 初始化公告栏信息
		$.getJSON('./gameRec.json','',(data) => {
			var info = this.state.info;
			info = data;
			this.setState({ info });
		});
		// 初始化游戏推荐信息
		$.getJSON("./gameInfo.json",'', (gameInfo) => {
			gameInfo = gameInfo.reverse().splice(0,4);
			this.setState({ gameInfo });
		})
		
	}

	render() {
		return (
			<div className='gameRec'>
				<h2 className='title' style={
					{
						'background':`url(${logo}) left center no-repeat`
					}
					} >
					<RecSlide icon={icon} 
					 removeUpDatePage={this.removeUpDatePage}
					 info = {this.state.info} 
					 pageNow={this.state.pageNow} 
					 changePage={this.changePage} 
					 upDateChangePage={this.upDateChangePage}/>
				</h2>
				<GameInfo gameInfo={this.state.gameInfo} icon={new_icon}/>
			</div>
		)
	}

}

export default GameRec;