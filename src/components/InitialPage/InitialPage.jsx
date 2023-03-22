import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay} from "swiper"
import 'swiper/css'
import "swiper/css/pagination"
import "swiper/css/navigation"
import styles from './InitialPage.module.scss'


export const InitialPage = () => {
    return (
        <section className={styles.main}>
            <Swiper
                spaceBetween={1}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay,]}
                className="mySwiper"
                >
                <SwiperSlide>
                <div className={styles.item}>
                    <div className={styles.overlay}>
                        <div className={styles.box}>
                            <h1 className={styles.title}>Профессиональный чип&#160;тюнинг автомобилей&#160;VAG</h1>
                            <p className={styles.subtitle}>Специальные цены на чип тюнинг в VAG best performance</p>
                        </div>
                    </div>
                </div>    
                </SwiperSlide>
                <SwiperSlide>
                <div className={styles.item_one}>
                    <div className={styles.overlay}>    
                        <div className={styles.box}>
                            <h2 className={styles.title}>Cнятие защиты компонентов любых автомобилей VAG</h2>
                            <p className={styles.subtitle}>Опыт работы в Германии более 8-ми лет. Работаю только с лицензированным оборудованием</p>
                        </div>
                    </div>    
                </div>    
                </SwiperSlide>
                <SwiperSlide>
                <div className={styles.item_two}>
                    <div className={styles.overlay}>    
                        <div className={styles.box}>
                            <h2 className={styles.title}>Обновление ПО или восстановление заводских&#160;настроек</h2>
                            <p className={styles.subtitle}>Если вы работаете с профессионалом, вы не просто избежите проблем с автомобилем. Вы с ними никогда не столкнетесь</p>
                        </div>
                    </div>    
                </div>    
                </SwiperSlide>
            </Swiper>    
        </section>
    )
}