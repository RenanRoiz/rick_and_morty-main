import { useState } from "react";

export default function Formulario (){

    const [userData, setUserData] = useState({ username: '', password: '' });
    const [errors, setErrors] = useState({ username: '', password: '' })

    const handleInputChange = (e)=>{
        setUserData({
            ...userData,
            [e.target.username]:e.target.value
        })
    }

    return <form>
        <label>Username:</label>
        <input value={userData.username} onChange={handleInputChange}></input>
        <label>Password:</label>
        <input value={userData.password} onChange={handleInputChange}></input>
        <button></button>
    </form>
}