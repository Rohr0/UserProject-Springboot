import React, { useState } from 'react'
import axios from 'axios'
import style from './home.module.css'
import { useNavigate } from 'react-router-dom'


const SignUp = () => {
    let [name, setName] = useState("")
    let [phone, setPhone] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let navigate = useNavigate()
    let handleSubmit = (e) => {
        e.preventDefault()
        let user = { name, email, phone, password }
        axios.post("http://localhost:8080/users", user).then((response) => {
            alert("User Saved Successfully with Id:" + response.data.data.id)
            console.log(response)
            navigate("/")
        })
    }
    return (
        <div id={style.home}>
            <form onSubmit={handleSubmit} >
                <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder='Enter Name' />
                <br /><br />
                <input type="text" value={phone} onChange={(e) => { setPhone(e.target.value) }} placeholder='Enter Phone' />
                <br /><br />
                <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter Email' />
                <br /><br />
                <input type="text" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Enter Password' />
                <br /><br />
                <button>Sign Up</button>

            </form>

        </div>
    )
}

export default SignUp