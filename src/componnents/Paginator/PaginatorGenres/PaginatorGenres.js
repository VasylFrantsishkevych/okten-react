import React from 'react';
import {useSelector} from "react-redux";
import {Link, useSearchParams} from "react-router-dom";

import '../PaginatorStyle.css';
import {createPages} from "../../CreatePages/CreatePages";

const PaginatorGenres = () => {
    const {currentPage, totalPages} = useSelector(state => state['genresReducer']);
    const [params] = useSearchParams();
    const pages = [];

    createPages(pages, totalPages, currentPage)

    return (
        <div>
            <div className={'paginator'}>
                <Link to={`?page=${+params.get('page') - 1}`}><button className={'button'}>Prev</button></Link>
                {
                    pages.map((page, index) => <Link to={`?page=${page}` } key={index}><button
                        className={currentPage === page ? 'current_page' : 'page'}>{page}</button></Link> )
                }
                <Link to={`?page=${+params.get('page') + 1}`}><button className={'button'}>Next</button></Link>
            </div>
        </div>
    );
};

export {PaginatorGenres};