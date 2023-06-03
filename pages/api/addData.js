import ConnectDB from "@/components/ConnectDB"
import Test from "@/models/Test"

export default async function handler(req,res){
    console.log("re",req.body)
    await ConnectDB()
    await Test.create(req.body)
    res.status("200").send({"success":true})

}