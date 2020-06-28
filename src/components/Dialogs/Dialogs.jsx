import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import DialogItem from './DialogItem/DialogsItem';
import MessageYou from './Message/MessageYou';
import MessageOther from './Message/MessageOther';

const Dialogs = (props) => {
   let dialogsElements = props.dialogs.map( dialog =><DialogItem name={dialog.name} id={dialog.id} />);
   let messagesElements = props.messages.map(m => {
      if (m.author=== 'you') {
         return <MessageYou message ={m.message} />
      } else {
         return <MessageOther message ={m.message} />
      };
   });
   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            {dialogsElements}
         </div>
            <div className={s.messages}>
               {messagesElements}
            </div>
      </div>
   )
}

export default Dialogs;