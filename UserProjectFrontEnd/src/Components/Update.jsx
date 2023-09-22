import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import style from './home.module.css'

const Update = () => {
    let user = JSON.parse(localStorage.getItem("user"))
    let [id, setId] = useState(user.id)
    let [name, setName] = useState(user.name)
    let [phone, setPhone] = useState(user.phone)
    let [email, setEmail] = useState(user.email)
    let [password, setPassword] = useState(user.password)

    let navigate = useNavigate()

    let handleSubmit = (e) => {
        e.preventDefault()
        let user = { id, name, email, phone, password }
        axios.put("http://localhost:8080/users", user)
            .then((resp) => {
                alert(`Data Updated for user with ID ${resp.data.data.id}`)
                localStorage.setItem("user", JSON.stringify(resp.data.data))
                console.log(resp)
                window.location.assign("/viewuser")
            })
        navigate("/viewuser")
    }

    return (
        <div id={style.home} >
            <form onSubmit={handleSubmit} id={style.id}>
                <input type="text" value={id} onChange={(e) => { setId(e.target.value) }} disabled />
                <br /><br />
                <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder='Enter Name' />
                <br /><br />
                <input type='tel' value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                <br /><br />
                <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <br /><br />
                <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <br /><br />
                <button>Update</button>
            </form>

        </div>
    )
}

export default Update