import { Provider } from './context/digiContext'

import Digivice from './components/Digivice/Digivice'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import './App.css'

function App() {

  return (
    <>
      <Provider>
        <Header />
        <Digivice />
        <Footer />
      </Provider>
    </>
  )
}

export default App
