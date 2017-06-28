import React , { Component } from 'react';
import $ from 'jquery';

class Server extends Component {

	componentDidMount(){
		// 添加标签打开关闭控制器
		$(this.server).hover(function(){
			$(this).addClass('active').siblings().removeClass('active');
		},function(){
		});
	}

	componentDidUpdate(){
		// 每次更新之后默认第一个为打开状态
		if (this.props.number === 0) {
			$(this.server).addClass('active');
		}else {
			$(this.server).removeClass('active');
		}
	}

	render() {
		const server = this.props.server;
		return(
			<li className='server' ref={(server) => this.server = server }>
				<div className='on'>
					<span className='serverName'>{server.name}</span>
					<span className='fl'>{server.f + '服'}</span>
					<span className='serverTime'>{server.time}</span>
				</div>
				<div className='hover'>
					<div className="hoverLeft">
						<img src={`http://s0.static.duoqu.com/www/v2/img/global/game_icon_${server.id}.jpg`} 
						alt={server.name} />
					</div>
					<div className="hoverRigth">
						<p className='top'><span className="serverName">{server.name}</span></p>
						<p className='down'>
							<span className='fl'>{server.f + '服'}</span>
							<span className='serverTime'>{server.time}</span>
						</p>
						<div className="qqts">
							<a href={server.qq} target='_blank'  rel="noopener noreferrer" >
								<img src="http://s0.static.duoqu.com/www/v2/img/global/qqtx.gif" 
									width="63" height="21" style={{border:'0px',position:'absolute',right:0,top:0}} alt="qq提醒"/>
							</a>
						</div>
					</div>
				</div>
			</li>
		)
	}

}

export default Server;