import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homecrud from "./Components/Homecrud"
import Createuser from "./Components/Createuser"
import User from "./Components/User"
import Editusers from "./Components/Editusers"

const App = () => {

    return (
        <div>
            <BrowserRouter>
                <Homecrud />
                <Routes>
                    <Route element={<Createuser />} path="/" />
                    <Route element={<User />} path="/user" />
                    <Route element={<Editusers />} path="/edit/:index"></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App