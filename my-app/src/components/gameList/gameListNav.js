import React , { Component } from 'react';
import './index.css'

class GameListNav extends Component {

	render(){
		const  gameNav = this.props.gameNav;
		const  navIndex = this.props.navIndex;
		return(
			<div className="gameListNav ">
				<div className="container">
					<ul>
						{
							gameNav.length > 0 ?
							gameNav.map((item, index) =>
								<li key={index} className={index === navIndex ? 'active' : ''}
								onClick={() => this.props.changeGameInfo(index) }>
									<span>{item}</span>
								</li>
							)
							:""
						}
					</ul>
				</div>
			</div>
		)
	}

}

export default GameListNav;