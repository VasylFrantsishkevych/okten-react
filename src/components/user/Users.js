import {useEffect, useState} from 'react';

import User from "./User";
import './Style-users.css'
import {getUsers} from "../services/api";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect( () => {
        getUsers().then(user => setUsers(user))
    },[])
    return (
        <div className={'users'}>
            {users.map(value => <User key={value.id} id={value.id} name={value.name} username={value.username} email={value.email}
            street={value.address.street} city={value.address.city} zipcode={value.address.zipcode} lat={value.address.geo.lat}
            lng={value.address.geo.lng}/>)}
        </div>
    );
};

export default Users;