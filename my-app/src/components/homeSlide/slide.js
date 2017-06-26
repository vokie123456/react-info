import React , { Component } from 'react';
import $  from 'jquery';

class Slide extends Component {
	

	componentDidMount() {
		// 滑动到幻灯上 自动更新页码取消 滑出添加页码自动更新
		var self = this;
		$(".homeSlide").hover(function(){
			self.props.removeUpdatePage();
		},function(){
			self.props.updataPage();
		})
	}

	componentDidUpdate() {
		// 数据更新之后把 marginLeft 添加动画
		$(".slide").animate({
			'marginLeft': this.props.slide.pageNow * -100 + '%'
		},500)
	}

	render() {
		var slide = this.props.slide
		return (
			<div className='slide' style={{
				'width': `${slide.imgs.length * 100}%`
			}}>
				{
					slide.imgs.length > 0 ? 
					slide.imgs.map((item,index) =>
						<a key={index} title={item.des} href={item.href} rel="noopener noreferrer"  target="_blank" style={{
						'background': `url(${item.src}) top center no-repeat`,
						'height': slide.imgHeight + 'px',
						'width': `${100 / slide.imgs.length }%`
						}}>{item.des}</a>
					)
					 : ''
				}
			</div>
		)

	}
}

export default Slide;