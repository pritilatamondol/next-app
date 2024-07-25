'use client'
import {useState } from 'react';
import {AiFillHeart, AiOutlineHeart}  from 'react-icons/ai'


const Like = () => {
    const [status, setStatus] = useState(true);

    const toggle =()=> {
        setStatus(!status)
       console.log("clicked")
    }
    if(status ) return <AiFillHeart color="ff6b81" size={20}  onClick={toggle}/>
   
     return   <AiOutlineHeart  size={20}  onClick={toggle}/>
   
}

export default Like;