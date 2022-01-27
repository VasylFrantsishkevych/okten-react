
import './LayoutStyle.css'
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div className={'header'}>
                <Link to={'episode'}><h3>Rick and Morty</h3></Link>
            </div>
            <Outlet/>
        </>
    );
};

export default Layout;