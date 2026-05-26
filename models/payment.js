import mongoose from "mongoose";

const paymentschema = new mongoose.Schema({
    name:{type:String , required : true},
    to_user:{type:String , required : true},
    oid:{type:String , required : true},
    message:{type:String , required : true},
    amount:{type:Number , required : true},
    createdAt:{type:Date , required : true},
    udpatedAt:{type:Date , required : true},
    done:{type:Boolean , Default : false},
})
export default mongoose.models.payment || mongoose.model("payment" , paymentschema) ; 