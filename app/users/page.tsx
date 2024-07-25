import React from 'react'

type User = {
    id: number;
    name: string
}
const page = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users: User[] = await res.json()
  return (
    <div>
        <h1>Users</h1>
        <ul>
        {users.map( user=>{
          return <li key={ user.id}> { user.name}</li>
        })}
        </ul>
    </div>
  )
}

export default page