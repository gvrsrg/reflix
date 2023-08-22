import React from 'react'
import './UserList.css';
import { Link } from 'react-router-dom';

export default function UserCard({user, chooseUser}) {
    const {userName, color} = user;

  return (
    <Link to="/catalog" onClick={()=>chooseUser(user)}>
    <div className="user-card" style={{ backgroundColor: `${color}`}}>
      <h2>{userName}</h2>
    </div>
    </Link>
  )
}
