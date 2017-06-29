import React , { Component } from 'react';
import GameNew from './gameNew';
import $ from 'jquery';
import './index.css'

class GameNews extends Component {

	constructor() {
		super();
		this.state = {
			gameNews: []
		}
	}
	
	componentWillMount() {
		$.getJSON('./gameNews.json','',(gameNews) => {
			this.setState({ gameNews });
		})
	}

	render() {
		const gameNews = this.state.gameNews;
		return(
			<div className='gameNews'>
				<h2><span className='f60'>游戏</span>新闻</h2>
				<ul className='gameNewsBody clearfix'>
					{
						gameNews.length > 0 ?
						gameNews.map((item, index) =>
							<GameNew gameNew={item} key={index} />
						) 
						: ''
					}
				</ul>
			</div>
		)
	}

}

export default GameNews;