'use client'

import {useState} from "react";
import axios from "axios";

const Login = () => {
    const [payload, setPayload] = useState({
        user: "",
        pass: ""
    })

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        console.log("Payload: ", payload);
        const data = await axios.post(`/api/login`, {...payload});
        console.log("Login res: ", data);
    }
    const changeUser =(e:any)=>{setPayload({...payload, user: e.target.value})}
    const changePass =(e:any)=>{setPayload({...payload, pass: e.target.value})}
    const server = process.env.NEXT_PUBLIC_SERVER;

    return (
        <div className="nt-page nt-login">
            <div className="nt-mod-login border rounded border-black p-3 mb-24">
                <h3>Login {server}</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="user-name" id="nt-login-user-name" className="block border border-black rounded py-2 px-4 mb-2" onChange={changeUser}/>
                    <input type="password" name="password" id="nt-login-password" className="block border border-black rounded py-2 px-4 mb-2" onChange={changePass}/>
                    <button type="submit" className="bg-black rounded text-white py-3 px-8">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login