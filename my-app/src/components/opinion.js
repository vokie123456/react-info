import React , { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import commentAppRe from '../reducers/comment/commentReducer';
import CommentApp from '../containers/comment/commentContainer';
let store = createStore(commentAppRe);
class Opinion extends Component {

	render() {
		return(
			<div className='opinion'>
				Opinion
				<Provider store={store}>
					<CommentApp/>
				</Provider>
			</div>
		)
	}

}

export default Opinion;