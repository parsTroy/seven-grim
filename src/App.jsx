import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './style';
import { 
  Navbar, 
  Hero, 
  Stats, 
  Business, 
  Billing, 
  CardDeal, 
  Testimonials, 
  Clients, 
  CTA, 
  Footer 
} from './components/index';
import AboutUs from './components/FooterLinks/AboutUs';
import Dashboard from './components/Dashboard/Dashboard';

const App = () => (
  <>
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>'
        <div className={`${styles.boxWidth}`}>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/about-us' element={<AboutUs />} />
          </Routes>
            <Footer />
        </div>
      </div>
    </div>
  </>
  )

export default App