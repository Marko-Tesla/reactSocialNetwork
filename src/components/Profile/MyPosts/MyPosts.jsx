import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';

const MyPosts = (props) => {
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
   
}

const AddNewPostForm = (props) => {
   return (
   <form onSubmit={props.handleSubmit}>
      <div>
         <Field name={'newPostText'} component={'textarea'}/>
      </div>
      <div>
         <button>Add post</button>
      </div>
   </form>
   )
}

const AddNewPostReduxForm = reduxForm({form:'ProfileAddNewPostForm'})(AddNewPostForm);

export default MyPosts;