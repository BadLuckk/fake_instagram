import React from 'react'
import "../../styles/Menu.css"
import HomeInactive from "../../assets/home-inactive.svg"
import HomeActive from "../../assets/home-active.svg"
import CreateActive from "../../assets/create-active.svg"
import CreateInactive from "../../assets/create-inactive.svg"
function Menu(props) {
  return (
    <div className="Menu">
        <div>
        <button onClick={()=> {props.cambiaMenu("show")}}>
            <img src= {props.menu === "show" ? HomeActive : HomeInactive } alt={'Home'}/>
        </button>
        <button onClick={()=> {props.cambiaMenu("create")}}>
        <img src= {props.menu === "create" ?CreateActive : CreateInactive } alt={'create'}/>
        </button>
        <button onClick={() =>{props.onLogout()} }>
            Logout
        </button>
    </div>
    </div>
          
  )
}

export default Menu