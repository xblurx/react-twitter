import { connect } from 'react-redux';
import Messages from './Messages';

let mapStateToProps = (state) => ({ messagesPage: state.messagesPage });
let manDispatchToProps = (dispatch) => ({ dispatch: dispatch });

const MessagesContainer = connect(
    mapStateToProps,
    manDispatchToProps
)(Messages);
export default MessagesContainer;
