'use client'
import React, {useState} from 'react'
import Dialog from '../components/dialog/Dialog';
import styles from '../components/dialog/Dialog.module.css'

const page = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
 const toggeleDialog= ()=> {
    setIsDialogOpen(!isDialogOpen)
 }
  return (
    <>
    <h1> My Dashboard</h1>
    <button className={ [styles.btn, styles['btn-primary']].join(" ")} onClick={ toggeleDialog}>Open Dialog</button>     
    { isDialogOpen && <Dialog isOpen={isDialogOpen} toggleDialog={toggeleDialog} />}
    </>
  )
}

export default page