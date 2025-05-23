import user from "../Model/Model.js"

export const readData = async(req,res)=>{
        const existingData = await user.find()
         return res.status(200).json(existingData)
}
export const insertData = async(req,res)=>{
    const {userName,userEmail} = req.body
    const checkData = await user.findOne({userEmail})
    if(checkData){
        return res.status(406).json(`User Already exist`)
    }
    const inserNewData = await user({userName,userEmail}).save()
    return res.status(202).send(`The user Name is ${userName} Email is ${userEmail}`)
}
 export const update = async (req,res) => {
    try {
        const {userEmail} =  req.params
        const {userName} = req.body
        const updatedata = await user.findOneAndUpdate({userEmail:userEmail},{$set:{userName}})
        if(!updatedata){
            res.status(404).json("Doesn't Exist")
        }
        
        res.status(202).json({message:"updated Successfully",
            data: updatedata.userName})
    } catch (error) {
        res.status(500).json(error)
    }
}
export const deleteData = async(req,res)=>{
    const { userEmail } = req.params;
    const checkExist = await user.findOneAndDelete({userEmail:userEmail})
    res.status(201).json(`User ${userEmail}'s Deleted Sucessfully.`);

}