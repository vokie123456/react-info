import React , { Component } from 'react';
import $ from 'jquery';

class RecSlide extends Component {

	componentDidMount() {
		// 添加滑入取消更新页码 划出更新页码的操作
		const self = this;
		$(this.info).hover(function(){
			self.props.removeUpDatePage();
		},function(){
			self.props.upDateChangePage();
		})
	}

	componentDidUpdate(){
		// 每次更新之后根据当前页码获得 margin-top 然后进行动画，当运行一轮时候切换到 0
		// 注意 信息循环了两次 最大边界是到第二轮的第一条 ！！！
		var height = $(this.info).find('li').height();
		$(this.info).animate({
			marginTop: ( - height * this.props.pageNow) + 'px'
		},()=>{
			// 当到达 第二轮第一个时候 切换到0;
			if (this.props.pageNow === this.props.info.length) {
				this.props.changePage(0);
				$(this.info).css({
					marginTop: 0
				})
			}
		})
	}

	render() {
		var info = this.props.info;
		return(
			<div className='recSlide' style={{'background': `url(${this.props.icon}) left center no-repeat`}}>
				<ul className='info' ref={ (info) => this.info = info}>
					{ 
						info.length > 0 ?
						info.map((item,index) => 
							<li key={index}>
								<a href={item.href} title={item.title}>{item.title}</a>
							</li>
						)
					    : ''
					}
					{ 
						info.length > 0 ?
						info.map((item,index) => 
							<li key={index}>
								<a href={item.href} title={item.title}>{item.title}</a>
							</li>
						)
					    : ''
					}
				</ul>
			</div>
		)
	}

}

export default RecSlide; 