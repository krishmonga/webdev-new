
import mongoose , {Schema} from "mongoose";
const userSchema = new Schema(
    {
      usename: String,
      email : String
    }
)

export const User = mongoose.models("User",userSchma)