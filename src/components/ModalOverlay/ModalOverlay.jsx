import React from 'react';
import styles from './ModalOverlay.module.scss';

export const ModalOverlay = ({onClick, children}) => {

    return(
        <section  className={styles.popup} onClick={onClick} >
            {children}
        </section>
    
    );
};