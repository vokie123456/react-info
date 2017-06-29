import React , { Component } from 'react';

class Game extends Component {

	render() {
		const game = this.props.game;
		return (
			<li style={{'background': `url(http://s0.static.duoqu.com/www/v2/img/global/game_pic_${game.id}.jpg) no-repeat` }}>
				<p className='gameName'>{game.name}</p>
				<p className='gameType'>[{game.type}]</p>
				<p className='gameNameL'>{game.name}</p>
				<div className='hrefGroup'>
					<a href={game.server} target='_blank' rel="noopener noreferrer">官网</a>
					|
					<a href={game.bbsUrl} target='_blank' rel="noopener noreferrer">论坛</a>
				</div>
				<a className='btn' href={`http://www.duoqu.com/game/play/index/g/${game.id}/s/*`} target='_blank' rel="noopener noreferrer">进入新区</a>
			</li>
		)
	}

}

export default Game;