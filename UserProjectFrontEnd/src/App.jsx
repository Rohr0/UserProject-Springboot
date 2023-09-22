import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignIn from "./Components/SignIn"
import UserHome from "./Components/UserHome"
import SignUp from "./Components/SignUp"
import Update from "./Components/Update"
import ViewUser from "./Components/ViewUser"
import DeleteUser from "./Components/DeleteUser"
import Protect from "./Components/Protect"
import AddProduct from "./Components/AddProduct"
import ViewProducts from "./Components/ViewProducts"

const App = () => {

    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route element={<SignIn />} path="/" />
                    <Route element={<UserHome />} path="/userHome" />
                    <Route element={<SignUp />} path="/signup" />
                    {/* <Route element={<Update />} path="/update" /> */}
                    <Route element={<Protect Child={Update} />} path="/update" />
                    <Route element={<ViewUser />} path="/viewuser" />
                    <Route element={<Protect Child={DeleteUser} />} path="/deleteuser" />
                    <Route element={<Protect Child={AddProduct} />} path="/addproduct" />
                    <Route element={<Protect Child={ViewProducts} />} path="/addproducts" />

                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App