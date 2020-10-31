import React from 'react';
import s from './ProfilePerson.module.css';

const ProfilePerson = (props) => {

    return (
        <div>
            <div className={s.profileAvatar}>
                <img src={props.profile.avatar} alt='' />
                <div className={s.profileName}>
                    <h2>{props.profile.name}</h2>
                </div>
            </div>
        </div>
    );
};

export default ProfilePerson;
