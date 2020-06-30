import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profileReducer';

const MyPosts = (props) => {
   let postsElements = props.posts.map(p =><Post message={p.message} likeCount={p.likesCount}/>);
  
   let newPostElement = React.createRef();

   let addPost = () => {
      props.dispatch(addPostCreator());
   };

   let onPostChange = () => {
      let text = newPostElement.current.value;
      //props.dispatch({type:'UPDATE-NEW-POST-TEXT', newText: text});
      let action = updateNewPostTextCreator(text);
      props.dispatch(action);
   }

   return (
   <div className={s.postsBlock}>
      <h3>My Posts</h3>MyPosts
      <div>
         <div>
            <textarea onChange={onPostChange} ref={newPostElement} 
            value={props.newPostText}/>
         </div>
         <div>
            <button onClick={addPost}>Add post</button>
         </div>
      </div>
      <div className={s.posts}>
         {postsElements}
      </div>
   </div>
   );
   
}

export default MyPosts;