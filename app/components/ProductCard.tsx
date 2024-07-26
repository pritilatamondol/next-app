import React from 'react'
import AddToCard from './Button/AddToCard'

const ProductCard = () => {
  return (
    <div>
       <h2>Product List</h2>
       <ul className='ml-7 list-disc  space-y-1 text-gray-500 list-disc my-5'>
           <li >Milk</li>
           <li>Eggs</li>
           <li>Vegetables</li>
        </ul>
        <AddToCard />
    </div>
    
  )
}

export default ProductCard