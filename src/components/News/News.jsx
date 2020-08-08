import React from 'react';
import s from './News.module.css';

const News = (props) => {
   return (
      <div className={s.content}>
         <div>
            <span>News</span>
            <img src="https://congregationbethtorah.org/wp-content/uploads/2016/01/wip-1024x950.png" alt="Work in progress..."></img>
         </div>
      </div>
   )
}

export default News;