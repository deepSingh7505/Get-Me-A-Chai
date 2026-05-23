"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { Router, useRouter  } from "next/navigation"
import { useEffect ,useState} from "react"


const Dashboard = () => {
    const { data: session } = useSession()
    const router = useRouter()
    const [profile, setprofile] = useState("banner/profile.png")
//    const [logo, setlogo] = useState("https://lh3.googleusercontent.com/a/ACg8ocLkywEk0BzA9TpnalPQqUIo0qD2tpz7X3RMjUrfbL6fIRfU9lg=s96-c")

    useEffect(() => {
        if(session)
        {
            setprofile(session.user.image)
            console.log(session);
            
        }
        if (!session) {
            router.push('/Login')
        }
    }, [session])

    return (
        <>
      <main className='flex-1'>
          <div>
            Dashboard
        </div>
        <div className='w-full relative'>
            <img className='w-full max-h-[min(350px,40vh)]  object-fit' src="banner/cfw.jpg" alt="" />
            <div  className='border rounded-full absolute bottom-[-50] left-[46%]'>
            <img width={100} height={100}  className=' rounded-full' src={profile} alt="" />
            </div>
        </div>
      </main>
        </>
    )
}

export default Dashboard
