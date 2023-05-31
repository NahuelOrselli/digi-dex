import { Provider } from './context/digiContext'

import Digivice from './components/Digivice/Digivice'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import './App.css'
import Help from './components/Help/Help'

function App() {

  return (
    <>
      <Provider>
        <Header />
        <Digivice />
        <Footer />
        <Help />
      </Provider>
    </>
  )
}

export default App
