import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState, useEffect} from "react";
import UserContext from "../src/ContextComponent/ContextComponent";

// Header and Footer
import Header from './components/headerComponent/Header';
import Footer from './components/footerComponent/Footer';
 
// Auth Components
import RegisterComponent from './auth/components/registerComponent/registerComponent';
import LoginComponent from './auth/components/loginComponent/loginComponent';

// Instructor Components
import CreateCoursePage from './pages/createCoursePage/createCoursePage';

import Home from './pages/homePage/homePage';
import OrderSummaryPage from "./pages/orderSummaryPage/orderSummaryPage";

import EnrollmentsPage from "./pages/enrollmentsPage/enrollmentsPage";
import AllEnrollmentsPage from "./pages/allEnrollmentsPage/allEnrollmentsPage";
import EmailFormPage from "./pages/emailFormPage/emailFormPage";
 
function App() {

  // user details pass
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
      <Router>
        <UserContext.Provider value={{ user, setUser }}>
          <Header/>
            <Routes>
              <Route path='' element={<Home/>}/>
              <Route path='/register' element={<RegisterComponent/>}/>
              <Route path='/login' element={<LoginComponent/>}/>
              <Route path='/order-summary' element={<OrderSummaryPage/>}/>
              <Route path='/createCourse' element={<CreateCoursePage/>}/>
              <Route path='/enrollments' element={<EnrollmentsPage/>}/>
              <Route path='/all-enrollments' element={<AllEnrollmentsPage/>}/>
              <Route path='/send-email' element={<EmailFormPage/>}/>
            </Routes>
          <Footer/>
        </UserContext.Provider>
      </Router>
  );
}
 
export default App;