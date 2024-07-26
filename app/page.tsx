import Image from 'next/image'
import Link from 'next/link'
import { getServerSession} from 'next-auth'
import {authOptions} from './api/auth/[...nextauth]/route'
 
import ProductCard from './components/ProductCard'
import Like from './components/Like';
import HeavyComponent from './components/HeavyComponent'

export default async function Home() {
  const session =  await getServerSession(authOptions)

  return (
    <main>
      <h1>Hello {session && <span>{session.user!.name}</span>}
      <Like />
      </h1>
      <ProductCard />
      <HeavyComponent />
     
    </main>
    
  )
}
