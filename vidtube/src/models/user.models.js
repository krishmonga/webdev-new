import bcrypt from "bcrypt"
import mongoose , {Schema} from "mongoose";
import jwt from 'jsonwebtoken'
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

userSchema.methods.generateAccessToken=function()
{
  //short lived tokens
   jwt.sign({ 
    _id:this._id,
    email:this.email,
    usename:this.username,
    fullname:this.fullname
   },
    process.env.ACCESS_TOKEN_SECRET,
    {expiresIn:process.env.ACCESS_TOKEN_EXPIRY});
}
userSchema.methods.generateRefreshToken=function()
{
  //short lived tokens
   jwt.sign({ 
    _id:this._id,
   
   },
    process.env.REFRESH_TOKEN_SECRET,
    {expiresIn:process.env.REFRESH_TOKEN_EXPIRY});
}
export const User = mongoose.models("User",userSchema)