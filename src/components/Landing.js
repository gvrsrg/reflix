import React, { useEffect, useState } from 'react'
import UserList from './Users/UserList'
import {USERS} from '../Constants'

export default function Landing({chooseUser}) {
    let [users, setUsers] = useState([])
    useEffect(()=>{
        setUsers([...USERS])
    }

    ,[])


    return (
    <UserList users={users} chooseUser={chooseUser}/>
  )
}
