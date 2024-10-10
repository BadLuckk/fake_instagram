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
import { PrivateRoute } from "./services/PrivateRoute";
import { AuthContext } from "./services/AuthContext";
import {useState, useEffect} from "react";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from "react-toastify";
import UserProfile from "./pages/UserProfile";
function App() {
  
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(true);
  
  useEffect(()=>{
    if(localStorage.getItem("authToken")) {
   checkAuth();
    }else {
      setLoading(false);
    }
  },[])

  async function checkAuth(){
    let res = await axios.get("http://localhost:5555/users/auth",
    {
      headers: {
        authToken: localStorage.getItem("authToken")
      }
    }
    )
if(res?.data?.error) {
  toast.error(res.data.error);

}else if (res?.data?.user) {
  setLogin(res?.data?.user)
}
setLoading(false);
  }

  if(loading) {
    return <></>
  }
  return (
    <>
    <AuthContext.Provider value={{login, setLogin}}>
   <Router>
    <Routes>
      <Route path="/entry" element={<Entry/>}></Route>
      <Route path="/home" element={<PrivateRoute/>}>
      <Route path="/home" element={<Home/>}/>
      </Route>
      <Route path="/user/:username" element={<PrivateRoute/>}>
      <Route path="/user/:username" element={<UserProfile/>}/>
      </Route>      
      <Route path="*" element={<Navigate to={login ? "/home" : "/entry"}/>}/>
    </Routes>
   </Router>
   </AuthContext.Provider>
   <ToastContainer />
   </>
  );
}

export default App;
