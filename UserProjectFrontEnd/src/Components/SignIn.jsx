import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
// import SignUp from './SignUp'
import style from './home.module.css'

const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    let navig = useNavigate()

    let onClick1 = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8080/users/verifyByEmail?email=${email}&password=${password}`)
            .then((response) => {
                localStorage.setItem("user", JSON.stringify(response.data.data))
                console.log(response.data.data)
                alert(response.data.message)
                navig("/userHome")
            }).catch(() => {
                alert('Invalid Email or Password')
                navig("/")
            })
    }
    let onClick2 = () => {
        navig('/signup')
    }
    return (

        <div>
            <h1>Welcome</h1>
            < div id={style.home} >
                <form id={style.f1} >
                    <input type="email" placeholder='Enter Email' value={email} onChange={(e) => { setEmail(e.target.value) }}  />
                    <br /><br />
                    <input type="password" placeholder='Enter Password' value={password} onChange={(e) => { setPassword(e.target.value) }}  />
                    <br /><br />
                    <button onClick={onClick1}>Sign In</button>
                    <br /><br />
                    <Link to="/signup"><button onClick={onClick2}>Sign Up</button></Link>
                </form>
            </ div>
        </div>
    )
}

export default SignIn
