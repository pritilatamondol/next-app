import React from 'react';
import styles from './Dialog.module.css'

type Props = {
    isOpen: boolean;
    toggleDialog: ()=>void
}
const Dialog = ({ isOpen, toggleDialog } : Props) => {
   

    
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.dialog}>
        <h2>Dialog Title</h2>
        <p>This is a dialog content.</p>
        <button className={ [styles.btn, styles['btn-primary']].join(" ")} onClick={toggleDialog}>Close</button>
      </div>
    </div>
  );
};



export default Dialog;
