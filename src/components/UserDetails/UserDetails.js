import React from 'react';

import '../User/UsersStyle.css'


const UserDetails = (props) => {
    let {item: {id, username, email, address: {street, suite, city, geo: {lat, lng}}, phone, website,
    company: {name, catchPhrase, bs}}, getPostId} = props;
    return (
        <div className={'user__details'}>
            <h2>username: {username}</h2>
            <div className={'connection'}>
                <h3>email: {email}</h3>
                <h3>phone: {phone}</h3>
                <h3>website: {website}</h3>
            </div>
            <div className={'address'}>
                <ul><span>Address</span>
                    <li>street: {street}</li>
                    <li>suite: {suite}</li>
                    <li>city: {city}</li>
                    <ul><span>Geo</span>
                        <li>lat: {lat}</li>
                        <li>lng: {lng}</li>
                    </ul>
                </ul>
                <ul><span>Company</span>
                    <li>name: {name}</li>
                    <li>catchPhrase: {catchPhrase}</li>
                    <li>bs: {bs}</li>
                </ul>
            </div>
            <button onClick={() => getPostId(id)}>Posts</button>
        </div>
    );
};

export default UserDetails;