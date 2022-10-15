import React from 'react'
import { 
    Hero,
    Stats, 
    Business, 
    Billing, 
    CardDeal, 
    Testimonials, 
    Clients, 
    CTA, 
  } from '../../components/index';
  import styles from '../../style';

const Dashboard = () => (
    <>
        <div className={`bg-primary ${styles.flexStart}`}>'
            <div className={`${styles.boxWidth}`}>
                <Hero />
            </div>
        </div>
        <div>
            <Stats />
            <Business />
            {/* <Billing /> */}
            {/* <CardDeal /> */}
            {/* <Testimonials /> */}
            {/* <Clients /> */}
            <CTA />
        </div>
    </>
  )

export default Dashboard