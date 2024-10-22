import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Comment from './Comment'


function ShowComments(props) {
  const [comments, setComments]= useState([])

  useEffect(()=>{
    setComments(props?.comments)
getAllComments();
  },[props])
  const getAllComments = async() =>{
    let response = await axios.get ("http://localhost:5555/PostsComments/"+props?.postId,
      {headers:{authToken: localStorage.getItem("authToken")}}
    )
    console.log(response.data)

  }


  return (

    <div>
      <p>
        {comments?.length}
      </p>
      
      {comments?.map((value)=>{
      return(
      <Comment comment={value} />
      )
    })}</div>
  )
}

export default ShowComments