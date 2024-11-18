 import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './component/pages/Landingpage';
import CompanyRegister from './component/pages/CompanyRegister';
import OTP from './component/pages/OTP';
import Card from './component/pages/Card';
import Search from './component/pages/Search';
import Login from './component/pages/Login';
 
 
 
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" name="get" element={<LandingPage />} />
          <Route path="/companyregister" name="get" element={<CompanyRegister />} />
          <Route path="/otp" name="get" element={<OTP />} />
          <Route path="/card" name="get" element={<Card />} />
          <Route path="/search" name="get" element={<Search />} />
          <Route path="/login" name="get" element={<Login />} />
         
        
        </Routes>
      </Router>
    
    </div>
    
  );
}

export default App;
