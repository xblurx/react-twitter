import { connect } from 'react-redux';
import Users from './Users';

let mapStateToProps = (state) => ({ usersPage: state.usersPage });
let mapDispatchToProps = (dispatch) => ({ dispatch: dispatch });

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
