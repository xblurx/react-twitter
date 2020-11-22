import { connect } from 'react-redux';
import Profile from './Profile';
import React from 'react';
import { withRouter } from 'react-router-dom';
import {
    addPost,
    changePostText,
    getProfile,
} from '../../redux/profile-reducer';

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

const mapStateToProps = (state) => ({ profilePage: state.profilePage });

let ProfileContainer = withRouter(ProfileClassContainer);

export default connect(mapStateToProps, {
    getProfile,
    addPost,
    changePostText,
})(ProfileContainer);
