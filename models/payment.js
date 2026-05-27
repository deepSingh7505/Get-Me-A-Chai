import mongoose from "mongoose";

const paymentschema = new mongoose.Schema({
    name:{type:String , required : true},
    to_user:{type:String , required : true},
    oid:{type:String , required : true},
    message:{type:String , required : true},
    amount:{type:Number , required : true},
    done:{type:Boolean , default : false},
})
export default mongoose.models.payment || mongoose.model("payment" , paymentschema) ; 