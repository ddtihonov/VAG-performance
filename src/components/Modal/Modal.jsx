import React from 'react'
import { createPortal } from "react-dom"
import modal from './Modal.module.scss'
import {ModalOverlay} from '../ModalOverlay/ModalOverlay'

export const Modal = ({onClose}) => {

    const modalRoot = document.getElementById("modals");

    return createPortal (
        <ModalOverlay>
            <div className={modal.modal} onClick={evt => evt.stopPropagation()}>
                <h2 className={modal.title}>Спасибо за обращение</h2>
                <p className={modal.text}>Наш специалист свяжется с вами в ближайшее время</p>
                <button className={modal.button} type='button' onClick={onClose}>Вернуться на сайт</button>
            </div>
        </ModalOverlay>
        ,modalRoot
    );
};