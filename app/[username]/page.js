"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { Router, useRouter } from "next/navigation"
import { useEffect, useState } from "react"


const Username = ({ params }) => {
  const router = useRouter()
  const { data: session } = useSession()
  const [profile, setprofile] = useState("banner/profile.png")
  const { username } = React.use(params);

  useEffect(() => {
    if (session) {
      setprofile(session.user.image)
      console.log(session);
    }
  }, [session])
  return (
    <>
      <main className='flex-1'>
        <div className='w-full relative'>
          <img className='w-full max-h-[min(400px,50vh)]  object-fit' src="banner/cfw.jpg" alt="" />
          <div className='border-2 border-black rounded-full absolute bottom-[-50] left-[46%]'>
            <img width={100} height={100} className=' rounded-full' src={profile} alt="" />
          </div>
        </div>
        <div className='info flex flex-col items-center gap-4 p-13.75 bg-[#00091D]'>

        <div className='font-bold text-3xl'>JB2A - Jules&Ben's Animated Assets
        </div>

        <div>Creating Animated art for VTT's
        </div>
  
        <div>25,556 members &bull; 110 posts &bull; $17,550/release</div>
        <div className='flex flex-col'>
          <button className='bg-[#5B51B0] p-3 my-3 rounded-xl'>Join for free</button>
          <button className='bg-[#3D3C41] p-3 rounded-xl'>See membership options</button>
        </div>

        </div>

      </main>
    </>
  )
}

export default Username
