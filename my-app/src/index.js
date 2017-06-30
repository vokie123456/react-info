import React from 'react';
import ReactDOM from 'react-dom';
import {Router , hashHistory , IndexRoute , Route} from 'react-router';
import Home from './components/home';
import About from './components/about';
import GameList from './components/gameList';
import UserList from './components/userList';
import Opinion from './components/opinion';
import Author from './components/author';
import Corporate from './components/corporate';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Router history={hashHistory}>
				    <Route path="/" component={App}>
				      <IndexRoute component={Home}/>
				      <Route path="/home" component={Home}/>
				      <Route path="/about" component={About}/>
				      <Route path="/opinion" component={Opinion}/>
				      <Route path="/user/list" component={UserList}/>
				      <Route path="/game/list" component={GameList} />
				      <Route path="/author" component={Author}/>
				      <Route path="/corporate" component={Corporate}/>
				    </Route>
				</Router>
		, document.getElementById('root'));
registerServiceWorker();
