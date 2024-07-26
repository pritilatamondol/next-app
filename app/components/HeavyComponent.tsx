'use client'
import React, {useState} from 'react'

const HeavyComponent = () => {
    const data = [{name:'priti', age:23},{name:'bikram', age:34}, { name:'anika', age:34}]

    const [status, setStatus] = useState(false);
    const [users, setUsers] = useState( data)
  return (
    <>
    <h1 className='my-6'>Dynamic loading loadash library</h1>
    
    <button className='select-none rounded-lg bg-blue-500 py-3 px-6 text-center' onClick={ async()=>{ 
        const _ =  ( await import('lodash') ).default;
        const sortedUser = _.orderBy(users, 'name');
        setUsers(sortedUser);
        setStatus(!status)
    }}
    > { status ? 'Hide' : 'Show'}</button>
    <p>Sorted user list</p>
    <ul>
    { status && 
        users.map( (user) => <li>{user.name}</li>)
    }
     </ul>
   
    </>
  )
}

export default HeavyComponent