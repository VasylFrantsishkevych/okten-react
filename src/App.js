import React from 'react';
import {Route, Routes} from "react-router-dom";

import {Layout} from "./componnents";
import {MoviesListPage, MoviesPage} from "./pages";


const App = () => {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<MoviesPage/>}/>
                    <Route path={'discover/movie'} element={<MoviesPage/>}/>
                    <Route path={'movie/:id'} element={<MoviesListPage/>}/>
                    <Route path={'discover/movie&language=en-US&with_genres=:id'} element={<MoviesPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;