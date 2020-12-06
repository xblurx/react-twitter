import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import {
    addPost,
    requestProfile,
    requestSaveAvatar,
    requestStatus, requestUpdateProfile,
    requestUpdateStatus,
} from '../../redux/profile-reducer';
import { withAuthRedirect } from '../../hocs/withAuthRedirect';
import Profile from './Profile';

class ProfileContainer extends React.Component {
    refresh() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId;
        }
        this.props.getStatus(userId);
        this.props.getProfile(userId);
    }
    componentDidMount() {
        this.refresh();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.userId !== this.props.match.params.usersId) {
            this.refresh();
        }
    }

    render() {
        return (
            <Profile
                {...this.props}
                isOwnPage={!!this.props.match.params.userId}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    profilePage: state.profilePage,
    userId: state.auth.id,
});

const enhance = compose(
    connect(mapStateToProps, {
        getProfile: requestProfile,
        getStatus: requestStatus,
        updateStatus: requestUpdateStatus,
        addPost,
        saveAvatar: requestSaveAvatar,
        updateProfile: requestUpdateProfile,
    }),
    withRouter,
    withAuthRedirect
);

export default enhance(ProfileContainer);
