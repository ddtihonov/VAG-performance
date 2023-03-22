import React, {useState}  from 'react'
import styles from './UpButton.module.scss'


export const UpButton = () => {

    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
            setVisible(true)
        } 
        else if (scrolled <= 300){
            setVisible(false)
        }
    };

    window.addEventListener('scroll', toggleVisible);

    const scrollToTop = () =>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    };

    return (
        <button className={styles.button} onClick={scrollToTop} style={{display: visible ? 'flex' : 'none'}} aria-label='вверх'/>
    )
}