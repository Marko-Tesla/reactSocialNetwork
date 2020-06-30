import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts 
      posts={props.profileReducer.posts} 
      /*addPost={props.profileReducer(ADD_POST)}*/
      dispatch={props.dispatch} />
    </div>
  )
  
}

export default Profile;
