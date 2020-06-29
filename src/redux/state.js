const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


let store = {
   _state: {
      profilePage: {
         posts: [
            {id:1, message: 'Hi, how are you?', likesCount: 12},
            {id:2, message: 'This is my first post!', likesCount: 11},
            {id:3, message: 'Dada', likesCount: 5},
            {id:4, message: 'Yo', likesCount: 15}
         ],
         newPostText: 'Marko Kra Kop'
      },
      messagesPage:{
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
      },
      sidebar:[
         {name: 'Andrew', avatar:'https://html.crumina.net/html-olympus/img/avatar8.jpg'},
         {name: 'Sasha', avatar:'https://html.crumina.net/html-olympus/img/avatar4.jpg'},
         {name: 'Sveta', avatar:'https://html.crumina.net/html-olympus/img/avatar3.jpg'}
      ]
   },
   _callSubscriber()  {},
   getState() {
      return this._state;
   },
   subscribe(observer) {
      this._callSubscriber = observer; //observer
   },
   dispatch(action){ // {type:'ADD-POST'}
      if(action.type === ADD_POST) {
         let newPost = {
            id:5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
         };
         this._state.profilePage.posts.push(newPost);
         this._state.profilePage.newPostText ='';
         this._callSubscriber(this._state);
      } else if (action.type === UPDATE_NEW_POST_TEXT) {
         this._state.profilePage.newPostText = action.newText;
         this._callSubscriber(this._state);   
      } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
         this._state.messagesPage.newMessageBody = action.body;
         this._callSubscriber(this._state);   
      } else if (action.type === SEND_MESSAGE) {
         let body = this._state.messagesPage.newMessageBody;
         this._state.messagesPage.newMessageBody = '';
         this._state.messagesPage.messages.push({id: 6, message: body, author: 'you'},);
         this._callSubscriber(this._state);   
      }
   }
}

export const addPostCreator = () => ({type: ADD_POST});
export const updateNewPostTextCreator = (text) => ({
   type: UPDATE_NEW_POST_TEXT, newText: text
});
export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({
   type: UPDATE_NEW_MESSAGE_BODY, body: body
});


export default store;
window.store = store;
// store - OOP