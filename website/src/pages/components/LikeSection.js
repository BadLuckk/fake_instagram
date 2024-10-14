import React, { useState } from 'react'
import CaccaVuota from "../../assets/caccaVuota.svg"
import CaccaPiena from "../../assets/caccaPiena.svg"
import axios from 'axios'




function LikeSection(props) {
    const [like, setlike] = useState(false)
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
        setlike(!like)
    }

    
  return (
    <div>
        <button onClick={changeLike}>
        <img src={like ?CaccaPiena : CaccaVuota} alt='caccav'/> 
        </button>
        <p>{69}</p>

    </div>
  )
}

export default LikeSection