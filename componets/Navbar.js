import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
    <nav className='flex justify-between px-4  bg-gray-800   text-white p-2'>

    <div className='text-2xl'>
     FundRazer

          </div>
          <div className='flex gap-4 items-center'>
            <Link href="/Home">Home</Link>
            <Link href="/Home">About</Link>
            <Link href="/Home">GitHub</Link>
            <Link href="/Home">Linkedin</Link>
            </div>
    </nav>
    </>
  )
}

export default Navbar
