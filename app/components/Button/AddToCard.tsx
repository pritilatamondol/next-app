'use client'
import React from 'react';
import styles from './AddToCard.module.css'

const AddToCard =()=> {
  return (
    <div>
       <button className={ [styles.btn, styles['btn-primary']].join(" ")} onClick={()=>console.log("clicked")}>Add to Cart</button>
    </div>
  )

  }
export default AddToCard;