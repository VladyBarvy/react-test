import React, { useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ]);

  const addUser = () => {
    const newUser = { id: users.length + 1, name: `User ${users.length + 1}` };
    setUsers([...users, newUser]);
  };

  const removeUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}
          <button onClick={() => removeUser(user.id)}>Удалить</button>
          </li>
        ))}
      </ul>
      <button onClick={addUser}>Добавить пользователя</button>
      
    </div>
  );
};

export default UserList;
