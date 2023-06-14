// import axios from 'axios'
import React,{useState} from 'react'
import "./Signup.css"

export default function Signup() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [conformpassword,setConformPassword]=useState("")

  function save(e){
    setEmail(e.target.value)
  }
  function show(e){
    if(password!==conformpassword)
     alert("Enter correct password")
    else{
    console.log(email,password,conformpassword)
    // axios.post("https://localhost:4000/add",{mail:email,passcode:password})
    // .then((res)=>{
    //   console.log(res.data)
    // })
    
    
    setEmail("")
    setPassword("")
    setConformPassword("")
    }
  }
  return (
    <div className='signup'  >
      <h1>Sign up Page</h1>
        <p>Enter email</p>
      <p><input value={email} placeholder='Enter name' onChange={save}/></p>
      <p>Enter password</p>
      <p><input
      value={password}
      placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)}
      /></p>
      <p>Conform password</p>
       <p><input
      value={conformpassword}
      placeholder='Conform password' onChange={(e)=>setConformPassword(e.target.value)}
      /></p>
      <button onClick={show}>Submit</button>
    </div>
  )
}

