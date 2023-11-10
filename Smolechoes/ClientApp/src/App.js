import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles/App.css'
import Home from './components/pagesComponents/HomeComponent/Home';
import Excursions from './components/pagesComponents/ExcursionsComponent/Excursions';
import ExcursionPage from './components/pagesComponents/ExursionPageComponent/ExcursionPage';
import PlayerComponent from './components/pagesComponents/PlayerComponent/PlayerComponent';

export default class App extends Component {
  static displayName = App.name;

  render() {
    console.log(window.innerWidth);

    return (
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/excursions" element={<Excursions/>} />
          <Route path="/excursion" element={<ExcursionPage/>} />
          <Route path="/player" element={<PlayerComponent/>} />
      </Routes>
    );
  }
}
