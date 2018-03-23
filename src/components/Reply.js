import React from 'react';
const Reply = ({ id, userName, content }) => (
	<li>
		{id}
		{': '}
		{userName}
		{': '}
		{content}
	</li>
);

export default Reply;