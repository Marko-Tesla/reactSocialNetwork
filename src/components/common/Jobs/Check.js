import React from 'react';
import check from '../../../assets/check.svg';
import s from './Jobs.module.css'

let Check = (props) => {
   return <div className={s.main}>
      <img src={check} />
      <span>Я не ищу работу</span>
   </div>
}

export default Check;

