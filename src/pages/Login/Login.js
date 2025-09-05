import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    
    const [userName, setUserName]=useState("")
    const[passowrd, setPassword]=useState("")
    
    const handleSubmit=(e)=>{
        
        e.preventDefault()
// console.log(userName)
// console.log(passowrd)
    }
  return (
    <>
    <div className='text-center'>
        <div className="container">
        <div className="row">
            <div className="col">
                <div className='card p-4 w-50 m-auto mt-5 '>
                    <h2> Login</h2>
                   
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                            <div className="col">
                                <input type="text"  placeholder='Username' onChange={(e)=>{setUserName(e.target.value)}}/>
                            </div>
                        </div>
                    
                   
                        <div className="row py-4">
                            <div className="col ">
                                <input type="passowrd" placeholder='Enter Your Password'onChange={(e)=>{setPassword(e.target.value)}}/>
                            </div>
                        </div>
                    <div className="row">
                            <div className="col ">
                               <button className='btn btn-success w-50'>Login</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col ">
                               <p className='link mt-4'>Don't have an Account <Link to='/register'>Register here!</Link></p>
                            </div>
                        </div>
                        
                        </form>
                </div>
            </div>
        </div>
    </div>
    </div>
    
    </>
  )
}
