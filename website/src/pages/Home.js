import React, {useContext, useEffect, useState}from 'react'
import { AuthContext } from '../services/AuthContext'
import { useNavigate } from 'react-router-dom';
import CreatePostForm from './components/CreatePostForm';
import axios from 'axios';
import '../styles/Home.css';

function Home() {
    const {login, setLogin} =useContext(AuthContext);
    const navigate = useNavigate();
    const[posts, setPosts] = useState([]);
    
    useEffect ( ()=> {
;   getAllPosts();

    },[])
    const getAllPosts = async () => {
      let response = await axios.get (
        "http://localhost:5555/posts",
        {headers: {authToken: localStorage.getItem("authToken")}}
      )
      console.log("yoo", response);
      if (response?.data?.error) {
        console.log(response.data.error)
      }else {
        console.log(response)
        setPosts(response.data)
      }
    }
    
    const onLogout = () => {
      localStorage.removeItem("AuthToken");
      navigate("/entry");
      setLogin(false);
    }
    return(
      <div>
          <div className="Home">
          <h1> FINSTAGRAM </h1>
          <h2>HOME</h2>
          <CreatePostForm/>
          {posts?.map((post) =>{
            return ( <div>
              <h1>{post.title}</h1>
              <h4>{post.user.username}</h4>
              <p>{post.description}</p>

            </div>)
          })}


              <button type="button"
              onClick={onLogout}
              >LogOut</button>
          </div>
          
      </div>
  )
}
export default Home



