import React , { Component } from 'react';

class GameListContent extends Component {

	render() {
		const gameInfo = this.props.gameInfo;
		return(
			<div className='gameListContent'>
				<div className="container">
					<ul>
						{
							gameInfo.length > 0 ? 
							gameInfo.map((item, index) =>
								<li key={index}>
									<div className='left'>
										<a className='gameName' href={item.url} 
										target='_blank' rel="noopener noreferrer">{item.name}</a>
										<p>类型：<span className="green">{item.type}</span></p>
										<p>题材：<span className="green">三国</span></p>
										<p>表现：<span className="green">2D</span></p>
										<p>风格：<span className="green">唯美写真</span></p>
										<p>战斗：<span className="green">回合制</span></p>
										<p>适合：<span className="green">成功人士</span></p>
									</div>
									<div className='right'>
										<img src="http://s1.static.duoqu.com/2013/08/zT5tY3xqWN.200_600_1.jpg" alt={item.name}/>
									</div>
								</li>
							)
							: ''
						}
					</ul>
				</div>
			</div>
		)
	}

}

export default GameListContent;