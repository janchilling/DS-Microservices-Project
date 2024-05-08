import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

// Header and Footer
import Header from './components/headerComponent/Header';
import Footer from './components/footerComponent/Footer';

import Home from './pages/homePage/homePage';
import OrderSummaryPage from "./pages/orderSummaryPage/orderSummaryPage";

function App() {
  return (
      <Router>
        <Header/>
          <Routes>
            <Route path='' element={<Home/>}/>
              <Route path='/order-summary' element={<OrderSummaryPage/>}/>
          </Routes>
        <Footer/>
      </Router>
  );
}

export default App;
