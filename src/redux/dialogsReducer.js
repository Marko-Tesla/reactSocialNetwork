const SEND_MESSAGE = 'SEND_MESSAGE';

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
   ]
};

const dialogsReducer = (state=initialState, action) => {
   switch(action.type) {
      case SEND_MESSAGE:
         let body = action.newMessageBody;
         return {
            ...state,
            messages: [...state.messages, {id: 10, message: action.newMessageBody, author: 'you'}]
         };
      default: return state;
   }
};

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;
