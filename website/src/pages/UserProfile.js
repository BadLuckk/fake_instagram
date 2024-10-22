import axios from 'axios';
import React, { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import '../styles/UserProfile.css';
import Post from './components/Post';
import { toast } from 'react-toastify';
import Menu from './components/Menu';

function UserProfile() {
    const {username} = useParams();
    const[posts, setPosts] = useState([])
    const navigate = useNavigate;
    useEffect (() =>{
       fetchData();

    }, [username])
    const fetchData = async () => {
        let response = await axios.get(
            "http://localhost:5555/posts/" + username,
            {
                headers: {
                    authToken: localStorage.getItem("authToken")
                }
            }
        )

        toast.success(response?.data)
        setPosts(response?.data)
        
    }
  return (
    <div className='UserProfile'>
        <div className='UserStats'>
            <p className='Username'>Username:{username}</p>
            </div>
            <div className='Posts'>
                {
                    posts.length >= 1 && posts?.map((value) => {
                        return <Post 
                        post={value}
                        username= {username}
                        />
                    })
                }

    </div>
    <Menu />
    <button onClick={() => navigate(-1)}>Home</button>
    </div>
  )
}

export default UserProfile