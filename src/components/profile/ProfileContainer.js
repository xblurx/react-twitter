import { connect } from 'react-redux';
import Profile from './Profile';

let mapStateToProps = (state) => ({ profilePage: state.profilePage });
let manDispatchToProps = (dispatch) => ({ dispatch: dispatch });

const ProfileContainer = connect(mapStateToProps, manDispatchToProps)(Profile);
export default ProfileContainer;
