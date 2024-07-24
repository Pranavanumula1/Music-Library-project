import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SongList from './components/SongList';
import SongDetail from './components/SongDetail';
import Navbar from './components/Navbar';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={SongList} />
          <Route path="/song/:id" component={SongDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
