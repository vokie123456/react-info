import React , { Component } from 'react';
import Slide from './slide';
import ControllerSlide from './controllerSlide';
import SlideBtn from './slideBtn'

import './index.css';
import $  from 'jquery';

class HomeSlide extends Component {

	constructor() {
		super();
		/**
		 * [slide 幻灯的总参数]
		 * [imgs 图片地址等信息 Array]
		 * [time 默认切换时间 毫秒 Number]
		 * [classNmae 当前控制开关的 class  string]
		 * [pageNow 当前页码 Number]
		 * [collWidth 控制开关的 宽高 Number] 
		 * [isBtn 左右按钮是否打开 Boolean]
		 */
		this.state = {
			slide: {
				imgs: [],
				time: 3000,
				className: 'active',
				pageNow : 0,
				imgHeight : 390,
				collWidth: 13,
				isBtn : true
			}
		}
		this.changePageNow = this.changePageNow.bind(this);
		this.updataPage = this.updataPage.bind(this);
		this.removeUpdatePage = this.removeUpdatePage.bind(this);
	}

	componentWillMount() {
		var self = this;
		var imgs = [];
		// 模拟请求图片信息，并添加到 state.slide中
		$.getJSON("./homeSlide.json", "", function(data) {
			data.forEach( function(element, index) {
				var img = {
					src: require('../../images/' + element.src),
					des: element.des,
					href: element.href
				};
				imgs.push(img);
			});
			var slide = self.state.slide;
			slide.imgs = imgs;
			self.setState({
				slide
			});
		});
	}

	componentDidMount() {
		this.updataPage();
	}
	/**
	 * [changePageNow 切换页码]
	 * @param  {[Number]} num [切换到具体页]
	 */
	changePageNow(num) {
		var slide = this.state.slide;
		if (num > slide.imgs.length - 1) {
			num = 0 ;
		}
		if (num < 0) {
			num = slide.imgs.length - 1;
		}
		slide.pageNow = num;
		this.setState({ slide });
	}
	/**
	 * [updataPage 自动更新页码]
	 */
	updataPage() {
		var slide = this.state.slide;
		this.timer = setInterval(()=>{
			this.changePageNow(slide.pageNow + 1)
		},slide.time)
	}
	/**
	 * [removeUpdatePage 移除自动更新页码]
	 */
	removeUpdatePage() {
		clearInterval(this.timer);
	}

	render() {
		return(
			<div className='homeSlide'>
				<Slide slide = {this.state.slide} removeUpdatePage={this.removeUpdatePage} updataPage={this.updataPage}/>
				<ControllerSlide slide = {this.state.slide} changePageNow = { this.changePageNow }/>
				{
					this.state.slide.isBtn ? <SlideBtn changePageNow={ this.changePageNow } pageNow={this.state.slide.pageNow}/> : ''
				}
			</div>
		)
	}

}

export default HomeSlide;