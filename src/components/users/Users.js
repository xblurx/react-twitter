import React from 'react';
import User from './User';
import Paginationz from './Pagination';
import Loader from './Loader';

class Users extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        return (
            <div>
                <div>
                    <Paginationz
                        usersPage={this.props.usersPage}
                        isFetching={this.props.usersPage.isFetching}
                        setCurrentPage={this.props.setCurrentPage}
                        getUsers={this.props.getUsers}
                    />
                </div>
                <Loader isFetching={this.props.usersPage.isFetching} />
                {this.props.usersPage.users.map((user) => (
                    <User
                        toggleFollow={this.props.toggleFollow}
                        user={user}
                        key={user.id}
                    />
                ))}
            </div>
        );
    }
}

export default Users;
