import React from 'react';
import {Route, Routes} from "react-router-dom";

import {Layout} from "./componnents";
import {GenderPage, MoviesListPage, MoviesPage} from "./pages";


const App = () => {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'discover/movie'} element={<MoviesPage/>}/>
                    <Route path={'movie/:id'} element={<MoviesListPage/>}/>
                    <Route path={'genre/movie/list'} element={<GenderPage/>}/>
                    <Route path={'discover/movie&language=en-US&with_genres=:id'} element={<GenderPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;