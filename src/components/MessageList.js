import React from 'react';
import Message from './Message';
import ReplyList from './ReplyList';
import { connect } from 'react-redux';

const MessageList = ({ messages, addReply, onClick }) => (
	<ul>
		{messages.map((message, index, messages) =>
			<li id={message.id}>
				<Message
					id={message.id}
					userName={message.userName}
					content={message.content}
				/>
				<ReplyList
					replyId={message.id}
					replyUser={message.userName}
					onClick={(e) => {
						
						e.preventDefault();
						let commentDiv = document.getElementById(message.id + '_div');
						if (commentDiv == null) {				
							
							let div = document.getElementById(message.id);
							commentDiv = document.createElement('div');
							let userInput = document.createElement('input');
							let contentInput = document.createElement('input');
							let submitBut = document.createElement('button');
							commentDiv.id = message.id + '_div';
							userInput.id = message.id + '_user';
							userInput.classList.add('replyInput');						
							contentInput.id = message.id + '_content';
							contentInput.classList.add('replyInput');					
							submitBut.id = message.id + '_submitBt';
							submitBut.classList.add('replyInput');
							submitBut.innerHTML = 'Add';
							submitBut.onclick = () => {
								let user = document.getElementById(message.id + '_user');
								let content = document.getElementById(message.id + '_content');
								let submitBut = document.getElementById(message.id + '_submitBt');
								addReply(user.value, content.value, message.id, message.userName);
								user.value = '';
								content.value = '';
								document.getElementById(message.id + '_button').style.display = 'block';
								user.style.display = 'none';
								content.style.display = 'none';
								submitBut.style.display = 'none';
								commentDiv.style.display = 'none';
							}
							commentDiv.appendChild(userInput);
							commentDiv.appendChild(contentInput);
							commentDiv.appendChild(submitBut);
							div.appendChild(commentDiv);
							document.getElementById(message.id + '_button').style.display = 'none';
												
						} else {
							document.getElementById(message.id + '_button').style.display = 'none';
							commentDiv.style.display = 'block';
							document.getElementById(message.id + '_user').style.display = 'inline';
							document.getElementById(message.id + '_content').style.display = 'inline';
							document.getElementById(message.id + '_submitBt').style.display = 'inline';
							
						}
						
					}}
					onSubmit={(userName, content) => addReply(userName, content, message.id, message.userName)}
				/>
			</li>
		)}
	</ul>
);

export default connect()(MessageList);