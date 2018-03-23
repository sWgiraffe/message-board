import { setReply } from '../actions/DB';
const replys = (state = [], action) => {
	switch (action.type) {
		case 'ADD_REPLY':															//添加回复
			setReply({
				_id: (new Date()).getTime().toString(),
				userName: action.userName,
				content: action.content,
				replyId: action.replyId,
				replyUser: action.replyUser,
				type: 1
			});
			return [];
		case 'SET_REPLY':
			let temp = [...state];
			action.replys.map(m => temp.push(m));
			return temp;
		default:
			return state;
	}
};

export default replys;