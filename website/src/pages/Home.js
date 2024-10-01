import React, {useContext}from 'react'
import { AuthContext } from '../services/AuthContext'
import { useNavigate } from 'react-router-dom';
import CreatePostForm from './components/CreatePostForm';
import "../styles/Home.css"

function Home() {
    const {login, setLogin} =useContext(AuthContext);
    const navigate = useNavigate();

    const logout = () =>{
      localStorage.removeItem("authToken");
      navigate("/entry"); 
      setLogin(false);  
      
    }
    return (
      <div style={{color: "black"}} className='home'>

          <h1>Home</h1>
        <div className='finestra'>


          <CreatePostForm />
        </div>
          <div className='bot'>
          <button type="submit" onClick={logout} className='bott'>
            Log Out
          </button>
          </div>
      
      </div>
    )
}

export default Home



