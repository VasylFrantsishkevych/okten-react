import {Outlet} from "react-router-dom";

import './LayoutStyle.css'
import Header from "../Header/Header";

const Layout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
};

export default Layout;