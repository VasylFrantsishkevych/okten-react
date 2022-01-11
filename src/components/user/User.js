import './Style-users.css'

const User = (props) => {

    let {id, name, username, email, street, city, zipcode, lat, lng} = props;

    return (
        <div className={'user__card'}>
            <h1>id: {id}</h1>
            <h2>name: {name}</h2>
            <h2>username: {username}</h2>
            <h3>email: {email}</h3>
            <ul> <span>address</span>
                <li>street: {street}</li>
                <li>city: {city}</li>
                <li>zipcode: {zipcode}</li>
                <ul><span>geo</span>
                    <li>lat: {lat}</li>
                    <li>lng: {lng}</li>
                </ul>
            </ul>
        </div>
    );
};

export default User;