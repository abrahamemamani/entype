import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Game from './components/Game/Game';

const initialState = {
  category : {}
};

const App = () => {

  const [game, setGame] = useState(initialState);

  const getCategory = (category) => {
    setGame({
      category
    });
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/" 
          render={() => (
            <Home getCategory={ getCategory } />
          )}
        />
        <Route exact path="/game/:id"
          render={ () => (
            <Game game={ game } />
          )}
        />
        <Route default component={ Home } />
      </Switch>
    </Router>
  );
}

export default App;