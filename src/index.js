import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
/*
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

let posts = [
  {id: 1, message:'My first post', likeCount: 12},
  {id: 2, message:'My 2 post', likeCount: 11},
  {id: 3, message:'Got new job', likeCount: 3}, 
];
*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
