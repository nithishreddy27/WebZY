import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        Id:{
            type:String
        }
    }
);

export default mongoose.models.test || mongoose.model("tests", userSchema);