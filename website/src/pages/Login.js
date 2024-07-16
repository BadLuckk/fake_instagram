import React from 'react';
import '../styles/Login.css';
import axios from "axios"
function Login() {

 

  async function onSignUp(e) {

    e.preventDefault();

    console.log("E", e.target[0].value, e.target[1].value);

    let respose = await 
    axios.post("http://localhost:5555/users",
    {
      email: e.target[0].value,
      password: e.target[1].value
})
  
  console.log (respose)
  }



  return (
    <form className="parent" onSubmit={onSignUp}>
      <h1>SCOPIAMO TUA MAMMA!!!</h1>
      <img src = "gesto.png"></img>  
    
      <input type="text" placeholder='nome'/>  

      <input type="text"placeholder='password'/> 
  
      <button type="submit"> Sign Up </button>

      <div className="bottoni">
      <button> Cancel </button>
      <button> help per andare a troie </button>
      </div>
    </form>
  )
}

export default Login