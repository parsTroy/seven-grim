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
import Team from './components/FooterLinks/Team';
import Explore from './components/FooterLinks/Explore';
import TermsOfService from './components/FooterLinks/TermsOfService';
import Help from './components/FooterLinks/Help';
import Blog from './components/FooterLinks/Blog';
import NewsLetter from './components/FooterLinks/NewsLetter';
import Games from './components/NavBarLinks/Games';
import News from './components/NavBarLinks/News';

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
            <Route path='/games' element={<Games />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/news' element={<News />} />
            <Route path='/explore' element={<Explore />} />
            <Route path='/terms-of-service' element={<TermsOfService />} />
            <Route path='/help' element={<Help />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/newsletter' element={<NewsLetter />} />
            <Route path='/team' element={<Team />} />
          </Routes>
            <Footer />
        </div>
      </div>
    </div>
  </>
  )

export default App