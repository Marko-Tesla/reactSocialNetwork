import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import MessageYou from './Message/MessageYou';
import MessageOther from './Message/MessageOther';

const Dialogs = (props) => {
  
   let state = props.dialogsPage;
   let newMessageBody = state.newMessageBody;
   let dialogsElements = state.dialogs.map( dialog =><DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>);
   let messagesElements = state.messages.map(m => {
      if (m.author=== 'you') {
         return <MessageYou message ={m.message} key={m.id}/>
      } else {
         return <MessageOther message ={m.message} key={m.id}/>
      };
   });

   let onSendMessageClick = () => {
      props.sendMessage();
   };

   let onNewMessageChange = (e) => {
      let body = e.target.value;
      props.updateNewMessageBody(body);
   };

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