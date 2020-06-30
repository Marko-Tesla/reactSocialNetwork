import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
  <div className={s.content}>
    <div>
      <img className={s.ProfileBG} src="https://html.crumina.net/html-olympus/img/top-header1.jpg" alt='header-bg'></img>
    </div>   
    <div className={s.descriptionBlock}>
      ava + desc
    </div>
  </div> );
}

export default ProfileInfo;