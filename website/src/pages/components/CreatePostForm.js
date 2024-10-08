import React from 'react'
import "../../styles/Form.css"
import axios from 'axios';
import { toast } from 'react-toastify';

function CreatePostForm(props) {

    const createPost = async (e) =>{
        e.preventDefault();
        console.log(e.target[0].value, e.target[1].value)

        let response = await axios.post("http://localhost:5555/posts",
            {
                title: e.target[0].value,
                description:e.target[1].value
            },
            {
                headers: {
                    authToken: localStorage.getItem("authToken")
                }
            })
            props.onCreate(response?.data);
            toast.success("Post creato");

    }
    return (
        <form className="PostForm" onSubmit={createPost}>
            <h2> CREATE POST </h2>
                <input type="text" placeholder="Title"/>
                <textarea type="text" placeholder="Description" />
            <button id="Publish" type="submit"> Publish </button>
    
        </form>
      )
}

export default CreatePostForm