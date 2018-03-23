import PouchDB from 'pouchdb';

export const db = new PouchDB('http://localhost:5984/test_database_syx');

export function getData() {
	return (dispatch, getState) => {
		let messages = [];
		let replys = [];
		db.allDocs({include_docs: true, descending: true}).then((docs) => {
			docs.rows.map((data) => {
					data = data.doc;
					if (data.type == 0) {
						messages.push({
		        	id: data._id,
							userName: data.userName,
							content: data.content,
							type: 0
		      	});
					} else if (data.type == 1) {
						replys.push({
		        	id: data._id,
							userName: data.userName,
							content: data.content,
							replyId: data.replyId,
							replyUser: data.replyUser,
							type: 1
		      	});
					}
	      	
			});
		}).then(() => {
			dispatch({
				type: 'SET_MESSAGE',
				messages: messages
			});
		}).then(() => {
			dispatch({
				type: 'SET_REPLY',
				replys: replys
			});
		});
	};
}

export function setMessage(message) {
	db.put(message).then(result => console.log(result));
}

export function setReply(reply) {
	db.put(reply).then(result => console.log(result));
}
