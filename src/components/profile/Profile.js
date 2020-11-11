import React from 'react';
import CreatePost from './CreatePost';
import MyPosts from './posts/MyPosts';
import ProfilePerson from './profileperson/ProfilePerson';

const Profile = (props) => {
    return (
        <div>
            <ProfilePerson profile={props.profilePage.profile} />
            <CreatePost
                profilePage={props.profilePage}
                dispatch={props.dispatch}
            />
            <MyPosts posts={props.profilePage.posts} />
        </div>
    );
};

export default Profile;
