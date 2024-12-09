import mongoose from "mongoose";

const connection=async()=>{
try {
    if (mongoose.connections[0].readyState) {
        return true; 
      }
      
    const connect= await mongoose.connect(process.env.CONNECTION_URL)
    if(!connect){
        return false
    }
    return true
    
} catch (error) {
    console.log(error);
    
}
}


export default connection