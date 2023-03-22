import React, {useCallback, useState} from 'react'
import app from './App.module.scss'
import {Main} from '../../pages/Main/Main'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { UpButton } from '../UpButton/UpButton'
import { MenuMobile } from '../MenuMobile/MenuMobile'
import { ModalForm } from '../ModalForm/ModalForm'
import { Modal } from '../Modal/Modal'
import { ModalImage } from '../ModalImage/ModalImage'

function App() {

  const [isMenuMobile, setIsMenuMobile] = useState(false)
  const [isPopupFormOpen, setIsPopupFormOpen] = useState(false)
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [isPopupImageOpen, setIsPopupImageOpen] = useState(false)
  const [isArr, setIsArr] = useState(null)



  const handleCloseMenuMobile = useCallback(() => {
    setIsMenuMobile(false)
  }, []);

  const handleOpenMenuMobile = useCallback(() => {
    setIsMenuMobile(true)
  }, []);

  const handleFormOpen = useCallback(() => {
    setIsPopupFormOpen(true)
  }, []);

  const handleFormClose = useCallback(() => {
    setIsPopupFormOpen(false)
  }, []);

  const handleOpen = useCallback(() => {
    setIsPopupOpen(true)
  }, []);

  const handleClose = useCallback(() => {
    setIsPopupOpen(false)
  }, []);

  const handleImageClose = useCallback(() => {
    setIsPopupImageOpen(false)
  }, []);

  const handleImageOpen = useCallback((item) => {
      setIsArr(item)
      setIsPopupImageOpen(true)
  }, [])

  return (
    <div className={app.page}>
      <Header
        isOpen={handleOpenMenuMobile}
      />
      <Main
        isOpen={handleFormOpen}
        isImageOpen={handleImageOpen}
      />
      <Footer/>
      <UpButton/>
      {isMenuMobile && <MenuMobile
        onClose={handleCloseMenuMobile}
      />}
      {isPopupFormOpen && 
      <ModalForm
        onClose={handleFormClose}
        popupOpen={handleOpen}
      ></ModalForm>}    
      {isPopupOpen && 
      <Modal
        onClose={handleClose}
      />}
      {isPopupImageOpen && 
      <ModalImage
        onClose={handleImageClose}
        arr={isArr}
      />}
    </div>
  );
}

export default App;
