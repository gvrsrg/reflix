import React from 'react'
import UserCard from './UserCard'

export default function UserList({users, chooseUser}) {
  return (
    <div className="user-list">
        <h1><p>WHO'S WATCHING?</p></h1>
        <br></br>
        <div className="user-list">
            {users.map(user => (<UserCard user={user} key={user.userId} chooseUser={chooseUser}/>))}
        </div>
    </div>
  )
}
