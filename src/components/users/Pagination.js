import React from 'react';
import { Pagination } from 'react-bootstrap';
import * as axios from 'axios';

const Paginationz = (props) => {
    let currentPage = props.usersPage.currentPage;
    let pageSize = props.usersPage.pageSize;
    let totalCount = Math.ceil(props.usersPage.totalCount / pageSize);
    let pages = [];
    let onClick = (pageNum) => {
        props.dispatch({ type: 'toggleLoader', isFetching: true });
        props.dispatch({ type: 'setCurrentPage', currentPage: pageNum });
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${props.usersPage.pageSize}`
            )
            .then((response) => {
                props.dispatch({
                    type: 'setUsers',
                    users: response.data.items,
                    totalCount: response.data.totalCount / 100,
                });
                props.dispatch({ type: 'toggleLoader', isFetching: false });
            });
    };
    for (let i = 1; i <= totalCount; i++) {
        pages.push(
            <Pagination.Item
                key={i}
                active={i === currentPage}
                onClick={() => onClick(i)}
            >
                {i}
            </Pagination.Item>
        );
    }

    return (
        <div>
            <Pagination>{pages}</Pagination>
        </div>
    );
};

export default Paginationz;
