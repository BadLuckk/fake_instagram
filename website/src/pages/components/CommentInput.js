import axios from 'axios';
import React from 'react';

function CommentInput(props) {
  const createComment= async(e) =>{
    e.preventDefault();
    console.log(e.target[0].value)
    let response= await axios.post("http://localhost:5555/PostsComments",
        {
            comment : e.target[0].value,
            postId : props?.postId,
        },
        {

            headers: {
                authToken: localStorage.getItem("authToken")
            }
        }
        
        )


  }
    return (
        <form onSubmit={createComment}>
        <textarea>commento</textarea>
    <button type='submit'>commenta</button>
    <div>CommentInput</div>
    </form>
  )
}

export default CommentInput