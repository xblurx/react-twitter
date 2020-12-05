import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import Profile from './Profile';
import {
    addPost,
    getProfile,
    getStatus, saveAvatar,
    updateStatus,
} from '../../redux/profile-reducer';
import { withAuthRedirect } from '../../hocs/withAuthRedirect';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId;
        }
        this.props.getStatus(userId);
        this.props.getProfile(userId);
    }

    render() {
        return <Profile {...this.props} />;
    }
}

const mapStateToProps = (state) => ({
    profilePage: state.profilePage,
    userId: state.auth.id,
});

const enhance = compose(
    connect(mapStateToProps, {
        getProfile,
        getStatus,
        updateStatus,
        addPost,
        saveAvatar,
    }),
    withRouter,
    withAuthRedirect
);

export default enhance(ProfileContainer);
