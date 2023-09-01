import './App.css';
import CarInsurance from './component/CarInsurance';
import HealthInsurance from './component/HealthInsure';
import HomeComp from './component/HomeComp';
import NavbarComp from './component/NavbarComp';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavbarComp />
        <Routes>
          <Route exact path='/carInsurance' element={<CarInsurance />} />
          <Route exact path='/' element={<HomeComp />} />
          <Route exact path='/healthInsurance' element={<HealthInsurance />} />
        </Routes>
      </Router >
    </>
  );
}
export default App;
