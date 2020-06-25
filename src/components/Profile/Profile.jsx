import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Post from './MyPosts/Post/Post';


const Profile = () => {
  let posts = [
    {id: 1, message:'My first post', likeCount: 12},
    {id: 2, message:'My 2 post', likeCount: 11},
    {id: 3, message:'Got new job', likeCount: 3}, 
  ];
  
  let postsElements = posts.map(p =><Post message={p.message} likeCount={p.likeCount}/>);
  
  return <div className={s.content}>
  <ProfileInfo />  
  <MyPosts />
  </div> 
}

export default Profile;
