import React , { Component } from 'react';
import Server from './server';
import ServerBtn from './serverBtn';

class ServerList extends Component {

	render() {
		const serverList = this.props.serverList;
		return(
			<div className='serverList'>
				<ul>
					{
						serverList.length > 0 ?
						serverList.map((item, index) =>
							<Server server={item} key={index} number={index}/>
						)
						:""
					}
				</ul>
				<ServerBtn pageNow={this.props.pageNow} changePage={this.props.changePage} pageMax={this.props.pageMax}/>
			</div>
		)
	}

}

export default ServerList;