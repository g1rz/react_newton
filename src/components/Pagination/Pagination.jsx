import React from 'react';
import { Link } from 'react-router-dom';
import './Pagination.sass';

function Pagination({ page }) {
    let paginationList = [];
    for (let i = 1; i <= 10; i++) {
        const activeClass = i == page ? 'pagination__link--active' : '';
        paginationList.push(
            <Link
                key={i}
                className={`pagination__link ${activeClass}`}
                to={(location) => `${location.pathname}?page=${i}`}>
                {i}
            </Link>,
        );
    }

    return <div className="pagination">{paginationList}</div>;
}

export default Pagination;
