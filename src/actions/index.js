export const addMessage = (userName, content) => ({
	type: 'ADD_MESSAGE',
	userName,
	content
});

export const addReply = (userName, content, replyId, replyUser) => ({
	type: 'ADD_REPLY',
	userName,
	content,
	replyUser,
	replyId
});


