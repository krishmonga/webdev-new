import bcrypt from "bcrypt"
import mongoose , {Schema} from "mongoose";
const userSchema = new Schema(
    {

      usename :{
        type : String,
        required: true,
        unique: true ,
        lowercase:true,
        trim : true ,
        index: true 
      },
      email:{
        type : String,
        required: true,
        unique: true ,
        lowercase:true,
        trim : true ,
      },
      fullname:{
        type : String,
        required: true,
        index : true ,
        trim : true ,
      },
     avatar:{
        type : String,//cloudinary url 
        required: true,
      },
     coverimage:{
        type : String, // cloudinary url
 
      }, 
      password:{
       type :String,
       required:[true ,"password is required"]
      },
      refreshtoken:{
      type : String
      }
    },
    {timestamps:true}
)
userSchema.pre("save", async function(next){
  if (!this.modified('password')) return next()
this.password =bcrypt.hash(this.password,10)
  userSchema.methods.isPasswordCorrect = async function (password){
    await bcrypt.compare(password,this.password)
  }
next()
})

export const User = mongoose.models("User",userSchema)