import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader';
import facebookIcon from '../../../assets/socMedia/facebook.svg'
import websiteIcon from '../../../assets/socMedia/website.svg'
import vkIcon from '../../../assets/socMedia/vk.svg'
import instagramIcon from '../../../assets/socMedia/instagram.svg'
import twitterIcon from '../../../assets/socMedia/twitter.svg'
import LookingForAJobImg from '../../common/Jobs/LookingForAJob'
import Check from '../../common/Jobs/Check';
import UserPhoto from '../../../assets/avatar-default.png'

const ProfileInfo = (props) => {
  
  if (!props.profile){
    return <Preloader />
  }
  return (
  <div className={s.content}>
    <div>
      <img className={s.ProfileBG} src="https://html.crumina.net/html-olympus/img/top-header1.jpg" alt='header-bg'></img>
    </div>   
    <div className={s.descriptionBlock}>
      <div >
        <img src={props.profile.photos.large !=null ? props.profile.photos.large: UserPhoto} alt='largePhoto' width='300' height='300'/>
        <div className={s.profileInfo}>
          <span className={s.profileName}>{props.profile.fullName}</span>
          <span className={s.profileStatus}>{props.profile.aboutMe}</span>
        
        </div>
      </div>
      <div className={s.jobSection}>
        {props.profile.lookingForAJob ? 
        <LookingForAJobImg /> : <Check />}
      </div>
      <div className={s.contacts}>
        <span className={s.contactsMain}>Контакты</span>
        <a className={s.contactsString} href={`www.${props.profile.contacts.facebook}`}><img width='30' src={facebookIcon} alt='facebookIcon'/><span>Мой Facebook</span></a>
        <a className={s.contactsString} href={`www.${props.profile.contacts.website}`}><img width='30' src={websiteIcon} alt='websiteIcon'/><span>Мой сайт</span></a>
        <a className={s.contactsString} href={`www.${props.profile.contacts.vk}`}><img width='30' src={vkIcon} alt='vkIcon'/><span>Мой VK</span></a>
        <a className={s.contactsString} href={`www.${props.profile.contacts.twitter}`}><img width='30' src={twitterIcon} alt='twitterIcon'/><span>Мой Twitter</span></a>
        <a className={s.contactsString} href={`www.${props.profile.contacts.instagram}`}><img width='30' src={instagramIcon} alt='instagramIcon'/><span>Мой Instagram</span></a>
      </div>
    </div>
  </div> );
}
export default ProfileInfo;