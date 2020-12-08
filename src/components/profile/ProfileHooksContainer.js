import React, { useEffect } from 'react';
import CreatePost from './profileperson/CreatePost';
import MyPosts from './posts/MyPosts';
import ProfilePerson from './profileperson/ProfilePerson';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
    getProfile,
    getProfilePage,
    getProfilePosts,
    getProfileStatus,
    getUserId,
} from '../../redux/selectors/selectors';
import {
    requestStatus,
    requestProfile,
    requestUpdateStatus,
    requestSaveAvatar,
    addPost,
    requestUpdateProfile,
} from '../../redux/profile-reducer';

const ProfileHooksContainer = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const profile = useSelector(getProfile);
    const profilePage = useSelector(getProfilePage);
    const posts = useSelector(getProfilePosts);
    const status = useSelector(getProfileStatus);
    const userId = useSelector(getUserId);
    const updateStatus = (status) => {
        dispatch(requestUpdateStatus(status));
    };
    const updateProfile = (profileData, e) => {
        dispatch(requestUpdateProfile(profileData));
    };
    const saveAvatar = (file) => {
        dispatch(requestSaveAvatar(file));
    };
    const addPostHandler = (message) => {
        dispatch(addPost(message));
    };

    useEffect(() => {
        console.log('profile useEffect');
        dispatch(requestStatus(userId));
        dispatch(requestProfile(userId));
        history.push({
            pathname: '/profile',
        });
    }, [dispatch, history, userId]);

    return (
        <div>
            <ProfilePerson
                profile={profile}
                status={status}
                updateStatus={updateStatus}
                saveAvatar={saveAvatar}
                updateProfile={updateProfile}
                isOwnPage={!!props.match.params.userId}
            />
            <CreatePost profilePage={profilePage} addPost={addPostHandler} />
            <MyPosts posts={posts} />
        </div>
    );
};

export default ProfileHooksContainer;
