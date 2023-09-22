import React from 'react'
import style from './home.module.css'
import { Link, useNavigate } from 'react-router-dom'

const UserHome = () => {
    let navigate = useNavigate();
    let logout = () => {
        localStorage.removeItem("user")
        navigate("/")
    }
    return (
        <div id={style.home}>
            {/* <h1>Home Page</h1> */}
            <Link to="/viewuser"><button>View Profile</button></Link>
            <Link to="/update"><button>Update Profile</button></Link>
            <Link to="/deleteuser"><button>Delete Profile</button></Link>
            <Link to="/addproduct"><button>Add Product</button></Link>
            <Link to="/viewproducts"><button>View Product</button></Link>
            <button onClick={logout}>Log Out</button>
        </div>
    )
}
export default UserHome