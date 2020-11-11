import React from 'react';
import User from './User';
import * as axios from 'axios'
const Users = (props) => {
    if (props.usersPage.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.dispatch({ type: 'setUsers', usersArray: response.data.items });
            })
    }
    let usersComponent = props.usersPage.users.map((user) => (
        <User dispatch={props.dispatch} user={user} key={user.id} />
    ));
    return <div>{usersComponent}</div>;
};

export default Users;
