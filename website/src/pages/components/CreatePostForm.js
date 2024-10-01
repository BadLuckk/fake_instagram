import React from 'react'
import "../../styles/Form.css"
import axios from 'axios';

function CreatePostForm() {

    const createPost = async (e) =>{
        e.preventDefault();
        console.log(e.target[0].value, e.target[1].value)

        await axios.post("http://localhost:5555/posts",
            {
                title: e.target[0].value,
                description:e.target[1].value
            },
            {
                headers: {
                    authToken: localStorage.getItem("authToken")
                }
            })

    }
  return (
    <form className='Form'  onSubmit={createPost}>
        <h1>Post</h1>
        <input type="text" placeholder='titolo' />
        
        <textarea className='descrizione'/>

        <button type="submit"> Create Post </button>
    </form>
  )
}

export default CreatePostForm