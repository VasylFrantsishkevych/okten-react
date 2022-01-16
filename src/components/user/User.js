import React from 'react';

import './userStyle.css'

const User = ({item: {id, name, username, email}}) => {
    return (
        <div className={'user__card'}>
            <h4>{id} {name} -- {username} -- {email}</h4>
        </div>
    );
};

export default User;