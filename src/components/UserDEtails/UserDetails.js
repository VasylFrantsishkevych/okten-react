const UserDetails = (props) => {
    const {
        item: {
            name, username, email, address: {street, suite, city, zipcode, geo: {lat, lng}},
            phone, website, company: {name: nameCompany, catchPhrase, bs}
        }
    } = props;
    return (
        <div>
            <div>
                <h3>name: {name}</h3>
                <h3>username: {username}</h3>
            </div>
            <div>
                <h4>email: {email}</h4>
                <h4>Phone: {phone}</h4>
                <h4>website: {website}</h4>
            </div>
            <div>
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
        </div>
    );
};

export default UserDetails;