import {useEffect, useState} from "react";

import './App.css';
import Users from "./components/users/Users";
import Forms from "./components/forms/Forms";
import {userServices} from "./services/Api";

function App() {
    const [users, setUsers] = useState([]);
    const [filterUsers, setFilterUsers] = useState([]);

    useEffect(() => {
        userServices.getUsers()
            .then(value => { setUsers([...value])
                           setFilterUsers([...value])
            });
    },[]);

    const getFilter = (data) => {
        let filterArray = [...users]

        if (data.name) {
            filterArray = filterArray.filter(user => user.name.toLowerCase().includes(data.name.toLowerCase()) )
        }
        if (data.username) {
            filterArray = filterArray.filter(user => user.username.toLowerCase().includes(data.username.toLowerCase()) )
        }
        if (data.email) {
            filterArray = filterArray.filter(user => user.email.toLowerCase().includes(data.email.toLowerCase()) )
        }
        setFilterUsers(filterArray)
    }

  return (
    <div className="App">
      <Forms getFilter={getFilter}/>
      <Users users={filterUsers}/>
    </div>
  );
}

export default App;
