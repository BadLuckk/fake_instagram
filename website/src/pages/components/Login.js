import React from 'react';
import '../../styles/SignUp.css';
import axios from "axios";
import Validation from "../../services/Validation";

function Login(props) {
 

  async function onSignUp(e) {

    e.preventDefault();

    console.log("E", e.target[0].value, e.target[1].value, e.target[2].value);

    if(Validation.isEmail(e.target[0].value)){

    }
    axios.post {"http://localhost:5555/users",
        {
            ../Validation.isEmail(e.target[0].value) ? {email: e.target[e].value} :{username: e.target[e].value},
            password: e.target[1].value

    }

    }
//     let respose = await 
//     axios.post("http://localhost:5555/users",
//     {
//       email: e.target[0].value,
//       password: e.target[1].value,
//       username: e.target[2].value
// })
  
//   console.log (respose.data)
  }



  return (
    <form className="parent" onSubmit={onSignUp}>
      <h1>Benvenuto!!!</h1>
      <img src = "apple-touch-icon.png"></img>  

      <input type="text" placeholder='username'/>  
      <input type="text"placeholder='password'/> 
  
      <button type="submit"> Login </button>
      <button
      type="button"
      onClick={() => props.changeToSignUp()}
      >SignUp</button>
      <div className="bottoni">
      <button> Cancel </button>
      </div>
    </form>
  )
}

export default Login