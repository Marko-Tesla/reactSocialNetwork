import React from 'react';
import lookingForAJob from '../../../assets/lookingForAJob.svg';
import s from './Jobs.module.css'

let LookingForAJobImg = (props) => {
   return <div className={s.main}>
      <img src={lookingForAJob}/>
      <span>Я ищу работу</span>
   </div>
}

export default LookingForAJobImg;