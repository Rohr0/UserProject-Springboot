import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import style from "./home.module.css"

const Createuser = () => {

    let [name, setName] = useState("")
    let [salary, setSalary] = useState("")
    let [company, setCompany] = useState("")

    let nameData = (e) => { setName(e.target.value) }
    let salData = (e) => { setSalary(e.target.value) }
    let compData = (e) => { setCompany(e.target.value) }

    let navigate = useNavigate()

    let formHandle = (e) => {
        e.preventDefault()
        // console.log(name, salary, company)
        let payload = { name, salary, company }
        axios.post("http://localhost:3000/users", payload)
            .then(() => { console.log("Data Added") })
            .catch(() => { console.log("Data not added") })
        navigate("/user")
    }



    return (
        < div id={style.myForm} >
            {/* <Createuser/> */}
            <form action="">
                <tr>
                    <th colSpan="2"><h4>User Details</h4></th>
                </tr>
                <tr>
                    <td><label htmlFor="">Name</label></td>
                    <td>:<input type="text" value={name} onChange={nameData} /></td>
                </tr>
                <tr>
                    <td><label htmlFor="">Salary</label></td>
                    <td>:<input type="text" value={salary} onChange={salData} /></td>
                </tr>
                <tr>
                    <td><label htmlFor="">Company</label></td>
                    <td>:<input type="text" value={company} onChange={compData} /></td>
                </tr>
                <tr>
                    <th colSpan="2" onClick={formHandle}><button>Submit</button></th>
                </tr>
            </form>
        </ div>
    )
}
export default Createuser