import React from 'react';
import preloader from '../../../assets/preloader.svg';
import s from './Preloader.module.css'

let Preloader = (props) => {
   return <div className={s.preloader}>
      <img src={preloader} alt='preloader'/>
   </div>
}

export default Preloader;