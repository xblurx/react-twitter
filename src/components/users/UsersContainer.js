import { connect } from 'react-redux';

import Users from './Users';
import { getUsers, toggleFollow } from '../../redux/users-reducer';
import { withAuthRedirect } from '../../hocs/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => ({ usersPage: state.usersPage });
const enhance = compose(
    connect(mapStateToProps, {
        toggleFollow,
        getUsers,
    }),
    withAuthRedirect
);

export default enhance(Users);
