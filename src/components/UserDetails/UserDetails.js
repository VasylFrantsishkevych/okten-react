import {Link} from "react-router-dom";

import './UserDetailsStyle.css'

const UserDetails = (props) => {
    const {
        item: {
            id, name, username, email, address: {street, suite, city, zipcode, geo: {lat, lng}},
            phone, website, company: {name: nameCompany, catchPhrase, bs}
        }
    } = props;

    return (
        <div>
            <div className={'name'}>
                <h3>name: {name}</h3>
                <h3>username: {username}</h3>
            </div>
            <div className={'user__contacts'}>
                <h4>email: {email}</h4>
                <h4>Phone: {phone}</h4>
                <h4>website: {website}</h4>
            </div>
            <div className={'user__address'}>
                <ul><strong>Address</strong>
                    <li>street: {street}</li>
                    <li>suite: {suite}</li>
                    <li>city: {city}</li>
                    <li>zipcode: {zipcode}</li>
                    <ul><strong>Geo</strong>
                        <li>lat: {lat}</li>
                        <li>lng: {lng}</li>
                    </ul>
                </ul>
                <ul><strong>Company</strong>
                    <li>name: {nameCompany}</li>
                    <li>catchPhrase: {catchPhrase}</li>
                    <li>bs: {bs}</li>
                </ul>
            </div>
            <div className={'posts__button'}>
                <Link to={`/users/${id}/posts`}><button>Posts</button></Link>
            </div>
        </div>
    );
};

export default UserDetails;