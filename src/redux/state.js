
let state = {
   profilePage: {
      posts: [
         {id:1, message: 'Hi, how are you?', likesCount: 12},
         {id:2, message: 'This is my first post!', likesCount: 11},
         {id:3, message: 'Dada', likesCount: 5},
         {id:4, message: 'Yo', likesCount: 15}
      ]
   },
   messagesPage:{
      messages: [
         {id: 1, message:'Hi', author: 'you'},
         {id: 5, message:'Yo', author: 'other'},
         {id: 2, message:'How are you?', author: 'you'},
         {id: 6, message:'I\'m fine. Thanks.', author: 'other'},
         {id: 3, message:'What is for breakfast?', author: 'you'},
         {id: 7, message:'We\'ll go to my uncle and eat there.', author: 'other'},
         {id: 4, message:'OK. Thanks. See you later.', author: 'you'},
         {id: 8, message:'Later.', author: 'other'},
         {id: 8, message:'Don\'t forget about beer.', author: 'other'}
      ],
      
      dialogs: [
         {id: 1, name:'Dima'},
         {id: 2, name:'Marat'},
         {id: 3, name:'DanbIla'},
         {id: 4, name:'Danik'},
         {id: 5, name:'Orsenyi'} 
      ]
   },
   sidebar:[
      {name: 'Andrew', avatar:'https://html.crumina.net/html-olympus/img/avatar8.jpg'},
      {name: 'Sasha', avatar:'https://html.crumina.net/html-olympus/img/avatar4.jpg'},
      {name: 'Sveta', avatar:'https://html.crumina.net/html-olympus/img/avatar3.jpg'}
   ]   
   
}

export default state;