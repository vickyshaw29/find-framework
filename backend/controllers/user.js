const User=require('../models/user')
exports.getLanguages=async(req,res)=>{
    try {
        const data=await User.find()
        if(data){
            return res.status(200).json(data)
        }
        return res.status(400).json({msg:'data not found'})
    } catch (error) {
        console.log(error)
    }
}