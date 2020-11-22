import React from 'react';
import { Pagination } from 'react-bootstrap';

const Paginationz = (props) => {
    let currentPage = props.usersPage.currentPage;
    let pageSize = props.usersPage.pageSize;
    let totalCount = Math.ceil(props.usersPage.totalCount / pageSize);
    let pages = [];
    let onClick = (pageNum) => {
        props.setCurrentPage(pageNum)
        props.getUsers(pageNum, pageSize);
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
