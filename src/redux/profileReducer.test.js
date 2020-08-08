import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";
import ReactDOM from "react-dom";
import React from "react";

let state = {
   posts: [
      {id:1, message: 'Hi, how are you?', likesCount: 12},
      {id:2, message: 'This is my first post!', likesCount: 11},
      {id:3, message: 'Dada', likesCount: 5},
      {id:4, message: 'Yo', likesCount: 15}
   ]
};

it('new post should be added', ()=>{
   //1.test data
   let action = addPostActionCreator('itkam.com');
   //2.action
   let newState = profileReducer(state, action);
   //3.expectation
   expect (newState.posts.length).toBe(5);
});

it('message of new post should be correct', ()=>{
   //1.test data
   let action = addPostActionCreator('itkam.com');
   //2.action
   let newState = profileReducer(state, action);
   //3.expectation
   expect (newState.posts[4].message).toBe('itkam.com');
});

it('after deleting length of messages should be decremented', ()=>{
   //1.test data
   let action = deletePost(1);
   //2.action
   let newState = profileReducer(state, action);
   //3.expectation
   expect (newState.posts.length).toBe(3);
});

it(`after deleting length of messages shouldn't be decremented if id is incorrect`, ()=>{
   //1.test data
   let action = deletePost(1000);
   //2.action
   let newState = profileReducer(state, action);
   //3.expectation
   expect (newState.posts.length).toBe(4);
});

