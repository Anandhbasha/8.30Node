import mongoose from "mongoose"

const database = (URI)=>{
    try {
        mongoose.connect(URI)
        const db = mongoose.connection
        db.once('open',()=>{
            console.log("Db is Connected");            
        })
    } catch (error) {
        console.log("Unable to connect db");        
    }
}

export default database