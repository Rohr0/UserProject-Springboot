import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import style from './home.module.css'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
    let [item, setItem] = useState("")
    let [brand, setBrand] = useState("")
    let [category, setCategory] = useState("")
    let [description, setDescription] = useState("")
    let [cost, setCost] = useState("")
    let [image, setImage] = useState("")
    let navigate = useNavigate()
    let add = (e) => {
        let user = JSON.parse(localStorage.getItem("user"))
        e.preventDefault()
        let product = { item, brand, category, description, cost, image }
        axios.post(`http://localhost:8080/products/${user.id}`, product)
            .then((response) => {
                alert("Item added with id : " + response.data.data.id)
                navigate("/userHome")

            })
            .catch(() => {
                alert("Something went wrong")
                navigate("/userHome")
            })
    }
    return (
        <div id={style.home}>
            <form onSubmit={add} >
                Item Name:<input type="text" value={item} onChange={(event) => setItem(event.target.value)} /> <br />
                Item Brand:<input type="text" value={brand} onChange={(event) => setBrand(event.target.value)} /><br />
                Item Category:<input type="text" value={category} onChange={(event) => setCategory(event.target.value)} /><br />
                Item Description:<input type="text" value={description} onChange={(event) => setDescription(event.target.value)} /><br />
                Item Cost:<input type="number" value={cost} onChange={(event) => setCost(event.target.value)} /><br />
                Item Image Url:<input type="text" value={image} onChange={(event) => setImage(event.target.value)} /><br />
                <button>Submit</button>
                <button onClick={() => { navigate("/userHome") }}>Back</button>
            </form>
        </div>
    )
}

export default AddProduct