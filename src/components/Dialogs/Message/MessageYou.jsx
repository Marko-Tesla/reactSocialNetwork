import React from 'react';
import s from './../Dialogs.module.css';

const MessageYou = (props) => {
   return (
         
         <div className={s.messagesYou}><img src='https://html.crumina.net/html-olympus/img/author-main1.jpg'></img><span>{props.message}</span></div>
   );
}
export default MessageYou;