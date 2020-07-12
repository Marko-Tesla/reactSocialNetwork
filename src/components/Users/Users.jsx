import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/avatar-default.png';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

let Users = (props) => {
   let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);

      let pages = [];
      for (let i=1; i<= pagesCount; i++) {
         pages.push(i);
      }

      
   return <div>
      <div>
         {pages.map(p => {
            return <span className={props.currentPage === p && styles.selectedPage}
            onClick={(e)=>{props.onPageChanged(p)}}>{p}</span>
         })}
      </div>
      {props.users.map(u => <div key={u.id}>
         <span>
            <div>
               <NavLink to={'/profile/' + u.id}>
                  <img src={ u.photos.small != null ? u.photos.small: userPhoto} className={styles.userPhoto} alt='avatar'></img>
               </NavLink>
            </div>
            <div>
               {u.followed 
               ?<button onClick={() => {

               props.unfollow(u.id);
               axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                  {withCredentials:true,
                  headers:{
                     'API-KEY':'376abf7f-d37f-4f52-b471-8307c13717fb'
                  }                     
                  })
                  .then(response => {
                     if (response.data.resultCode == 0) {
                        props.unfollow(u.id);
                     }
                  });
               }}>Unfollow</button> 
               :<button onClick={() => {
               axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                  {withCredentials:true,
                  headers:{
                     'API-KEY':'376abf7f-d37f-4f52-b471-8307c13717fb'
                  }  })
                  .then(response => {
                     if (response.data.resultCode == 0) {
                        props.follow(u.id);
                     }
                  });
               

               }}>Follow</button>}
               
            </div>
         </span>
         <span>
            <span>
               <div>{u.name}</div>
               <div>{u.status}</div>
            </span>
            <span>
               <div>{"u.location.country"}</div>
               <div>{"u.location.city"}</div>
            </span>
         </span>
      </div>)}
   </div>
}

export default Users;

/*
import styles from './users.module.css'
import * as axios from 'axios';
import userPhoto from '../../assets/avatar-default.png';

class UsersAPIComponent extends React.Component {

   componentDidMount() {
      if (this.props.users.length === 0 ) {
         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
         });
      }   
   }

   onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
         this.props.setUsers(response.data.items);
      });
   }

   render() {

      let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize);

      let pages = [];
      for (let i=1; i<= pagesCount; i++) {
         pages.push(i);
      }
      
      return <Users />
      <div>
         <div>
            {pages.map(p => {
               return <span className={this.props.currentPage === p && styles.selectedPage}
               onClick={(e)=>{this.onPageChanged(p)}}>{p}</span>
            })}
         </div>
      {
         this.props.users.map(u => <div key={u.id}>
            <span>
               <div>
                  <img src={ u.photos.small != null ? u.photos.small: userPhoto} className={styles.userPhoto} alt='avatar'></img>
               </div>
               <div>
                  {u.followed 
                  ?<button onClick={() => {this.props.unfollow(u.id)}}>Unfollow</button> 
                  :<button onClick={() => {this.props.follow(u.id)}}>Follow</button>}
                  
               </div>
            </span>
            <span>
               <span>
                  <div>{u.name}</div>
                  <div>{u.status}</div>
               </span>
               <span>
                  <div>{"u.location.country"}</div>
                  <div>{"u.location.city"}</div>
               </span>
            </span>
         </div>)
      }
   </div>
   }
   
}

export default UsersAPIComponent;
*/