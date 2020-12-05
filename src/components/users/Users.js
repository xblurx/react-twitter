import React from 'react';
import User from './User';
import Loader from './Loader';
import Pagination from './Pagination';

class Users extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        return (
            <div>
                <div>
                    <Pagination
                        totalItemsCount={this.props.usersPage.totalCount}
                        currentPage={this.props.usersPage.currentPage}
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
