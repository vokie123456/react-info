import React , { Component } from 'react';

class InterGral extends Component {

	render() {
		const interGralArr = this.props.interGralArr;
		return(
			<ul className='interGral'>
				{
					interGralArr.length > 0 ?
					interGralArr.map((item, index) => 
						<li key={index}>
							<div className='icon'>
								<img alt={item.name} src={`http://s1.static.duoqu.com/2015/08/${item.imgHref}`}/>
							</div>
							<div className='des'>
								<p className='interGralName f60'>{item.name}</p>
								<p>市场价<span className='f60'>{item.price}</span></p>
								<a href={`http://www.duoqu.com/mall/gift/view?id=${item.id}`}
								 rel="noopener noreferrer" target='_blank'>立即使用积分兑换</a>
							</div>
						</li>
					)
					: ''
				}
			</ul>
		)
	}

}

export default InterGral;