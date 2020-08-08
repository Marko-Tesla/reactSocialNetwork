import React from 'react';
import s from './Music.module.css';

const Music = (props) => {
   return (
      <div className={s.content}>
         <div>
         <span>Music</span>
         <img src="https://congregationbethtorah.org/wp-content/uploads/2016/01/wip-1024x950.png" alt="Work in progress..."></img>
         </div>
      </div>
   )
}

export default Music;