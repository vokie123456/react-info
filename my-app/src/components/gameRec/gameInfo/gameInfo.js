import React , { Component } from 'react';
import Game from './game';

class GameInfo extends Component {

	render() {
		const gameInfo = this.props.gameInfo;
		return(
			<div className='gameInfo'>
				<ul className="gameList">
				{
					gameInfo.length > 0 ?
					gameInfo.map((item,index) => 
						<Game game={item} key={index} icon={this.props.icon} number={index}/>
					) : ''
				}
				</ul>
			</div>
		)
	}

}

export default GameInfo;