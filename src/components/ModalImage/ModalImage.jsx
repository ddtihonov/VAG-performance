import React, {useEffect, useState} from 'react'
import { createPortal } from "react-dom"
import modal from './ModalImage.module.scss'
import {ModalOverlay} from '../ModalOverlay/ModalOverlay'
import { v4 as uuidv4 } from 'uuid'

export const ModalImage = ({onClose, arr}) => {


    const [activeIndex, setActiveIndex] = useState(0)
    const modalRoot = document.getElementById("modals")

    useEffect(() => {
        const handleEscClose = (evt) =>{
            if (evt.key ==='Escape')  onClose()
        }
        document.addEventListener('keydown', handleEscClose)
        return () => document.removeEventListener('keydown', handleEscClose)
    }, [onClose])

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = arr.length - 1
        } else if (newIndex > arr.length -1) {
            newIndex = 0
        }
    
        setActiveIndex(newIndex)
    }

    return createPortal (
        <ModalOverlay onClick={onClose}>
            {arr.map((item, index) => {
                const keyUid = uuidv4()
                return(
                    <div className={`${index === activeIndex ? modal.modal : modal.modal_active}`} onClick={evt => evt.stopPropagation()} key={keyUid}>
                        <button data-test="close-button" className={modal.close_icon} type="button" aria-label="закрыть" onClick={onClose}/>
                        <img className={modal.image} src={item.image} alt={item.title}/>
                        <button className={modal.button_left} type="button" onClick={() => updateIndex(activeIndex - 1)}/>
                        <button className={modal.button_right} type="button" onClick={() => updateIndex(activeIndex + 1)}/>
                        <div className={modal.box}>
                            <p className={modal.text}>{activeIndex + 1} / {arr.length}</p>
                            <p className={modal.text}>{item.title}</p>
                        </div>
                    </div>
                )
            })}
        </ModalOverlay>
        ,modalRoot
    );
};


/*return createPortal (
    <ModalOverlay onClick={onClose}>
        <div className={modal.modal} onClick={evt => evt.stopPropagation()}>
            <button data-test="close-button" className={modal.close_icon} type="button" aria-label="закрыть" onClick={onClose}/>
            <img className={modal.image} src={arrPortfolio[activeIndex].image} alt={arrPortfolio[activeIndex].title}/>
            <button className={modal.button_left} type="button" onClick={() => updateIndex(activeIndex - 1)}/>
            <button className={modal.button_right} type="button" onClick={() => updateIndex(activeIndex + 1)}/>
            <div className={modal.box}>
                <p className={modal.text}>{activeIndex + 1} / {arrPortfolio.length}</p>
                <p className={modal.text}>{arrPortfolio[activeIndex].title}</p>
            </div>
        </div>
    </ModalOverlay>
    ,modalRoot
);*/