import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../services/AuthContext'
import CaccaVuota from "../../assets/caccaVuota.svg"
import CaccaPiena from "../../assets/caccaPiena.svg"
import axios from 'axios'





function LikeSection(props) {
    const [like, setlike] = useState(false);
    const {login} =useContext(AuthContext);
    const [numLikes, setNumlikes]=useState(0);

useEffect(() => {
    if (props?.likes.length >=1){
        let filtered = props?.likes?.filter((value) => {return login?.id==value.userId})[0]?.like
        setlike(filtered)
        let num = props?.likes?.filter((value)=> {return value.like==true})?.length
        setNumlikes(num)


    }
},[])


    const changeLike= async() => {
        let response = await axios.post("http://localhost:5555/postsLikes",
            {
                like:!like,
                postId: props.postId
            },
            {
                headers:  {
                    authToken: localStorage.getItem("authToken")
                }
            })
            setNumlikes(like==true ? numLikes-1 : numLikes+1)
        setlike(!like)
    }

    
  return (
    <div>
        <button onClick={changeLike}>
        <img src={like ?CaccaPiena : CaccaVuota} alt='caccav'/> 
        </button>
        <p>{numLikes}</p>

    </div>
  )
}

export default LikeSection