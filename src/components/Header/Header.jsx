import React, {useState} from 'react'
import header from './Header.module.scss'
import logo from '../../image/Header/logo.svg'

export const Header = ({isOpen}) => {

    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 10){
            setVisible(true)
        } 
        else if (scrolled <= 10){
            setVisible(false)
        }
    }

    window.addEventListener('scroll', toggleVisible);

    return (
    <header  className={visible ? header.header_scroll : header.header}>
            <div className={visible ? header.box_scroll : header.box}>
                <a href='#initial'>
                    <img className={header.logo} src={logo} alt = 'логотип'/>
                </a>
                <nav className={header.nav}>
                    <a className={header.link} href='#Tyuning'>Чип тюнинг</a>
                    <a className={header.link} href='#Zashchita'>Защита компонентов</a>
                    <a className={header.link} href='#Diagnostika'>Диaгноcтика</a>
                    <a className={header.link} href='#Kodirovanie'>Кодирование</a>
                </nav>
                <button className={header.button} type='button' onClick={isOpen} aria-label='открыть меню'/>
            </div>         
    </header>
    );
};