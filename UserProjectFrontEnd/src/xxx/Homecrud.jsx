import React from "react"
import { Link } from "react-router-dom"
import style from "./home.module.css"

const Homecrud = () => {
    return (
        <section id={style.nav}>
            <Link to="/">Create Users</Link>
            <Link to="/user">Existing Users</Link>
        </section>
    )
}
export default Homecrud
