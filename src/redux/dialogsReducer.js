const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
   messages: [
      {id: 1, message:'Hi', author: 'you'},
      {id: 2, message:'Yo', author: 'other'},
      {id: 3, message:'How are you?', author: 'you'},
      {id: 4, message:'I\'m fine. Thanks.', author: 'other'},
      {id: 5, message:'What is for breakfast?', author: 'you'},
      {id: 6, message:'We\'ll go to my uncle and eat there.', author: 'other'},
      {id: 7, message:'OK. Thanks. See you later.', author: 'you'},
      {id: 8, message:'Later.', author: 'other'},
      {id: 9, message:'Don\'t forget about beer.', author: 'other'}
   ],
   
   dialogs: [
      {id: 1, name:'Dima'},
      {id: 2, name:'Marat'},
      {id: 3, name:'DanbIla'},
      {id: 4, name:'Danik'},
      {id: 5, name:'Orsenyi'} 
   ],
   newMessageBody: ''
}

const dialogsReducer = (state=initialState, action) => {
   switch(action.type) {
      case UPDATE_NEW_MESSAGE_BODY:
         state.newMessageBody = action.body;
         return state;
      case SEND_MESSAGE:
         let body = state.newMessageBody;
         state.newMessageBody = '';
         state.messages.push({id: 6, message: body, author: 'you'},);
         return state;
      default: return state;
   }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({
   type: UPDATE_NEW_MESSAGE_BODY, body: body
});
export default dialogsReducer;