import React,{useEffect} from 'react';
import {Route,Switch} from 'react-router-dom';
import NavBar from './components/navBar';
import SearchPage from './components/searchPage';
import MusicPuzzleBackground from './components/musicpuzzlebackground';
import SongPage from './components/songPage';
import './App.css';

// dotenv.config().parsed;

function App() {
  useEffect(()=>{
  document.title="Sing Along";
  },[])
  return (
    <div >

      <NavBar/>
      <Switch>
      <Route exact  path='/' component={MusicPuzzleBackground}/>
      <Route path="/search/" component={SearchPage}/>
       <Route path="/song" component={SongPage}/>
      </Switch>
     
    </div>
  );
}

export default App;
