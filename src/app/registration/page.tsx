'use client'
import { useState } from "react";
import axios from "axios";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("Form submitted");
    try {
      const {data} = await axios.post(`/api/registration`, {
        name, email, number, pass
      });
      console.log("Axios result: ", data);
    } catch (err) {
      console.log("Axios error: ", err);
    }
  }

  return (
    <div className="nt-page nt-registration">
      <form className="border border-black rounded-lg p-12 mb-10" onSubmit={handleSubmit}>
        <input className="block" type="text" placeholder="What is your name?" onChange={(e)=>{
          setName(e.target.value)
        }}/>
        <input className="block" type="email" placeholder="What is your email?" onChange={(e)=>{
          setEmail(e.target.value)
        }}/>
        <input className="block" type="text" placeholder="What is phone number?" onChange={(e)=>{
          setNumber(e.target.value)
        }}/>
        <input className="block" type="password" placeholder="Set your password" onChange={(e)=>{
          setPass(e.target.value)
        }}/>
        <button className="bg-black px-6 py-2 rounded-lg text-white" type="submit">Register</button>
      </form>
    </div>
  )
}

export default Registration