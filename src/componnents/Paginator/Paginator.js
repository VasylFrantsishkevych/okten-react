import React from 'react';
import {useSelector} from "react-redux";
import {Link, useSearchParams} from "react-router-dom";

import './PaginatorStyle.css';
import {createPages} from "../CreatePages/CreatePages";

const Paginator = () => {
    const {currentPage, totalPages} = useSelector(state => state['movieReducer']);
    const [params] = useSearchParams();
    const pages = [];

    createPages(pages, totalPages, currentPage)

    return (
        <div>
            <Link to={`?page=${+params.get('page') - 1}`}><button>Prev</button></Link>
            {
                pages.map((page, index) => <Link to={`?page=${page}` } key={index}><button
                    className={currentPage === page ? 'current_page' : 'page'}>{page}</button></Link> )
            }
            <Link to={`?page=${+params.get('page') + 1}`}><button>Next</button></Link>
        </div>
    );
};

export {Paginator};