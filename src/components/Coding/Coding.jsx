import React from 'react'
import styles from './Coding.module.scss'
import image from '../../image/Coding/img.jpg'


export const Coding = () => {

    return (
        <section className={styles.main}>
            <div className={styles.container}>
                <h2 className={styles.title}><span>Кодирование</span> и активация скрытых функций</h2>
                <div className={styles.box}>
                    <img className={styles.image} src={image} alt = 'компьютер'/>
                    <div className={styles.box_text}>
                        <h3 className={styles.subtitle}>Зачем нужно<span> кодирование?</span></h3>
                        <p className={styles.text}>Концерн VolksWagen Auto Group производит автомобили моделей Audi, VW, Seat, Skoda, Porsche с заложенными в них возможностями, согласно их заводской комплектации. В дорогих комплектациях функциональный пакет возможных опций как правило расширен, а в недорогих - ограничен программным способом. В маркетинговых целях, VAG искусственно занижает функциональные возможности на недорогих автомобилях. В большинстве случаев, часть функций - просто отключена, скрыта, недоступна для использования или настроена в минимальный функционал. предлагаем программные и технические решения, которые позволят улучшить безопасность и комфорт Вашего стального друга!</p>
                    </div>
                </div> 
            </div>
        </section>
    )
}