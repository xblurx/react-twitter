import {connect} from 'react-redux';
import Profile from './Profile';
import React from "react";
import * as axios from "axios";
import {withRouter} from "react-router-dom";


class ProfileClassContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
            )
            .then((response) => {
                this.props.dispatch({
                    type: 'setUserProfile',
                    profile: response.data,
                });
            });
    }

    render() {
        return (
            <Profile {...this.props} />
        );
    }
}

let mapStateToProps = (state) => ({profilePage: state.profilePage});
let manDispatchToProps = (dispatch) => ({dispatch: dispatch});

let ProfileContainer = withRouter(ProfileClassContainer)

export default connect(mapStateToProps, manDispatchToProps)(ProfileContainer);
