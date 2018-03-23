import { connect } from 'react-redux';
import MessageList from '../components/MessageList';
import { addReply } from '../actions';


const mapStateToProps = state => ({
  messages: state.messages
});

const mapDispatchToProps = dispatch => ({
	addReply: (userName, content, replyId, replyUser) => dispatch(addReply(userName, content, replyId, replyUser))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MessageList);
