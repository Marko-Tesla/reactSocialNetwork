import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import Profile from '../Profile';

const MyPosts = () => {
   console.log(Profile.postsElements);
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
         {Profile.postsElements}
         {console.log(Profile.postsElements)}
      </div>
   </div>
   );
   
}

export default MyPosts;