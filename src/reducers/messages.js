import { setMessage } from '../actions/DB';
const messages = (state = [], action) => {

	switch (action.type) {
		case 'ADD_MESSAGE':
			setMessage({
					_id: (new Date()).getTime().toString(),
					userName: action.userName,
					content: action.content,
					type: 0																		//0代表是留言，1代表是回复
			});
			return [];
		case 'SET_MESSAGE':
			let temp = [...state];
			action.messages.map(m => temp.push(m));
			return temp;
		default:
			return state;
	}
	
};

export default messages;