import React from 'react';
import s from './ProfilePerson.module.css';
import Loader from '../../users/Loader';

const ProfilePerson = (props) => {
    if (!props.profile.photos) {
        return <Loader isFetching={true} />;
    }
    return (
        <div>
            <div className={s.profileAvatar}>
                <img src={props.profile.photos.large} alt="" />
                <div className={s.profileName}>
                    <h2>{props.profile.fullName}</h2>
                </div>
            </div>
        </div>
    );
};

export default ProfilePerson;
