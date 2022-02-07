import {FC} from "react";

import './UserStyle.css';
import {IUser} from "../../interfaces";

interface IProps {
    user: IUser
}

const User:FC<IProps> = ({user: {id, name, username, email}}) => {
    return (
        <div className={'user'}>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Username: {username}</div>
            <div>Email:{email}</div>
        </div>
    );
};

export {User};