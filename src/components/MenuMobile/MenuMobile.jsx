import React from 'react'
import styles from './MenuMobile.module.scss';
import logo from '../../image/Header/logo.svg'

export const MenuMobile = ({onClose}) => {

    return (
        <div className={styles.main}>
            <div className={styles.box}>
                <img className={styles.logo} src={logo} alt = 'логотип'/>
                <button className={styles.button} onClick={onClose} aria-label='закрыть меню'/>
            </div>
            <nav className={styles.nav}>
                    <a className={styles.link} href='#Tyuning'>Чип тюнинг</a>
                    <a className={styles.link} href='#Zashchita'>Защита компонентов</a>
                    <a className={styles.link} href='#Diagnostika'>Диaгноcтика</a>
                    <a className={styles.link} href='#Kodirovanie'>Кодирование</a>
                </nav>
        </div>
    );
}
