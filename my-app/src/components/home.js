import React, { Component } from 'react';
import HomeSlide from './homeSlide/homeSlide';
import GameRec from './gameRec/gameRec';
import OpenServer from './openServer/openServer';
import GameBoutique from './gameBoutique/gameBoutique';
import HotGift from './hotGift/hotGift';
import GameNews from './gameNews/gameNews';
class Home extends Component {
	
	render() {
		return (
			<div className='home'>
				<HomeSlide/>
				<div className="wapper">
					 {/*游戏推荐和开服信息*/}
					<div className="part1">
						<div className="container">
							<div className="wapperLeft">
								<GameRec/>
							</div>
							<div className="wapperRight">
								<OpenServer/>
							</div>
						</div>
					</div>
					{/*热门游戏和礼包领取*/}
					<div className='part clearfix'>
						<div className="container">
							<div className="wapperLeft">
								<GameBoutique />
							</div>
							<div className="wapperRight">
								<HotGift/>
							</div>
						</div>
					</div>
					{/*游戏新闻和积分兑换*/}
					<div className='part clearfix'>
						<div className="container">
							<div className="wapperLeft">
								<GameNews />
							</div>
							<div className="wapperRight">
								<HotGift/>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}

} 

export default Home;