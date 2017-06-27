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

	changePage(pageNow) {
		if (pageNow > this.state.info.length) {
			pageNow = 0;
		}
		this.setState({
			pageNow
		})
	}

	upDateChangePage(){
		clearInterval(this.timer);
		this.timer = setInterval(() => {
			const pageNow = this.state.pageNow;
			this.changePage(pageNow + 1);
		},this.state.time);
	}

	removeUpDatePage() {
		clearInterval(this.timer);
	}

	componentWillUnmount(){
		clearInterval(this.timer);
	}

	componentWillMount() {
		$.getJSON('./gameRec.json','',(data) => {
			var info = this.state.info;
			info = data;
			this.setState({ info });
		});
		const gameInfo = [{
			        id: 61,
			        name: '\u76D7\u5893\u7B14\u8BB0',
			        type: '\u89D2\u8272\u626E\u6F14',
			        url: 'http: //dmbj.duoqu.com/',
			        bbsUrl: 'http: //bbs.duoqu.com/forum-435-1.html',
			        server: 'http: //dmbj.duoqu.com/',
			        description: ''
			    },{
			        id: 62,
			        name: '\u795E\u4ED9\u52AB',
			        type: '\u89D2\u8272\u626E\u6F14',
			        url: 'http: //sxj.duoqu.com/',
			        bbsUrl: 'http: //bbs.9wee.com/forum-436-1.html',
			        server: 'http: //sxj.duoqu.com/',
			        description: ''
			    },{
			        id: 63,
			        name: '\u7B2C\u4E00\u8230\u961F',
			        type: '\u6218\u4E89\u7B56\u7565',
			        url: 'http: //dyjd.duoqu.com/',
			        bbsUrl: 'http: //bbs.9wee.com/forum-440-1.html',
			        server: 'http: //dyjd.duoqu.com/',
			        description: ''
			    },{
			        id: 70,
			        name: 'H5\u6E38\u620F\u4E13\u533A',
			        type: 'H5',
			        url: 'http: //cbl.duoqu.com/h5/',
			        bbsUrl: 'http: //cbl.duoqu.com/h5/',
			        server: 'http: //cbl.duoqu.com/h5/',
			        description: ''
			    }];
		this.setState({ gameInfo });
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