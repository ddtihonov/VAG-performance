import React from 'react'
import styles from './Footer.module.scss'
import logo from '../../image/Header/logo.svg'

export const Footer = () => {

    return (
        <footer className={styles.main} id='footer'>
            <div className={styles.container}>
                <div className={styles.box}>
                    <img className={styles.logo} src={logo} alt = 'логотип'/>
                    <a className={styles.link_mail} href="tel:+ 7 (977)295-75-93" target='_blank' rel='noopener noreferrer'>+7 (977) 295-75-93</a>
                    <a className={styles.link_mail} href="mailto:ddtihonov@yandex.ru" target='_blank' rel='noopener noreferrer'>ddtihonov@yandex.ru</a>
                    <p className={styles.text}>Пн-Вс: с 9:00 до 22:00, без выходных</p>
                </div>
                <div className={styles.box}>
                    <p className={styles.text}>Информация на сайте, не является публичной офертой. Копирование материалов сайта запрещено.</p>
                    <p className={styles.text}>&#169; 2023 Все права защищены.</p>
                    <a className={styles.link_developer} target='_blank' rel='noopener noreferrer' href='https://tihonov-studio.ru/' aria-label='сайт тихонова дмитрия'>
                        <p className={styles.text}>Разработано<span> TD</span></p>
                    </a>
                </div>
            </div>
        </footer>
    )
}