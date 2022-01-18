import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {userService} from "../../services/user.servise";
import UserDetails from "../../components/UserDEtails/UserDetails";


const UserDetailsPage = () => {
    const {id} = useParams();
    const [user, setUser] = useState(null);
    const {state} = useLocation();

    useEffect(()=>{
        if (state){
            setUser(state)
            return
        }

        userService.getById(id).then(value => setUser([...value]))
    },[user])

    return (
        <div>
            {
                user && <UserDetails item={user}/>
            }
        </div>
    );
};

export default UserDetailsPage;