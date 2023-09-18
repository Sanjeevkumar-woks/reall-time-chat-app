import './App.css';
import Dashboard from './pages/dashboard/dashboard';
import { Route, Routes } from "react-router-dom";
import Home from './pages/home/Home';
import Signin from './pages/Signin';
import Login from './pages/Login';
import Page_404 from './Page_404';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/dashboard" element={<Dashboard />}/>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/signin" element={<Signin />}/>
        <Route exact path="/dasboard" element={<Dashboard />}/>
        <Route exact path="*" element={<Page_404/>}/>
      </Routes>
    </div>
  );
}

export default App;
