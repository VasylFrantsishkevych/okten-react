import {Header} from "../Header/Header";
import {Outlet} from "react-router-dom";

import './LayoutStyle.css';


const Layout = () => {
    return (
        <div className={'wrapper'}>
            <div className={'layout'}>
                <Header/>
                <Outlet/>
            </div>
        </div>
    );
};

export {Layout};