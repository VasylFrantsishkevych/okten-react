import './UserStyle.css';

const User = ({user}) => {
    const {id, name, username, email, address: {street, suite, city, zipcode, geo: {lat, lng}}, phone, website,
    company: {name:nameCompany, catchPhrase, bs}} = user;
    return (
        <div className={'user_card'}>
            <h2>Id: {id}</h2>
            <div className={'user_name'}>
                <h3>Name: {name}</h3>
                <h3>Username{username}</h3>
            </div>
            <div className={'user_contact'}>
                <h4>email: {email}</h4>
                <h4>Phone: {phone}</h4>
                <h4>Website: {website}</h4>
            </div>
            <div className={'user_address'}>
                <ul>Address
                    <li>Street: {street}</li>
                    <li>Suite: {suite}</li>
                    <li>City: {city}</li>
                    <li>Zipcode: {zipcode}</li>
                    <ul>Geo
                        <li>Lat: {lat}</li>
                        <li>Lng: {lng}</li>
                    </ul>
                </ul>
                <ul>Company
                    <li>Name: {nameCompany}</li>
                    <li>catchPhrase: {catchPhrase}</li>
                    <li>bs: {bs}</li>
                </ul>
            </div>
        </div>
    );
};

export {User};
