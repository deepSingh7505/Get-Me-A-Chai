"use server"
import Razorpay from "razorpay"
import Payment from "../models/payment"
import mongoose from "mongoose"
import User from "../models/User"
import payment from "../models/payment"
import { error } from "node:console"

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
    await Payment.create({oid : x.id , amount :amount , to_user : to_username , name : paymentform.name , message : paymentform.message})
    //jub bhi initiate ko bulaoge tho given (amount , username , paymmentform ) k liye success ya failure return krega 
    return x ;

}

export const  fetchuser  = async (username)=>{
    
    let data = await mongoose.connect(process.env.MGDB)
    let u = await User.findOne({username: username}).lean()
    return {...u , _id : u._id.toString()};
    
}

export const fetchPayment = async (username)=>{
    
        let data = await mongoose.connect(process.env.MGDB)
        let p = await Payment.find({to_user : username}).sort({amount : -1}).lean()
        return p.map(doc => ({ ...doc, _id: doc._id.toString() }))
}

export const updateprofile = async(data , oldusername)=>{
    await mongoose.connect(process.env.MGDB)
    let ndata = Object.fromEntries(data)

    //If username change krna hai tho cheak kro username phele se tho nhi hai
    if(oldusername !== ndata.username)
    {
        let u = await User.findOne({username : ndata.username})
        if(u)
        {
            return {error : "Username Already Taken !"}
        }
    }
    await User.updateOne({email : ndata.email} , ndata)
}