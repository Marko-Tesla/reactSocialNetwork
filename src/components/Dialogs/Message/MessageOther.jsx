import React from 'react';
import s from './../Dialogs.module.css';


const MessageOther = (props) => {
   return (
         <div className={s.messagesOther}><span>{props.message}</span><img src='https://html.crumina.net/html-olympus/img/avatar6.jpg'></img></div>
   );
}
export default MessageOther;