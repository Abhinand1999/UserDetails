import React, { useEffect, useState } from 'react'
import Card from './card';
import '../css/FetchData.css'
function Fetchdata() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);
  return (
    <div>
      <h1><b>User List</b></h1>
      <ul>
        {users.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
}

export default Fetchdata