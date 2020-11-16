import React from 'react';
import User from './User';
import * as axios from 'axios';
import Paginationz from './Pagination';
import Loader from "./Loader";


class Users extends React.Component {
    componentDidMount() {
        this.props.dispatch({ type: 'toggleLoader', isFetching: true });
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`
            )
            .then((response) => {
                this.props.dispatch({
                    type: 'setUsers',
                    users: response.data.items,
                    totalCount: response.data.totalCount / 100,
                });
                this.props.dispatch({ type: 'toggleLoader', isFetching: false });
            });
    }
    render() {
        return (
            <div>
                <div>
                    <Paginationz
                        usersPage={this.props.usersPage}
                        dispatch={this.props.dispatch}
                    />
                </div>
                <Loader isFetching={this.props.usersPage.isFetching}/>
                {this.props.usersPage.users.map((user) => (
                    <User
                        dispatch={this.props.dispatch}
                        user={user}
                        key={user.id}
                    />
                ))}
            </div>
        );
    }
}

export default Users;
