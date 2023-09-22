import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ViewProducts = () => {
    let [products, setProducts] = useState([])
    let user = JSON.parse(localStorage.getItem("user"))
    useEffect(() => {
        let fetchData = () => {
            axios.get(`http://localhost:8080/products/byuser-id/${user.id}`)
                .then((response) => {
                    setProducts(response.data.data)
                })
                .catch(() => {
                    alert("Not a good request")
                })
        }
        fetchData()
    }, [])
    return (
        <div>
            <table border={2}>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Brand</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Cost</th>
                    <th>Image Url</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                {
                    products.map((p) => {
                        <tr>
                            <td>{p.id}</td>
                            <td>{p.item}</td>
                            <td>{p.brand}</td>
                            <td>{p.id}</td>
                            <td>{p.category}</td>
                            <td>{p.description}</td>
                            <td>{p.cost}</td>
                            <td>{p.image}</td>
                            <td><Link>Edit</Link></td>
                            <td><Link>Delete</Link></td>
                        </tr>
                    })
                }

            </table>
        </div>
    )
}

export default ViewProducts