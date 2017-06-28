import React, { Component } from 'react';
import HomeSlide from './homeSlide/homeSlide';
import GameRec from './gameRec/gameRec';
import OpenServer from './openServer/openServer';
class Home extends Component {
	
	render() {
		return (
			<div className='home'>
				<HomeSlide/>
				<div className="wapper">
					<div className="part1">
						<div className="container">
							<div className="wapperLeft">
								<GameRec/>
							</div>
							<div className="wapperRight">
								<OpenServer/>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}

} 

export default Home;