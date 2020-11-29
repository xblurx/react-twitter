import { connect } from 'react-redux';
import Messages from './Messages';
import { withAuthRedirect } from '../../hocs/withAuthRedirect';
import { compose } from 'redux';
import { addMessage } from '../../redux/messages-reducer';

let mapStateToProps = (state) => ({
    messagesPage: state.messagesPage,
});

const enhance = compose(
    connect(mapStateToProps, { addMessage }),
    withAuthRedirect,
);

export default enhance(Messages)
