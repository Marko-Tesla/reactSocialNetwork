import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import MessageYou from './Message/MessageYou';
import MessageOther from './Message/MessageOther';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';

const Dialogs = (props) => {
   let newMessageBody = props.dialogsReducer.newMessageBody;
   let onSendMessageClick = () => {
      props.dispatch(sendMessageCreator());
   };

   let onNewMessageChange = (e) => {
      let body = e.target.value;
      props.dispatch(updateNewMessageBodyCreator(body));
   };

   let dialogsElements = props.dialogsReducer.dialogs.map( dialog =><DialogItem name={dialog.name} id={dialog.id} />);
   let messagesElements = props.dialogsReducer.messages.map(m => {
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