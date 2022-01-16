import React from 'react';

import User from "../user/User";

const Users = ({users}) => {

    return (
        <>
            {
                users.map(value => <User key={value.id} item={value}/>)
            }
        </>
    );
};

export default Users;