import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, withRouter, HashRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';



class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }
  
  render(){
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer/>
        <Navbar /*sidebar={props.store.getState().sidebarReducer}*//>
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={ () => <DialogsContainer /> }/>
          <Route path='/profile/:userId?' render={ () => <ProfileContainer />} />
          <Route exact path='/' render={ () => <ProfileContainer />} />
          <Route path='/users' render={ () => <UsersContainer />} />
          <Route path='/news' render={ () => <News />} />
          <Route path='/music' render={ () => <Music />} />
          <Route path='/settings' render={ () => <Settings />} />

          <Route path='/login' render={ () => <Login />} />

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);

const MainApp = (props) => {
  return <HashRouter>
    <React.StrictMode>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </React.StrictMode>
  </HashRouter>
}

export default MainApp;
