import React from 'react';
import CreatePost from './profileperson/CreatePost';
import MyPosts from './posts/MyPosts';
import ProfilePerson from './profileperson/ProfilePerson';

const Profile = (props) => {
    return (
        <div>
            <ProfilePerson
                profile={props.profilePage.profile}
                status={props.profilePage.status}
                updateStatus={props.updateStatus}
                saveAvatar={props.saveAvatar}
                isOwnPage={props.isOwnPage}
                updateProfile={props.updateProfile}
            />
            <CreatePost
                profilePage={props.profilePage}
                addPost={props.addPost}
            />
            <MyPosts posts={props.profilePage.posts} />
        </div>
    );
};

export default Profile;
