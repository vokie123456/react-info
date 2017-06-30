import React , { Component } from 'react';
import HeadFigure from './common/headFigure';
import GameListNav from './gameList/gameListNav';
import GameListContent from './gameList/gameListContent';
import $ from 'jquery';

const headFigureImg  = require('../images/gameListHeadFigure.jpg');

class GameList extends Component {

	constructor() {
		super();
		/**
		 * [state 游戏列表数据]
		 * @headFigureImg {头图图片地址}
		 * @gameInfoArr 所有游戏信息 [array]
		 * @gameNav 所有游戏类型 外加多趣网游戏 默认多趣网游戏(全部游戏)
		 * @gameInfo 根据导航筛选后的游戏信息，默认是所有游戏信息
		 * @navIndex nav序号 默认0 切换的时候要用
		 */
		this.state = {
			headFigureImg: headFigureImg,
			gameInfoArr: [],
			gameNav: [],
			gameInfo: [],
			navIndex: 0
		}
		this.changeGameInfo = this.changeGameInfo.bind(this);
	}

	componentWillMount() {
		$.getJSON('./gameInfo.json', '', (gameInfo) => {
			let gameNav = ['多趣网游戏'];
			gameInfo.forEach( function(element, index) {
				if (gameNav.indexOf(element.type) === -1) {
					gameNav.push(element.type)
				};
			});
			this.setState({
				gameInfoArr: gameInfo,
				gameNav: gameNav,
				gameInfo: gameInfo
			})
		})
	}
	/**
	 * [changeGameInfo 改变nav 获得此类型 在信息中找到符合类型的条目]
	 * @param  {[number]} navIndex [改变nav index]
	 */
 	changeGameInfo(navIndex) {
 		if (navIndex !== 0) {
 			let type = this.state.gameNav[navIndex];
	 		let gameInfo = [];
	 		gameInfo = this.state.gameInfoArr.filter(function(info){
	 			return info.type === type;
	 		});
	 		this.setState({
	 			gameInfo,navIndex
	 		})
 		} else {
 			this.setState({
	 			gameInfo: this.state.gameInfoArr,
	 			navIndex: navIndex
	 		})
 		}
 	}

	render() {
		return (
			<div className='gameListBody'>
				<HeadFigure headFigureImg={this.state.headFigureImg}/>
				<div className='gameList'>
					<GameListNav gameNav={this.state.gameNav} 
					navIndex={this.state.navIndex} changeGameInfo={this.changeGameInfo}/>
					<GameListContent gameInfo={this.state.gameInfo}/>
				</div>
			</div>
		)
	}

}

export default GameList;