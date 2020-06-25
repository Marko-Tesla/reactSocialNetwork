import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {

   let dialogs = [
      {id: 1, name:'Dima'},
      {id: 2, name:'Marat'},
      {id: 3, name:'DanbIla'},
      {id: 4, name:'Danik'},
      {id: 5, name:'Orsenyi'} 
   ];
   
   let messages = [
      {id: 1, message:'Hi'},
      {id: 2, message:'How are you?'},
      {id: 3, message:'What is for breakfast?'},
      {id: 4, message:'Yo'},
      {id: 5, message:'Orsenyi'} 
   ];
   
   let dialogsElements = dialogs.map( dialog =><DialogItem name={dialog.name} id={dialog.id} />);
   let messagesElements = messages.map( m =><Message message ={m.message} />);
   

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