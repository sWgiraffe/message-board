import { combineReducers } from 'redux';
import messages from './messages';
import replys from './replys';

const todoApp = combineReducers({
	messages,
	replys
});

export default todoApp;