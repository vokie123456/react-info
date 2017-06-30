import React , { Component } from 'react';

class HeadFigure extends Component {
	render() {
		const headFigureImg = this.props.headFigureImg;
		return(
			<div className='headFigure' style={{'background'
			: `url(${headFigureImg}) top center no-repeat`}}>
			</div>
		)
	}

}

export default HeadFigure;