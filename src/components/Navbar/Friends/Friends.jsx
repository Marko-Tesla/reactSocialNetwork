import React from 'react';
import s from './Friends.module.css';

const Friends = (props) => {
  return (
    <div className ={s.friends}>
      <img src={props.avatar} alt='avatar' className={s.avatar}></img>
      <span>{props.name}</span>
    </div>
  );
}

export default Friends;