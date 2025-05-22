import user from "../Model/Model.js"

export const readData = async(req,res)=>{
        const existingData = await user.find()
         return res.status(200).json(existingData)
}
export const insertData = async(req,res)=>{
    const {userName,userEmail} = req.body
    const insertNewData = await user.insertOne({userName,userEmail})
    return res.status(202).send(`The user Name is ${userName} Email is ${userEmail}`)
}
export const updateData = (req, res) => {
    const { id } = req.params;
    const { age } = req.body;
    res.status(201).json(`User ${id}'s new age (${age}) updated successfully.`);
}
export const deleteData = (req,res)=>{
    const { id } = req.params;
    res.status(201).json(`User ${id}'s Deleted Sucessfully.`);

}