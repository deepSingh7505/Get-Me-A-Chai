"use client"
import React from 'react'
import Paymentpage from '../../componets/Paymentpage';

const Username = ({ params }) => {
  const { username } = React.use(params);  

  return (
    <>
<Paymentpage username={username}/>
    </>
  )
}

export default Username
