import React from 'react';
import Reply from './Reply';
import { connect } from 'react-redux';
const ReplyList = ({ replyId, replyUser, replys=[], onClick }) => (
	<ul>
		{
			replys.filter(t => {return t.replyId == replyId && t.replyUser == replyUser}).map(reply =>
				<Reply
					id={reply.id}
					userName={reply.userName}
					content={reply.content}
				/>
			)
		}
		<button
			id={replyId+'_button'}
			class='replyClick'
			onClick={onClick}
		>
			Add Comment
		</button>
	</ul>
);
const mapStateToProps = state => ({
	replys: state.replys
});


export default connect(mapStateToProps)(ReplyList);