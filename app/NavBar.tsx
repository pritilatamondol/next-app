'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    const {status, data: session} = useSession();
   

  return (
    <div className='flex bg-slate-200 p-3'>
        <Link href='/' className='mr-5'>Home</Link>
        <Link href='/dashboard' className='mr-5'>Dashboard</Link>
        { status ==='loading' && <div>Loading...</div>}
        {status === 'authenticated' && <div>{session.user!.name}
            <Link className='ml-3' href='./api/auth/signout'>Sing out</Link>
            </div>}
        { status === 'unauthenticated' && <Link href='/api/auth/signin' className='mr-5'>Login</Link>}
    </div>
  )
}

export default NavBar