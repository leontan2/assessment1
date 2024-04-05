import React, { useState, useEffect } from 'react';
import FetchedCard from '../components/FetchedCard';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <div>
        <h1>Fetched Users List</h1>
      </div>

      <div className="user-cards-container">
        {users.map(user => (
          <FetchedCard
            key={user.id}
            index={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
            address={user.address}
            phone={user.phone}
            website={user.website}
            company={user.company}
          />
        ))}
      </div>
    </div>
  );
};

export default UsersList;
