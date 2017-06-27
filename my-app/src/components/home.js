import React, { Component } from 'react';
import HomeSlide from './homeSlide/homeSlide';
import GameRec from './gameRec/gameRec';

class Home extends Component {
	
	render() {
		return (
			<div className='home'>
				<HomeSlide/>
				<div className="wapper">
					<div className="container">
						<div className="wapperLeft">
							<GameRec/>
						</div>
						<div className="wapperRight">
						</div>
					</div>
				</div>
			</div>
		)
	}

} 

export default Home;