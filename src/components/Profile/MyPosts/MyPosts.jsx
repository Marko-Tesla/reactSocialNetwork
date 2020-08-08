import React, { Component } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';
import {required, maxLengthCreator} from '../../../utils/validators/validators'
import { Textarea } from '../../common/FormsControls/FormsControls';

const MyPosts = React.memo(props =>{
   let postsElements = props.posts.map(p =><Post message={p.message} likeCount={p.likesCount} key={p.id}/>);

   let newPostElement = React.createRef();

   let onAddPost = (values) => {
      props.addPost(values.newPostText);
   };

   return (
   <div className={s.postsBlock}>
      <h3>My Posts</h3>MyPosts
      <AddNewPostReduxForm onSubmit={onAddPost}/>
      <div className={s.posts}>
         {postsElements}
      </div>
   </div>
   );
});


const maxLength300 = maxLengthCreator(300);

const AddNewPostForm = (props) => {
   return (
   <form onSubmit={props.handleSubmit}>
      <div>
         <Field name={'newPostText'} component={Textarea} validate={[required, maxLength300]} placeholder={'Post message'}/>
      </div>
      <div>
         <button>Add post</button>
      </div>
   </form>
   )
}

const AddNewPostReduxForm = reduxForm({form:'ProfileAddNewPostForm'})(AddNewPostForm);

export default MyPosts;