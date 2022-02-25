import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import MessageYou from './Message/MessageYou';
import MessageOther from './Message/MessageOther';
import { Redirect } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../utils/validators/validators';

const Dialogs = (props) => {
   let state = props.dialogsPage;
   let dialogsElements = state.dialogs.map( dialog =><DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>);
   let messagesElements = state.messages.map(m => {
      if (m.author=== 'you') {
         return <MessageYou message ={m.message} key={m.id}/>
      } else {
         return <MessageOther message ={m.message} key={m.id}/>
      };
   });

   let addNewMessage = (values) => {
      props.sendMessage(values.newMessageBody);
   }

   if (!props.isAuth) return <Redirect to={"/login"} />;

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            {dialogsElements}
         </div>
         <div className={s.messages}>
            {messagesElements}
            <AddMessageFormRedux onSubmit={addNewMessage}/>
         </div>
      </div>
   )
}

const maxLength100 = maxLengthCreator(100);

const MessageForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field
               validate={[required, maxLength100]}
               name={'newMessageBody'}
               component={Textarea}
               placeholder='Enter your message'
               value={props.newMessageBody}
               />
            <div>
               <button>Send messageasdf</button>
            </div>
         </div>
      </form>
   )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(MessageForm)

export default Dialogs;