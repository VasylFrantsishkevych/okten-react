import {Outlet, useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {userService} from "../../services/user.servise";
import UserDetails from "../../components/UserDetails/UserDetails";


const UserDetailsPage = () => {
    const {id} = useParams();
    const [user, setUser] = useState(null);
    const {state} = useLocation();

    useEffect(()=>{
        if (state){
            setUser(state)
            return
        }

        userService.getById(id).then(value => setUser({...value}))
    },[state])

    return (
        <>
            {
                user && <UserDetails item={user}/>
            }
            <Outlet/>
        </>
    );
};

export {UserDetailsPage};