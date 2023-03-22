import React from 'react'
import styles from './CardVideo.module.scss'
import ReactPlayer from 'react-player'


export const CardVideo = ({item}) => {

    return (
        <li className={styles.item}>
            <ReactPlayer 
                light={true}
                controls={true}
                playing={true}
                width='100%'
                height='100%'
                className={styles.video} 
                url={item.video}
                
            />
        </li>
    )
}
