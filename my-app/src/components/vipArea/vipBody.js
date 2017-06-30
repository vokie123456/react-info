import React , { Component } from 'react';

class VipBody extends Component {

	render() {
		const body = this.props.body;
		return(
			<div className='vipBody clearfix'>
				<a href={body.href} rel="noopener noreferrer" target="_blank">
					<img src={body.img} alt={body.title}/>
				</a>	
			</div>
		)
	}

}

export default VipBody;
