import React from 'react'
import ZoneContextProvider from './contexts/ZoneContext'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import ProgramInfo from './components/ProgramInfo'
import Navigation from './components/Navigation'
import Businesses from './components/Businesses'
import Vecino from './components/Vecino'
import Comerciante from './components/Comerciante'
import Footer from './components/Footer'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Route path='/' exact>
          <Home />
          <ProgramInfo />
        </Route>

        <Route path='/comprador' exact>
          <ZoneContextProvider>
            <Navigation />
            <div className='container'>
              <Vecino />
              <Businesses />
            </div>
            <Footer />
          </ZoneContextProvider>
        </Route>

        <Route path='/comerciante'>
          <Comerciante />
          <Footer />
        </Route>

      </BrowserRouter>
    </div>
  );
}

export default App;
