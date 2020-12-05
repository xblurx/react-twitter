import React, { useState } from 'react';
import { Pagination } from 'react-bootstrap';

const MyPagination = ({
    totalItemsCount,
    currentPage,
    getUsers,
    pageSize = 10,
    portionSize = 3,
}) => {
    const [portion, setPortion] = useState(1);
    let pagesNumber = Math.ceil(totalItemsCount / pageSize);
    let portionCount = Math.ceil(pagesNumber / portionSize);
    let leftPortion = (portion - 1) * portionSize + 1;
    let rightPortion = portion * portionSize;
    const onClick = (pagesNumber, pageSize) => {
        getUsers(pagesNumber, pageSize);
    };

    const prepareAndShowPages = (arr) => {
        return arr
            .filter((page) => page >= leftPortion && page <= rightPortion)
            .map((page) => (
                <Pagination.Item
                    key={page}
                    active={page === currentPage}
                    onClick={() => onClick(page, pageSize)}
                >
                    {page}
                </Pagination.Item>
            ));
    };

    let pages = [];
    for (let i = 1; i <= pagesNumber; i++) {
        pages.push(i);
    }

    return (
        <div>
            <Pagination>
                {portion > 1 && (
                    <Pagination.Prev onClick={() => setPortion(portion - 1)} />
                )}
                {prepareAndShowPages(pages)}
                {portionCount > portion && (
                    <Pagination.Next onClick={() => setPortion(portion + 1)} />
                )}
            </Pagination>
        </div>
    );
};

export default MyPagination;
