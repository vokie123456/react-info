import React , { Component } from 'react';
import Game from './game';
import './index.css';

class GameBoutique extends Component {

	constructor(){
		super();
		this.state = {
			gameInfo: []
		}
	}

	componentWillMount(){
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
			        id: 59,
			        name: 'H5\u6E38\u620F\u4E13\u533A',
			        type: 'H5',
			        url: 'http: //cbl.duoqu.com/h5/',
			        bbsUrl: 'http: //cbl.duoqu.com/h5/',
			        server: 'http: //cbl.duoqu.com/h5/',
			        description: ''
			    },{
			        id: 53,
			        name: '\u84DD\u6708\u4F20\u5947',
			        type: '\u89D2\u8272\u626E\u6F14',
			        url: 'http: //lycq.duoqu.com/',
			        bbsUrl: 'http: //bbs.duoqu.com/forum-418-1.html',
			        server: 'http: //lycq.duoqu.com/server/',
			        description: ''
			    },{
			        id: 57,
			        name: '\u9B54\u6CD5\u738B\u5EA7',
			        type: '\u89D2\u8272\u626E\u6F14',
			        url: 'http: //mfwz.duoqu.com/',
			        bbsUrl: 'http: //bbs.9wee.com/forum-426-1.html',
			        server: 'http: //mfwz.duoqu.com/server/',
			        description: ''
			    }];
			this.setState( { gameInfo });
	}



	render() {
		const gameInfo = this.state.gameInfo;
		return (
			<div className='gameBoutique'>
				<h2>
					<span className='f60'>精品</span>游戏
					<a className='f60' href='http://www.baidu.com' target='_blank' rel="noopener noreferrer">查看更多游戏>></a>
				</h2>
				<div className='gameGroup'>
					<ul className='clearfix'>
						{
							gameInfo.length > 0 ? 
							gameInfo.map((item, index) => 
								<Game game={item} key={index} />
							)
							: ''
						}
					</ul>
				</div>
			</div>
		)
	}

}

export default GameBoutique;