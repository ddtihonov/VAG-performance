import React from 'react'
import styles from './Main.module.scss'
import { InitialPage } from '../../components/InitialPage/InitialPage'


export const Main = ({isOpen, isImageOpen}) => {

    return (
        <section className={styles.main}>
            <InitialPage/>
        </section>
    )
}