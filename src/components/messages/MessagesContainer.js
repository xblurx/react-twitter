import { connect } from 'react-redux';
import Messages from './Messages';
import withAuthRedirect from '../../hocs/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => ({
    messagesPage: state.messagesPage,
    isAuth: state.auth.isAuth,
});
let mapDispatchToProps = (dispatch) => ({ dispatch: dispatch });

const enhance = compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
);

const MessagesContainer = enhance(Messages);

export default MessagesContainer;
