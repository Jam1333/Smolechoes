import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import './styles/App.css'
import Home from './components/pagesComponents/HomeComponent/Home';
import Excursions from './components/pagesComponents/ExcursionsComponent/Excursions';

export default class App extends Component {
  static displayName = App.name;

  render() {
    console.log(window.innerWidth);

    return (
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/excursions" element={<Excursions/>} />
      </Routes>
    );
  }
}
