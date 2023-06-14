// eslint-disable-next-line
import React, { Component } from 'react'
import { useState } from 'react'
import "./Signin.css"
// eslint-disable-next-line
import axios from 'axios'


export default function Signin(){
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")


    function save(e){
      setEmail(e.target.value)
    }
    function show(e){
      
      console.log(email,password,)
      // axios.post("https://localhost:4000/add",{mail:email,passcode:password})
      // .then((res)=>{
      //   console.log(res.data)
      // })
      
      
      setEmail("")
      setPassword("")
      }
  
    return (
    <div className='signin'  >
      <h1>Sign In Page</h1>
        <p>Enter email</p>
      <p><input value={email} placeholder='Enter name' onChange={save}/></p>
      <p>Enter password</p>
      <p><input
      value={password}
      placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)}
      /></p>
      
      <button onClick={show}>Submit</button>
      </div>
    )
  }

