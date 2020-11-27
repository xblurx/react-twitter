import { connect } from 'react-redux';
import Profile from './Profile';
import React from 'react';
import { withRouter } from 'react-router-dom';
import {
    addPost,
    changePostText,
    getProfile,
    getStatus,
    updateStatus,
} from '../../redux/profile-reducer';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
            // this.render();
        }
        this.props.getStatus(userId);
        this.props.getProfile(userId);
    }

    render() {
        console.log(`ProfileContainer props: ${this.props.status}`)
        return <Profile {...this.props} />;
    }
}

const mapStateToProps = (state) => ({
    profilePage: state.profilePage,
});

const enhance = compose(
    withRouter,
    connect(mapStateToProps, {
        getProfile,
        getStatus,
        updateStatus,
        addPost,
        changePostText,
    })
);

export default enhance(ProfileContainer);
