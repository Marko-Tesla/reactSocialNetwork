import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';

const App = (props) => {
 
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navbar sidebar={props.state.sidebarReducer}/>
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={ () => <Dialogs dialogsReducer={props.state.dialogsReducer} 
          dispatch={props.dispatch}/>} />
          <Route path='/profile' render={ () => <Profile profileReducer={props.state.profileReducer} 
          dispatch={props.dispatch} />} />
        </div>
      </div>;
    </BrowserRouter>)
}

export default App;
