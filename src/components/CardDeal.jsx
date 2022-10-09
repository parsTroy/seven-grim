import React from 'react';
import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Game Town <br className='sm:block hidden' /> USA</h2>
        <p className={`${styles.paragraph} m-w-[470px] mt-5`}>
          alwjdoikg oihawoihg oihaoihg iuhsergiuhseg iuhsergiuhsegn
          nfijeisg iujbhsgiuh iuhsegiuh aiuhseg
          nuiseghisuehg iuhsegiuhdrg iuhrgiuhrg
          uihsefiusregiu iusghegiughsrgbiuh.
        </p>
      <Button styles='mt-10' />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt='card' className='w-[100%] h-[100%]' />
      </div>
    </section>
)

export default CardDeal