import React from 'react'
import style from './home.module.css'

const ViewUser = () => {
    let user = JSON.parse(localStorage.getItem("user"))
    return (
        <div id={style.home}>
            <button disabled="disabled"><h2>Id : {user.id}</h2></button>
            <button disabled="disabled"> <h2>Name : {user.name}</h2></button>
            <button disabled="disabled"><h2>Phone : {user.phone}</h2></button>
            <button disabled="disabled"><h2>Email : {user.email}</h2></button>


        </div>
    )
}

export default ViewUser