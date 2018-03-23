import { connect } from 'react-redux';
import ReplyList from '../components/ReplyList';

const mapStateToProps = state => ({
	replys: state.replys
});


export default connect(mapStateToProps)(ReplyList);
