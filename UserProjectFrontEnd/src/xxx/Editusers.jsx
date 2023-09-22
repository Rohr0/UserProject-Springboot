import React, { useEffect, useState } from 'react'
import axios from 'axios'
import style from './home.module.css'
import { useNavigate, useParams } from 'react-router-dom'

const Editusers = () => {
    let [name, setName] = useState("")
    let [salary, setSalary] = useState("")
    let [company, setCompany] = useState("")

    let { index } = useParams()
    let navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:3000/users/${index}`)
            .then((resp) => {
                setName(resp.data.name)
                setSalary(resp.data.salary)
                setCompany(resp.data.company)
            })
    }, [])

    let nameData = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }
    let salData = (e) => {
        e.preventDefault()
        setSalary(e.target.value)
    }
    let compData = (e) => {
        e.preventDefault()
        setCompany(e.target.value)
    }

    let formHandle = (e) => {
        e.preventDefault()
        let payload = { name, salary, company }
        axios.put(`http://localhost:3000/users/${index}`, payload)
            .then(() => { console.log("Data Added") })
            .catch(() => { console.log("Data not added") })

        navigate("/user")
    }
    return (
        < div id={style.myForm} >
            <form action="">
                <tr>
                    <th colSpan="2"><h4>Update User Details</h4></th>
                </tr>
                <tr>
                    <td><label htmlFor="">Name</label></td>
                    <td>:<input type="text" value={name} onChange={nameData} /></td>
                </tr>
                <tr>
                    <td><label htmlFor="">Salary</label></td>
                    <td><input type="text" value={salary} onChange={salData} /></td>
                </tr>
                <tr>
                    <td><label htmlFor="">Company</label></td>
                    <td>:<input type="text" value={company} onChange={compData} /></td>
                </tr>
                <tr>
                    <th colSpan="2" ><button onClick={formHandle}>Update</button></th>
                </tr>
            </form>
        </ div>
    )
}

export default Editusers