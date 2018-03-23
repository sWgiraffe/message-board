import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../actions';
let AddMessage = ({ dispatch }) => {
	let inputUser;
	let inputContent;
	return (
		<div>
			<form onSubmit={e => {
				e.preventDefault();
				if (!inputUser.value.trim() && !inputContent.value.trim()) {
					return;
				}
				dispatch(addMessage(inputUser.value, inputContent.value));
				inputUser.value = '';
				inputContent.value = '';
				let replyInputs = document.querySelectorAll('.replyInput');
				for (let i = 0; i < replyInputs.length; i++) {
					replyInputs[i].style.display = 'none';
				}
				let replyClicks = document.querySelectorAll('.replyClick');
				for (let i = 0; i < replyClicks.length; i++) {
					replyClicks[i].style.display = 'block';
				}
			}}>
				<input ref={node => inputUser = node} />
				<input ref={node => inputContent = node} />
				<button	type="submit">
					Ok
				</button>
			</form>
		</div>
	);
};
AddMessage = connect()(AddMessage);
export default AddMessage;