import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

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
   dispatch(action){ 
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
      this._state.sidebar = sidebarReducer(this._state.sidebar, action);
      this._callSubscriber(this._state);
   }
}

export default store;
window.store = store;
