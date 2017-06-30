import React , { Component } from 'react';

class VipNav extends Component {

	render(){
		const nav = this.props.nav;
		const tpl = this.props.tpl;
		return(
			<ul className='vipNav'>
				{
					nav.length > 0 ?
					nav.map((item, index) => 
						<li key={index} className={item.code === tpl ? 'active' : ''} onMouseOver={ () => this.props.changeVipBody(item.code) }>
							<span style={{background:item.color}}></span>
							<a href={item.href}  
							rel="noopener noreferrer">{item.name}</a>
						</li>
					) 
					: ''
				}
			</ul>
		)
	}

}

export default VipNav;