import axios from 'axios';
import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import '../styles/UserProfile.css';
import Post from './components/Post';
import { toast } from 'react-toastify';

function UserProfile() {
    const {username} = useParams();
    const[posts, setPosts] = useState([])
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
    </div>
  )
}

export default UserProfile