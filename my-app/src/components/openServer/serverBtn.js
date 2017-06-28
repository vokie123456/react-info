import React , { Component } from 'react';

class ServerBtn extends Component {

	render() {
		return(
			<div className='serverBtnGroup'>
				<span className="iconfont icon-arrow-left" 
				onClick={() => this.props.changePage(this.props.pageNow - 1)}>
				</span>
				<span className="num">{this.props.pageNow}/{this.props.pageMax}</span>
				<span className="iconfont icon-arrow-right" 
				onClick={() => this.props.changePage(this.props.pageNow + 1)}>
				</span>
			</div>
		)
	}

}

export default ServerBtn;