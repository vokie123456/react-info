import React  ,  { Component } from 'react';
import ServerList from './serverList';

import $ from 'jquery';
import './index.css';
class OpenServer extends Component {

	constructor() {
		super();
		/**
		 * [state description]
		 * @serverList {[Array] 当前传出去的开服信息}
		 * @pageServerNum {Number 每页的开服信息条目 默认4条} 
		 * @pageNow {[Number] 当前页码 默认第一页}
		 * @pageMax {[Number] 最大页码 默认最大页码 0 }
		 */
		this.state = {
			serverList: [],
			pageServerNum: 4,
			pageNow: 1,
			pageMax: 0  
		}
		this.changePage = this.changePage.bind(this);
	}

	componentWillMount() {
		/**
		 * 初次请求数据 设置当前开服信息 、最大页码
		 */
		$.getJSON('./openServer.json','',(data) => {
			this.setState({ serverList: data.slice(0, this.state.pageServerNum ) });
			this.setState({ pageMax: Math.ceil(data.length / this.state.pageServerNum )});
		});
	}
	/**
	 * [changePage 改变当前页码并判断边界,根据当前页码和默认条目筛选开服信息]
	 */
	changePage(pageNow) {
		if (pageNow > this.state.pageMax) {
			pageNow = 1;
		}
		if (pageNow < 1 ) {
			pageNow = this.state.pageMax;
		}
		$.getJSON('./openServer.json','',(data) => {
			this.setState({ pageNow }, () => {
				this.setState( {
					serverList: data.splice((pageNow - 1) 
						* this.state.pageServerNum, this.state.pageServerNum)
				})
			})
		})
	}

	render() {
		return(
			<div className='openServer'>
				<h2>最新开服</h2>
				<ServerList serverList={this.state.serverList} 
				pageNow= {this.state.pageNow} 
				changePage={this.changePage} 
				pageMax = {this.state.pageMax} />
			</div>
		)
	}

}

export default OpenServer;