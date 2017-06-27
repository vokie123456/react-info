import React , { Component } from 'react';

class Game extends Component {

	render() {
		const game = this.props.game;
		var iconStyle = {};
		if (this.props.number === 0) {
			iconStyle = {
				background: `url(${this.props.icon}) no-repeat`
			}
		} else {
			iconStyle = {
				background: `url(${this.props.icon}) 0 -42px no-repeat`
			}
		}
		return(
			<li>
				<img src={`http://s0.static.duoqu.com/www/v2/img/global/game_photo_${game.id}.jpg`}
					 alt={game.name}
				/>
				<p className='gameDes'>{game.name}</p>
				<div className='gameNews'>
					<div className='left'>
						<p>{game.name}</p>
						<p>
							<a href={game.server} target="_blank" rel="noopener noreferrer">官网</a>
							|
							<a href={game.bbsUrl} target="_blank" rel="noopener noreferrer">论坛</a>
						</p>
					</div>
					<div className='right'>
						<p>{game.type}</p>
						<p>
							<a href={`http://www.duoqu.com/game/play/index/g/${game.id}/s/0`} 
							target="_blank" rel="noopener noreferrer">进入新区</a>
						</p>
					</div>
				</div>
				<div className='icon' style={iconStyle}>
				</div>
			</li>
		)
	}

}

export default Game;