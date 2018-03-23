import React from 'react';

const Message = ({ id, userName, content }) => (
	<div>
		{id}
		{': '}
		{userName}
		{': '}
		{content}
	</div>
);

export default Message;
