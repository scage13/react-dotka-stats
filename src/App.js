import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.sass';

// Components
import {Navbar} from './components/Navbar/Navbar';

// Pages
import {HeroesPage} from './pages/HeroesPage';
import {DetailsPage} from './pages/DetailsPage';

// States
import {HeroesState} from "./services/heroes/heroes.state";

function App() {
  return (
    <HeroesState>
      <BrowserRouter>
        <main className="app">
          <Navbar/>
          <Switch>
            <Route path="/" exact component={HeroesPage}/>
            <Route path="/:name" component={DetailsPage}/>
          </Switch>
        </main>
      </BrowserRouter>
    </HeroesState>
  );
}

export default App;
