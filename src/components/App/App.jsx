import React, {useCallback, useState} from 'react'
import app from './App.module.scss'
import {Main} from '../../pages/Main/Main'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { UpButton } from '../UpButton/UpButton'
import { MenuMobile } from '../MenuMobile/MenuMobile'

function App() {

  const [isMenuMobile, setIsMenuMobile] = useState(false)


  const handleCloseMenuMobile = useCallback(() => {
    setIsMenuMobile(false)
  }, []);

  const handleOpenMenuMobile = useCallback(() => {
    setIsMenuMobile(true)
  }, []);

  return (
    <div className={app.page}>
      <Header
        isOpen={handleOpenMenuMobile}
      />
      <Main
      />
      <Footer/>
      <UpButton/>
      {isMenuMobile && <MenuMobile
        onClose={handleCloseMenuMobile}
      />}
    </div>
  );
}

export default App;
