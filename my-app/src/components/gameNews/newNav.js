import React , { Component } from 'react';
import $ from 'jquery';

class NewNav extends Component {

	componentDidMount(event){
		// 点击切换导航的样式
		$(".newNav span").click(function(event){
			$(this).addClass('active').siblings().removeClass('active');
		})
	}

	render() {
		const newsNavArr = this.props.newsNavArr;
		const changeGameNewUl = this.props.changeGameNewUl;
		return(
			<div className='newNav'>
				<span className='active' onClick={() => changeGameNewUl(newsNavArr[0])}>综合新闻</span>
				<i>|</i>
				<span onClick={() => changeGameNewUl(newsNavArr[1])}>精品攻略</span>
			</div>
		)
	}

}

export default NewNav;