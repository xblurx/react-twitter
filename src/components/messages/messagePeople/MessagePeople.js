import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Messages.module.css';

const MessagePeople = (props) => {
    let url = `/messages/${props.id}`;
    return (
        <div className="mb-5">
            <img src={props.avatar} alt="" className={s.peopleAvatar} />
            <NavLink to={url}>{props.name}</NavLink>
        </div>
    );
};

export default MessagePeople;
