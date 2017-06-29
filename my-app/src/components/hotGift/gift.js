import React , { Component } from 'react';

class Gift extends Component {

	render() {
		const gift = this.props.gift;
		return(
			<li>
				<div className='icon'>
					<img src={`http://s0.static.duoqu.com/www/v2/img/
						global/game_icon_${gift.id}.jpg`} alt={gift.name}/>
				</div>
				<div className='des'>
					<p>{gift.name}礼包</p>
					<a href={`http://www.duoqu.com/game/card/index?g=${gift.id}&type=0`}
					 target="_blank" rel="noopener noreferrer">立即领取</a>
				</div>
			</li>
		)
	}

}

export default Gift;