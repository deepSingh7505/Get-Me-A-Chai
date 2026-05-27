"use server"
import Razorpay from "razorpay"
import payment from "../models/payment"
import mongoose from "mongoose"
import User from "../models/User"

export const initiate = async (amount, to_username, paymentform) => {
    await mongoose.connect(process.env.MGDB)



    //create a instance || ye order ka instance bna rha hai 
    var instance = new Razorpay({ key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, key_secret: process.env.RAZORPAY_SECRET })


    let options = {
        amount : Number.parseInt(amount),
        currency : "INR",
    }

    //ye order lekre success or failure return krega and 
    //success k andar id hogi order ki 
    let x = await instance.orders.create(options);

    // a payment object for pending orders in database
    await payment.create({oid : x.id , amount :amount , to_user : to_username , name : paymentform.name , message : paymentform.message})
    //jub bhi initiate ko bulaoge tho given (amount , username , paymmentform ) k liye success ya failure return krega 
    return x ;

}