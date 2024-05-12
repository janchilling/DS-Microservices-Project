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
import GetCoursesByUserPage from './pages/getCoursesByUserPage/getCoursesByUserPage';
import GetCourseByIdPage from './pages/getCourseByIdPage/getCourseByIdPage';
import UpdateCoursePage from './pages/updateCoursePage/updateCoursePage';
import ViewAllCourses from './pages/viewAllCoursesPage/viewAllCoursesPage';
import BoughtCoursePage from './pages/boughtCoursePage/boughtCoursePage';

// Admin Components
import ManageCoursePage from './pages/manageCoursePage/manageCoursePage';
import ManageUserPage from './pages/manageUserPage/manageUserPage';
import ViewallUsersPage from './pages/viewUsersPage/viewUsersPage';
import ViewallInstructorsPage from './pages/viewInstructorPage/viewInstructorPage';

import Index from './pages/IndexPage/indexPage';
import Home from './pages/homePage/homePage';
import OrderSummaryPage from "./pages/orderSummaryPage/orderSummaryPage";
import Profile from './pages/profilePage/profilePage';

import EnrollmentsPage from "./pages/enrollmentsPage/enrollmentsPage";
import AllEnrollmentsPage from "./pages/allEnrollmentsPage/allEnrollmentsPage";
import PaymentConfirmationPage from "./pages/paymentConfirmationPage/paymentConfirmantionPage";
import EmailFormPage from "./pages/emailFormPage/emailFormPage";
import AllPaymentsPage from "./pages/allPaymentsPage/allPaymentsPage";

 
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
              <Route path='' element={<Index/>}/>
              <Route path='/home' element={<Home/>}/>
              <Route path='/register' element={<RegisterComponent/>}/>
              <Route path='/login' element={<LoginComponent/>}/>
              <Route path='/profile/:id' element={<Profile/>}/>
              <Route path='/order-summary' element={<OrderSummaryPage/>}/>
              <Route path='/createCourse' element={<CreateCoursePage/>}/>
              <Route path='/getCourses' element={<GetCoursesByUserPage/>}/>
              <Route path='/viewCourse/:id' element={<GetCourseByIdPage/>}/>
              <Route path='/updateCourse/:id' element={<UpdateCoursePage/>}/>
              <Route path='/enrollments' element={<EnrollmentsPage/>}/>
              <Route path='/manage-courses' element={<ManageCoursePage/>}/>
              <Route path='/manage-users' element={<ManageUserPage/>}/>
              <Route path='/all-users' element={<ViewallUsersPage/>}/>
              <Route path='/all-instructors' element={<ViewallInstructorsPage/>}/>
              <Route path='/all-enrollments' element={<AllEnrollmentsPage/>}/>
              <Route path='/all-payments' element={<AllPaymentsPage/>}/>
              <Route path='/all-Courses' element={<ViewAllCourses/>}/>
              <Route path='/coursePage/:id' element={<BoughtCoursePage/>}/>
              <Route path='/confirmationPage' element={<PaymentConfirmationPage/>}/>
              <Route path='/send-email' element={<EmailFormPage/>}/>

            </Routes>
          <Footer/>
        </UserContext.Provider>
      </Router>
  );
}
 
export default App;