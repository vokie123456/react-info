import React , { Component } from 'react';
import GameNewUl from './gameNewUl';
import NewNav from './newNav';

class GameNew extends Component {

	constructor(props) {
		super(props);
		// 默认为新闻类型 , 导航数组给出 
		this.state = {
			gameNewUl : this.props.gameNew.news,
			newsNavArr: ['news','gl']
		}
		this.changeGameNewUl = this.changeGameNewUl.bind(this);
	}
	/**
	 * [changeGameNewUl 切换gameNewUl的类别 当前有 news gl]
	 * @param  {[sting]} tpl [类别 例子 news]
	 */
	changeGameNewUl(tpl) {
		const gameNewUl = this.props.gameNew[tpl];
		this.setState({ gameNewUl });
	}

	render() {
		const gameNewUl = this.state.gameNewUl;
		const gameNew = this.props.gameNew;
		return(
			<li className="gameNew">
				<div className='gameNewTop clearfix'>
					<div className='left'>
						{gameNew.name}
					</div>
					<div className='right'>
						{/*导航 切换内容信息*/}
						<NewNav newsNavArr={this.state.newsNavArr} 
						changeGameNewUl={this.changeGameNewUl}/>
						<a href={gameNew.href} target='_blank' rel="noopener noreferrer">
						&gt;&gt;</a>
					</div>
				</div>
				<div className='gameNewDown'>
					{/*内容*/}
					<GameNewUl gameNewUl={gameNewUl}/>
					}
				</div>
			</li>
		)
	}

}

export default GameNew;