import React from 'react';
import s from './Header.module.css'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
   return (
   <header className={s.header}>
      <img src="https://html.crumina.net/html-olympus/img/logo.png" alt='logo'></img>
      <span>Profile page</span>
      <div className={s.loginBlock}>
      {props.isAuth ? props.login
         : <NavLink to={'/login'}>Login</NavLink>}
      </div>
   </header>);
}

export default Header;




