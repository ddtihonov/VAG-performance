import React, { useCallback, useState, useEffect, useRef } from 'react'
import emailjs from 'emailjs-com'
import { createPortal } from "react-dom"
import styles from './ModalForm.module.scss'
import {ModalOverlay} from '../ModalOverlay/ModalOverlay'
import { FormValidation } from '../../hooks/FormValidation'


export const ModalForm = ({onClose, popupOpen}) => {

    const modalRoot = document.getElementById("modals");
    
    const handleForm = FormValidation()
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const form = useRef()

    useEffect(() => {
        handleForm.isValid ? setButtonDisabled(false) : setButtonDisabled(true)
    }, [handleForm.isValid])

    const sendData = useCallback((evt) => {
        evt.preventDefault();
            emailjs.sendForm('service_55uzw7o', 'template_gieiogh', form.current, 'ypJeFxyaiNsyaBjPV')
            .then((result) => {
            }, (error) => {
                console.log(error.text);
            }); 
        onClose()
        handleForm.resetForm()
        popupOpen()
    }, [handleForm, onClose, popupOpen] )

    useEffect(() => {
        const handleEscClose = (evt) =>{
            if (evt.key ==='Escape')  onClose()
        }
        document.addEventListener('keydown', handleEscClose)
        return () => document.removeEventListener('keydown', handleEscClose)
    }, [onClose])

    return createPortal (
        <ModalOverlay onClick={onClose}>
            <div className={styles.modal} onClick={evt => evt.stopPropagation()}>
                <div className={styles.box}>
                    <h3 className={styles.title}>Оставьте Ваш номер телефона</h3>
                    <button data-test="close-button" className={styles.close_icon} type="button" aria-label="закрыть" onClick={onClose}/>
                </div>
                <p className={styles.text}>Мы свяжемся с Вами  в самое ближайшее время!</p>
                        <form className={styles.form} onSubmit={sendData} ref={form}>
                            <div className={styles.box_input}>
                                <label className={styles.label}>Введите имя
                                    <input
                                        className={`${styles.input} ${handleForm.errors.name && styles.wrong}`}
                                        type='text' 
                                        name='name'
                                        minLength='2'
                                        value={handleForm.values.this}
                                        onChange={handleForm.handleChange} 
                                        pattern='^[A-Za-zА-Яа-яЁё\s\-]{2,30}$'
                                        required/>
                                </label>
                            </div>
                            <span className={styles.input_error}>{handleForm.errors.name}</span>
                            <div className={styles.box_input}>
                                <label className={styles.label}>Введите телефон +7 (__) __-__-__       
                                    <input
                                        className={`${styles.input} ${handleForm.errors.phone && styles.wrong}`}
                                        type='tel' 
                                        name='phone'
                                        value={handleForm.values.this}
                                        onChange={handleForm.handleChange}  
                                        pattern='\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}'
                                        required/>
                                </label>
                            </div>            
                            <span className={styles.input_error}>{handleForm.errors.phone}</span>
                            <div className={styles.box_textarea}>
                                <label className={styles.label_textarea}>Комментарий
                                    <textarea
                                            className={`${styles.textarea} ${styles.scrollbar}`}
                                            name='comment'
                                            value={handleForm.values.this}
                                            onChange={handleForm.handleChange}/>       
                                </label>
                            </div>
                                    <button className={`${styles.button_form} ${buttonDisabled && styles.button_disabled}`}type='submit'>Отправить</button>
                        </form>
            </div>
        </ModalOverlay>
        ,modalRoot
    );
};