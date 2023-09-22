import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from "./home.module.css"

const DeleteUser = () => {
    let navigate = useNavigate()
    let [password, setPassword] = useState("")
    let onClick = () => {
        let user = JSON.parse(localStorage.getItem("user"))
        if (password === user.password) {
            axios.delete(`http://localhost:8080/users/${user.id}`)
                .then(() => {
                    localStorage.removeItem("user")
                    alert("User details deleted Successfully")
                })
                .catch(() => { alert("Something went wrong") })
        }
        else {
            alert("Wrong password")
            navigate("/userhome")
        }
    }
    return (
        <div id={style.home}>
            <form>
                <input type="password" value="password" onChange={(e) => { setPassword(e.target.value) }} />
                <button onClick={onClick}>Delete</button>
            </form>
        </div>
    )
}

export default DeleteUser