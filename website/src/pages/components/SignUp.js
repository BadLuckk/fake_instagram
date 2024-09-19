import React from 'react';
import '../../styles/SignUp.css';
import axios from "axios";

function SignUp(props) {

 

  async function onSignUp(e) {

    e.preventDefault();

    console.log("E", e.target[0].value, e.target[1].value, e.target[2].value);

    let respose = await 
    axios.post("http://localhost:5555/users",
    {
      email: e.target[0].value,
      password: e.target[1].value,
      username: e.target[2].value
})
  
  console.log (respose.data)
  }



  return (
    <form className="parent" onSubmit={onSignUp}>
      <h1>SCOPIAMO TUA MAMMA!!!</h1>
      <img src = "apple-touch-icon.png"></img>  
      <input type="text" placeholder='email'/>  

      <input type="text"placeholder='password'/> 
      <input type="text" placeholder='username'/>  
  
      <button type="submit"> Sign Up </button>
      <button
      type="button"
      onClick={() => props.changeToLogin()}
      >Login </button>
      <div className="bottoni">
      <button> Cancel </button>
      </div>
    </form>
  )
}

export default SignUp