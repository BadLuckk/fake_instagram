import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
}from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import Entry from './pages/Entry';

import {useState} from "react";
function App() {
  const [login, setLogin] = useState(false);
  return (
   <Router>
    <Routes>
      <Route path="/entry" element={<Entry/>}></Route>
      <Route path="/entry" element={<Home/>}/>
      
      <Route path="*" element={<Navigate to={login ? "/Home" : "/Entry"}/>}/>
    </Routes>
   </Router>
  );
}

export default App;
