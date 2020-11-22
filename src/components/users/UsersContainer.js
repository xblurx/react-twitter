import { connect } from 'react-redux';
import Users from './Users';
import {
    getUsers,
    setCurrentPage,
    toggleFollow,
} from '../../redux/users-reducer';

const mapStateToProps = (state) => ({ usersPage: state.usersPage });

let UsersContainer = connect(mapStateToProps, {
    toggleFollow,
    setCurrentPage,
    getUsers,
})(Users);

export default UsersContainer;
