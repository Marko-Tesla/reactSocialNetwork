import React from 'react';
import s from './Post.module.css';
import {ReactComponent as LikeIcon} from '../../../../assets/like.svg';

const Post = (props) => {
   return (
      <div className={s.item}>
         <div className={s.post}>
            <img className={s.author} src='https://html.crumina.net/html-olympus/img/author-main1.jpg'></img>
            <div className={s.propsMessage}>
               { props.message }
            </div>
         </div>
         <div>
         <span className={s.likesInfo}><LikeIcon width="16px" height="16px" />{ props.likeCount }</span>
         </div>
      </div>
   );
}

export default Post;