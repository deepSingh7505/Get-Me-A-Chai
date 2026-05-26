import mongoose from "mongoose";

const Userschema = new mongoose.Schema({
    name:{type:String , required : true},
    email:{type:String ,},
    username:{type:String , required : true },
    porfilepicture:{type:String , },
    coverpicture:{type:String ,  },
    createdAt:{type:Date , default:Date.now},
    updateAt:{type:Date , default:Date.now},
});
export default mongoose.models.user || mongoose.model("user" , Userschema);