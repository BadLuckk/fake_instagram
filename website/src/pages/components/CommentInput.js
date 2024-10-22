import axios from 'axios';
import React from 'react';
import '../../styles/CommentInput.css'

function CommentInput(props) {
  const createComment= async(e) =>{
    e.preventDefault();
    console.log(e.target[0].value)

if (!e.target[0].value)
  return

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
        <textarea className='inputcomment'></textarea>
    <button type='submit' className='bottoneCommenta'>commenta</button>
    <div></div>
    </form>
  )
}

export default CommentInput