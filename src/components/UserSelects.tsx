import React from 'react';
import { User } from '../types';

interface UserSelectProps {
  users: User[];
  onSelectUser: (userId: number) => void;
}

const UserSelect: React.FC<UserSelectProps> = ({ users, onSelectUser }) => {
  return (
    <div className="user-select">
      <label htmlFor="user-select">USERS</label>
      <select id="user-select" onChange={e => onSelectUser(Number(e.target.value))}>
        {users.map(user => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UserSelect;
