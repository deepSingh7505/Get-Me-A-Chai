"use client"
import React from 'react'
import { useState } from 'react'

const Dashboard = () => {
    const [form, setform] = useState({name:"", email:"",username:"",profilepicture:"",coverpicture:"",razorpayid:"",razorpaysecret:""})
    const handlechange = (e)=>{
        setform({...form ,[e.target.name]:e.target.value})
    }
    const onsubmit = ()=>{
        console.log(form);
        
    }

  return (
    <main className='flex-1  flex flex-col items-center'>
        <h1 className=' my-5 font-bold text-2xl '>Welcome To Your Dashboard</h1>
       
        <div className=' flex flex-col gap-3'>
        <div>
            <p className='ml-1 font-bold'>Name </p>
            <input onChange={handlechange} className='bg-[#EEEEEE] text-black focus:outline-none w-[45vw] px-2 py-1 rounded-full ' value={form.name} type="text" name="name" id="" />
        </div>
        <div>
            <p className='ml-1 font-bold'>Email </p>
            <input onChange={handlechange} className='bg-[#EEEEEE] text-black focus:outline-none w-[45vw] px-2 py-1 rounded-full ' value={form.email} type="email" name="email" id="" />
        </div>
        <div>
            <p className='ml-1 font-bold'>Username </p>
            <input onChange={handlechange} className='bg-[#EEEEEE] text-black focus:outline-none w-[45vw] px-2 py-1 rounded-full ' value={form.username} type="text" name="username" id="" />
        </div>
        <div>
            <p className='ml-1 font-bold'>Profile Picture </p>
            <input onChange={handlechange} className='bg-[#EEEEEE] text-black focus:outline-none w-[45vw] px-2 py-1 rounded-full ' value={form.profilepicture} type="text" name="profilepicture" id="" />
        </div>
        <div>
            <p className='ml-1 font-bold'>Cover Picture </p>
            <input onChange={handlechange} className='bg-[#EEEEEE] text-black focus:outline-none w-[45vw] px-2 py-1 rounded-full ' value={form.coverpicture} type="text" name="coverpicture" id="" />
        </div>
        <div>
            <p className='ml-1 font-bold'>Rozorpay Id </p>
            <input onChange={handlechange} className='bg-[#EEEEEE] text-black focus:outline-none w-[45vw] px-2 py-1 rounded-full ' value={form.razorpayid} type="text" name="razorpayid" id="" />
        </div>
        <div>
            <p className='ml-1 font-bold'>Rozorpay Secret</p>
            <input onChange={handlechange} className='bg-[#EEEEEE] text-black focus:outline-none w-[45vw] px-2 py-1 rounded-full ' value={form.razorpaysecret} type="text" name="razorpaysecret" id="" />
        </div>
        
        <button onClick={()=>onsubmit()} className='text-white bg-gradient-to-br cursor-pointer from-purple-600 to-blue-500 hover:bg-gradient-to-bl dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 my-3 text-center leading-5' >Submit</button>
        </div>
    </main>
  )
}

export default Dashboard
