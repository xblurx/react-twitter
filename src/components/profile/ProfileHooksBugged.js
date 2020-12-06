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
} from '../../redux/profile-reducer';

const ProfileHooksBugged = (props) => {
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
    const saveAvatar = (file) => {
        dispatch(requestSaveAvatar(file));
    };
    const addPost = (message) => {
        dispatch(addPost(message));
    };

    useEffect(() => {
        console.log('profile useEffect');
        dispatch(requestStatus(userId));
        dispatch(requestProfile(userId));
        history.push({
            pathname: '/profile',
        });
    });

    return (
        <div>
            <ProfilePerson
                profile={profile}
                status={status}
                updateStatus={updateStatus}
                saveAvatar={saveAvatar}
                isOwnPage={!!userId}
            />
            <CreatePost profilePage={profilePage} addPost={addPost} />
            <MyPosts posts={posts} />
        </div>
    );
};

// export default ProfileHooksBugged;
