import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import DialogItem from './DialogItem/DialogsItem';
import MessageYou from './Message/MessageYou';
import MessageOther from './Message/MessageOther';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/state';

const Dialogs = (props) => {
   let newMessageBody = props.messagesPage.newMessageBody;
   let newMessageElement = React.createRef();
   
   let onSendMessageClick = () => {
      props.dispatch(sendMessageCreator());
   };

   let onNewMessageChange = (e) => {
      let body = e.target.value;
      props.dispatch(updateNewMessageBodyCreator(body));
   };

   let dialogsElements = props.messagesPage.dialogs.map( dialog =><DialogItem name={dialog.name} id={dialog.id} />);
   let messagesElements = props.messagesPage.messages.map(m => {
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
            <div>
               <textarea 
                  ref={newMessageElement} 
                  placeholder='Enter your message'
                  value={newMessageBody}
                  onChange={onNewMessageChange}
                  >
               </textarea>
            </div>
            <div>
               <button onClick={onSendMessageClick}>Send message</button>
            </div>
         </div>
      </div>
   )
}

export default Dialogs;