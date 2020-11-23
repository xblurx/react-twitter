import { connect } from 'react-redux';
import Profile from './Profile';
import React from 'react';
import { withRouter } from 'react-router-dom';
import {
    addPost,
    changePostText,
    getProfile,
} from '../../redux/profile-reducer';
import { compose } from 'redux';
import withAuthRedirect from '../../hocs/withAuthRedirect';

class ProfileClassContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            this.render();
        }
        this.props.getProfile(userId);
    }

    render() {
        return <Profile {...this.props} />;
    }
}

const mapStateToProps = (state) => ({
    profilePage: state.profilePage,
});

const ProfileContainer = withRouter(ProfileClassContainer);

const enhance = compose(
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps, {
        getProfile,
        addPost,
        changePostText,
    })
);

export default enhance(ProfileContainer);
