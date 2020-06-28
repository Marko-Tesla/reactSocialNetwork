import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navbar sidebar={props.state.sidebar}/>
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={ () => <Dialogs dialogs={props.state.messagesPage.dialogs} 
          messages={props.state.messagesPage.messages} />} />
          <Route path='/profile' render={ () => <Profile posts={props.state.profilePage.posts}/>} />
        </div>
      </div>;
    </BrowserRouter>)
}

export default App;
