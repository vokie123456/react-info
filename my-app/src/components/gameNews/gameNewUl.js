import React , { Component } from 'react';

class GameNewUl extends Component {

	render() {
		const news = this.props.gameNewUl;
		return (
			<ul className='gameNewUl'>
				{
					news.map((item, index) =>
						<li key={index} >
							<a href={item.href} target="_blank" rel="noopener noreferrer"
							title={item.title}>{item.title}</a>
							<span>{item.time}</span>
						</li>
					)
				}
			</ul>
		)
	}

}

export default GameNewUl;