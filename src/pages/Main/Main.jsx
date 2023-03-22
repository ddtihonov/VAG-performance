import React from 'react'
import styles from './Main.module.scss'
import { InitialPage } from '../../components/InitialPage/InitialPage'
import { Coding } from '../../components/Coding/Coding'
import { Tuning } from '../../components/Tuning/Tuning'


export const Main = () => {

    return (
        <section className={styles.main}>
            <InitialPage/>
            <Coding/>
            <Tuning/>
        </section>
    )
}