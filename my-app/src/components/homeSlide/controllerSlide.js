import React , { Component } from 'react';

class ControllerSlide extends Component {

	render() {
		var slide = this.props.slide;
		return (
			<ul className='constrollSlide' style={{'bottom': slide.collWidth + 'px'}}>
				{
					slide.imgs.length > 0 ?
					slide.imgs.map((item,index) => 
						<li key={index} style={{
							'width': slide.collWidth + 'px',
							'height': slide.collWidth + 'px'
						}} 
						className={ index === slide.pageNow ? slide.className :''} 
						onClick= { () =>this.props.changePageNow(index)}
						>
						</li>
					)
					: ''
				}
			</ul>
		)
	}

}

export default ControllerSlide;