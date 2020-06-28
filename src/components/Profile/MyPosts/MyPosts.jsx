import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import Profile from '../Profile';

const MyPosts = (props) => {

   let postsElements = props.posts.map(p =><Post message={p.message} likeCount={p.likesCount}/>);
  
   return (
   <div className={s.postsBlock}>
      <h3>My Posts</h3>MyPosts
      <div>
         <div>
            <textarea></textarea>
         </div>
         <div>
            <button>Add post</button>
         </div>
      </div>
      <div className={s.posts}>
         {postsElements}
      </div>
   </div>
   );
   
}

export default MyPosts;