import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./index.css"
import OrderSummaryPage from "./pages/orderSummaryPage/orderSummaryPage";

function App() {
  return (
      <Router>
              <div>
                  <Routes>
                      <Route path="/orderSummary" element={<OrderSummaryPage/>}/>
                  </Routes>
              </div>
      </Router>
  );
}

export default App;
