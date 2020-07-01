import React from 'react';
import styles from './users.module.css'

let Users = (props) => {

   if (props.users.length === 0 ) {
      props.setUsers([    
         {id: 1, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg' ,followed: true, fullName: 'Marat', status: 'I\'m a boss', location: {city:'Almaty', country: 'Kazakhstan'} },
         {id: 2, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg' , followed: true, fullName: 'Orseniy', status: 'I\'m a boss', location: {city:'Chicago', country: 'USA'} },
         {id: 3, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg' , followed: false, fullName: 'DanbIla', status: 'I\'m a boss', location: {city:'Almaty', country: 'Kazakhstan'} },
         {id: 4, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg' , followed: false, fullName: 'Danik', status: 'I\'m a boss', location: {city:'Sofia', country: 'Bulgary'} }
      ])
   }
   

   return <div>
      {
         props.users.map(u => <div key={u.id}>
            <span>
               <div>
                  <img src={u.photoUrl} className={styles.userPhoto} alt='avatar'></img>
               </div>
               <div>
                  {u.followed 
                  ?<button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> 
                  :<button onClick={() => {props.follow(u.id)}}>Follow</button>}
                  
               </div>
            </span>
            <span>
               <span>
                  <div>{u.fullName}</div>
                  <div>{u.status}</div>
               </span>
               <span>
                  <div>{u.location.country}</div>
                  <div>{u.location.city}</div>
               </span>
            </span>
         </div>)
      }
   </div>
}

export default Users;