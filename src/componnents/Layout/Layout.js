import {Outlet} from "react-router-dom";

import {Header} from "../Header/Header";
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