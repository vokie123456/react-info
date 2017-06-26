import React , { Component } from 'react';

class SlideBtn extends Component {

	render() {
		return(
			<div className='slideBtn'>
				<div className='left' onClick={ () => this.props.changePageNow(this.props.pageNow - 1)}>
					<span className="iconfont icon-Left">
					</span>
				</div>
				<div className='right' onClick={ () => this.props.changePageNow(this.props.pageNow + 1)}>
					<span className="iconfont icon-right">
					</span>
				</div>
			</div>
		)
	}

}

export default SlideBtn;