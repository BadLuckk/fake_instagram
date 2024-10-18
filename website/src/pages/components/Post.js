import React, {useContext, useState, useEffect} from 'react'
import { AuthContext } from '../../services/AuthContext'
import"../../styles/Post.css"
import axios from 'axios'
import {toast} from "react-toastify"
import { useNavigate } from 'react-router-dom'
import DateService from '../../services/DateService'
import LikeSection from './LikeSection'
import CommentSection from './CommentSection'
import vVuota from "../../assets/v-vuota.svg"
import vPiena from "../../assets/v-piena.svg"
import ShowComments from './ShowComments'


function Post(props){
    const {login} = useContext(AuthContext);
    const [username,setUsername] = useState("");
    const [showComments, setShowComments] = useState(false)
    const navigate = useNavigate();
    useEffect(() =>{
        if(props?.username) {
            setUsername (props?.username)
        }else if(props?.post?.user?.username) {
                setUsername(props?.post?.user?.username);
            }
            console.log("LOGIN!!!!!!!", login)
        
    },[props])
    const onDelete = async () => {
        console.log(props.post.id)
        let response = await axios.delete("http://localhost:5555/posts/" + props?.post?.id,
            {
                headers: {
                    authToken: localStorage.getItem("authToken")
                }
            }
        )
        props.deletePost(props?.post?.id)
        toast.success("you have deleted your post")
    }
      return (
        <div className='singlePost'>            
            <h2 className='postTitle'>{props?.post?.title}</h2>

            <p className='postDescription'>{props?.post?.description}</p>
            <div className='date'>{DateService.formatDate(props?.post?.createdAt)}</div>
            <div className='bottoni'>
                <button onClick={()=>{setShowComments(!showComments)}}>
                    <img src={vVuota} alt={'commenti'}/>
                </button>
                
                <LikeSection likes={props?.post?.postsLikes} postId={props?.post?.id}/>
            <button className='delete' onClick={onDelete}>Delete</button>
            <p className='postUsername' onClick = {() => {
                navigate("/user/" + username)
            }}>{props?.username ? props?.username : props?.post?.user?.username}</p>
            </div>
            {showComments ? <CommentSection postId={props?.post?.id}/> : <></>}
        </div>
      )
    }

export default Post