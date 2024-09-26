import React, {useContext}from 'react'
import { AuthContext } from '../services/AuthContext'
import { useNavigate } from 'react-router-dom';
import "../styles/Home.css"

function Home() {
    const {login} =useContext(AuthContext);
    const navigate = useNavigate();

    const logout = () =>{
      localStorage.removeItem(login);
      navigate("/entry");   
      
    }
    return (
      <div style={{color: "black"}} className='home'>
      <h1>Home</h1>
      <div>
      {login ? "  Logged In  " : "  Logged Out  "}
      <div className='bot'>
      <button type="submit" onClick={logout}>
        
        Log Out
       
        </button>
      </div>
      </div>
</div>
    )
}

export default Home



